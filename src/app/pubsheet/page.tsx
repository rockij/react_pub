'use client';

import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { CircleAlert, Copy, Search, Triangle } from 'lucide-react';
import { Badge, Button, Pagination, Table, type TableColumn, type TableRow } from '../../components';
import { Select } from '../../components/Select/Select';
import TooltipDemo from '../../components/Tooltip/Tooltip';
import { ModeToggle } from '../mode-toggle';
import { SiteFooter } from '../site-footer';
import { StorybookNavLinkBottom } from '../storybook-nav-link-bottom';
import { PUBSHEET_ROWS, type PubsheetRow } from './data';

const ITEMS_PER_PAGE = 10;

type SortKey = 'completedAt' | 'updatedAt';
type SortDirection = 'asc' | 'desc';
type StatusFilter = 'all' | PubsheetRow['status'];

const getStorybookUrl = () =>
  process.env.NEXT_PUBLIC_STORYBOOK_URL ??
  (process.env.NODE_ENV === 'production' ? '/storybook/' : 'http://localhost:6006');

const TEXT = {
  complete: '\uC644\uB8CC',
  review: '\uAC80\uC218',
  dashboardTitle:
    '\uD37C\uBE14\uB9AC\uC154 \uC791\uC5C5 \uD604\uD669\uC744 \uD55C \uD654\uBA74\uC5D0\uC11C \uD655\uC778\uD558\uB294 \uBA54\uB274',
  dashboardLead:
    '\uC774\uBBF8\uC9C0 \uD615\uD0DC\uCC98\uB7FC DEPTH \uAD6C\uC870, \uD654\uBA74\uBA85, \uC77C\uC815, \uB2F4\uB2F9\uC790, \uC0C1\uD0DC\uB97C \uD45C \uC911\uC2EC\uC73C\uB85C \uC815\uB9AC\uD55C \uD604\uD669\uD310 \uB808\uC774\uC544\uC6C3\uC785\uB2C8\uB2E4. \uAC80\uC0C9\uACFC \uB9C1\uD06C \uBCF5\uC0AC \uB3D9\uC791\uAE4C\uC9C0 \uBC14\uB85C \uD655\uC778\uD560 \uC218 \uC788\uAC8C \uAD6C\uC131\uD588\uC2B5\uB2C8\uB2E4.',
  searchPlaceholder:
    '\uBA54\uB274\uBA85, \uD654\uBA74\uBA85, \uB2F4\uB2F9\uC790\uB97C \uAC80\uC0C9\uD558\uC138\uC694',
  createTask: '\uC0C8 \uC791\uC5C5 \uB4F1\uB85D',
  dashboardHeading: '\uD37C\uBE14\uB9AC\uC2F1 \uD604\uD669\uD310',
  totalCount: '\uCD1D',
  resultCount: '\uAC80\uC0C9 \uACB0\uACFC',
  itemCount: '\uAC74',
  completedAt: '\uC644\uB8CC\uC77C',
  updatedAt: '\uC218\uC815\uC77C',
  status: '\uC0C1\uD0DC',
  copied: 'URL\uC744 \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.',
  copyFailed: '\uBCF5\uC0AC\uC5D0 \uC2E4\uD328\uD588\uC2B5\uB2C8\uB2E4.',
  empty: '\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.',
  caption: '\uD37C\uBE14\uB9AC\uC154 \uC791\uC5C5 \uD604\uD669\uD310',
  screenName: '\uD654\uBA74\uBA85',
  category: '\uAD6C\uBD84',
  owner: '\uB2F4\uB2F9\uC790',
  note: '\uBE44\uACE0',
  noteTooltip: '\uCC38\uACE0 \uBB38\uAD6C',
  noteButton: '\uBE44\uACE0 \uD655\uC778',
} as const;

const getDateValue = (value: string) => {
  const [year, month, day] = value.split('-').map(Number);
  return new Date(2000 + year, month - 1, day).getTime();
};

const getStatusTone = (status: PubsheetRow['status']) => {
  switch (status) {
    case TEXT.complete:
      return 'success' as const;
    case TEXT.review:
      return 'warning' as const;
    default:
      return 'neutral' as const;
  }
};

export default function PubsheetPage() {
  const storybookUrl = getStorybookUrl();
  const [rows] = useState<PubsheetRow[]>(PUBSHEET_ROWS);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState<SortKey>('completedAt');
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');

  const handleSort = (nextSortKey: SortKey) => {
    setCurrentPage(1);
    setSortDirection(previousDirection =>
      sortKey === nextSortKey ? (previousDirection === 'desc' ? 'asc' : 'desc') : 'desc',
    );
    setSortKey(nextSortKey);
  };

  const handleCopy = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
      }

      window.alert(TEXT.copied);
    } catch {
      window.alert(TEXT.copyFailed);
    }
  };

  const filteredRows = useMemo(
    () =>
      rows.filter(row => {
        if (statusFilter !== 'all' && row.status !== statusFilter) {
          return false;
        }

        if (!query.trim()) {
          return true;
        }

        const normalizedQuery = query.trim().toLowerCase();

        return [row.depth2, row.depth3, row.depth4, row.screenName, row.owner, row.url].some(
          value => value.toLowerCase().includes(normalizedQuery),
        );
      }),
    [query, rows, statusFilter],
  );

  const columns: TableColumn[] = [
    { key: 'depth2', header: 'DEPTH2', width: '9%' },
    { key: 'depth3', header: 'DEPTH3', width: '9%' },
    { key: 'depth4', header: 'DEPTH4', width: '10%' },
    { key: 'screenName', header: TEXT.screenName, width: '14%' },
    { key: 'category', header: TEXT.category, align: 'center', width: '6%' },
    { key: 'url', header: 'URL', width: '18%' },
    {
      key: 'completedAt',
      header: (
        <button
          type="button"
          className={`pubsheet-sort-header ${sortKey === 'completedAt' ? 'is-active' : ''}`}
          onClick={() => handleSort('completedAt')}
          aria-label={`${TEXT.completedAt} sort ${sortDirection}`}
        >
          <span>{TEXT.completedAt}</span>
          <span className="pubsheet-sort-icons" aria-hidden="true">
            <Triangle
              size={10}
              fill="currentColor"
              className={sortKey === 'completedAt' && sortDirection === 'asc' ? '' : 'is-muted'}
            />
            <Triangle
              size={10}
              fill="currentColor"
              className={sortKey === 'completedAt' && sortDirection === 'desc' ? 'is-desc' : 'is-desc is-muted'}
            />
          </span>
        </button>
      ),
      align: 'center',
      width: '8%',
    },
    {
      key: 'updatedAt',
      header: (
        <button
          type="button"
          className={`pubsheet-sort-header ${sortKey === 'updatedAt' ? 'is-active' : ''}`}
          onClick={() => handleSort('updatedAt')}
          aria-label={`${TEXT.updatedAt} sort ${sortDirection}`}
        >
          <span>{TEXT.updatedAt}</span>
          <span className="pubsheet-sort-icons" aria-hidden="true">
            <Triangle
              size={10}
              fill="currentColor"
              className={sortKey === 'updatedAt' && sortDirection === 'asc' ? '' : 'is-muted'}
            />
            <Triangle
              size={10}
              fill="currentColor"
              className={sortKey === 'updatedAt' && sortDirection === 'desc' ? 'is-desc' : 'is-desc is-muted'}
            />
          </span>
        </button>
      ),
      align: 'center',
      width: '8%',
    },
    { key: 'owner', header: TEXT.owner, align: 'center', width: '7%' },
    {
      key: 'status',
      header: (
        <Select
          id="pubsheet-status-filter"
          value={statusFilter}
          onChange={(nextValue: string) => {
            setStatusFilter(nextValue as StatusFilter);
            setCurrentPage(1);
          }}
          options={[
            { value: 'all', label: TEXT.status },
            { value: '\uC9C4\uD589', label: '\uC9C4\uD589' },
            { value: '\uAC80\uC218', label: '\uAC80\uC218' },
            { value: '\uC644\uB8CC', label: '\uC644\uB8CC' },
          ]}
          variant="text"
          className="pubsheet-status-select"
        />
      ),
      align: 'center',
      width: '8%',
    },
    { key: 'note', header: TEXT.note },
  ];

  const sortedRows = useMemo(() => {
    return [...filteredRows].sort((left, right) => {
      const leftValue = getDateValue(left[sortKey]);
      const rightValue = getDateValue(right[sortKey]);
      return sortDirection === 'desc' ? rightValue - leftValue : leftValue - rightValue;
    });
  }, [filteredRows, sortDirection, sortKey]);

  const totalPages = Math.max(1, Math.ceil(sortedRows.length / ITEMS_PER_PAGE));

  useEffect(() => {
    setCurrentPage(previousPage => Math.min(previousPage, totalPages));
  }, [totalPages]);

  const pagedRows = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedRows.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentPage, sortedRows]);

  const tableData: TableRow[] = pagedRows.map(row => ({
    id: row.id,
    depth2: row.depth2,
    depth3: row.depth3,
    depth4: row.depth4,
    screenName: row.screenName,
    category: row.category,
    url: (
      <div className="pubsheet-url-cell">
        <a href={row.url} onClick={event => event.preventDefault()}>
          {row.url}
        </a>
        <div className="pubsheet-copy-button">
          <button
            type="button"
            className="pubsheet-copy-icon-button"
            onClick={() => void handleCopy(row.url)}
            aria-label="URL 복사"
          >
            <Copy size={12} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>
    ),
    completedAt: row.completedAt,
    updatedAt: row.updatedAt,
    owner: row.owner,
    status: (
      <Badge
        label={row.status}
        tone={getStatusTone(row.status)}
        variant={row.status === TEXT.complete ? 'solid' : 'soft'}
        size="small"
      />
    ),
    note: row.note ? (
      <div className="pubsheet-note-cell">
        <TooltipDemo
          id={`pubsheet-note-${row.id}`}
          content={row.note}
          place="top"
          wrapperClassName="pubsheet-note-tooltip"
          triggerClassName="pubsheet-note-trigger"
        >
          <button type="button" className="pubsheet-note-icon-button" aria-label={TEXT.noteButton}>
            <CircleAlert size={14} strokeWidth={2} aria-hidden="true" />
          </button>
        </TooltipDemo>
      </div>
    ) : (
      ''
    ),
  }));

  return (
    <div className="wylie-container">
      <header className="hero-section">
        <div className="hero-top">
          <div className="hero-brand">
            <h1>React Pub Storybook</h1>
            <ModeToggle />
          </div>
        </div>
        <nav className="hero-nav" aria-label="Main navigation">
          <div className="hero-nav-inner">
            <Link href="/">Home</Link>
            <Link href="/components">Component</Link>
            <Link href="/screen-cases">Screen Cases</Link>
            <Link href="/pubsheet" className="is-active">
              Pub Sheet
            </Link>
            <StorybookNavLinkBottom href={storybookUrl} tooltipId="global-storybook-nav-pubsheet" />
          </div>
        </nav>
      </header>

      <main className="content-wrapper pubsheet-page">
        <section className="screen-cases-hero">
          <div>
            <p className="screen-cases-kicker">Publishing Dashboard</p>
            <h2>{TEXT.dashboardTitle}</h2>
            <p className="screen-cases-lead">{TEXT.dashboardLead}</p>
          </div>
        </section>

        <div className="pubsheet-board-head">
          <div>
            <p className="pubsheet-board-path">Home / Publisher / Pub Sheet</p>
            <h3 id="pubsheet-table-title">{TEXT.dashboardHeading}</h3>
          </div>
          <div className="pubsheet-board-search">
            <label className="pubsheet-search" htmlFor="pubsheet-search">
              <Search size={16} aria-hidden="true" />
              <input
                id="pubsheet-search"
                type="search"
                placeholder={TEXT.searchPlaceholder}
                value={query}
                onChange={event => {
                  setQuery(event.target.value);
                  setCurrentPage(1);
                }}
              />
            </label>
          </div>
          <div className="pubsheet-board-summary">
            <span>
              {TEXT.totalCount} {rows.length}
              {TEXT.itemCount}
            </span>
            <span>
              {TEXT.resultCount} {filteredRows.length}
              {TEXT.itemCount}
            </span>
          </div>
        </div>

        <section aria-labelledby="pubsheet-table-title">
          <Table
            columns={columns}
            data={tableData}
            caption={TEXT.caption}
            hoverable
            className="pubsheet-table"
            emptyMessage={TEXT.empty}
          />
          <div className="pubsheet-pagination">
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={setCurrentPage}
              showFirstButton
              showLastButton
              ariaLabel="Pubsheet pagination"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
