'use client';

import React, { useState } from 'react';

type Row = {
  id: string;
  depth2: string;
  depth3: string;
  depth4: string;
  screen: string;
  kubun: string;
  url: string;
  completeDate: string;
  modifyDate: string;
  person: string;
  done: boolean;
};

const SAMPLE_ROWS: Row[] = [
  {
    id: 'ID1234567',
    depth2: '회원가입',
    depth3: 'depth3',
    depth4: 'depth4',
    screen: '약관동의',
    kubun: 'page',
    url: 'ID1234567',
    completeDate: '10-01-24',
    modifyDate: '23-05-25',
    person: '김의종',
    done: true,
  },
  {
    id: 'ID1234564',
    depth2: '가입완료',
    depth3: 'depth3',
    depth4: 'depth4',
    screen: '가입완료',
    kubun: 'page',
    url: 'ID1234564',
    completeDate: '23-05-25',
    modifyDate: '23-05-26',
    person: '김의종',
    done: true,
  },
];

export default function Pubsheet() {
  const [rows] = useState<Row[]>(SAMPLE_ROWS);
  const [query, setQuery] = useState('');

  const handleCopy = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        alert('복사되었습니다.');
      } else {
        const ta = document.createElement('textarea');
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        alert('복사되었습니다.');
      }
    } catch (e) {
      alert('복사 실패');
    }
  };

  const filtered = rows.filter(r => {
    if (!query) return true;
    const q = query.trim().toLowerCase();
    return (
      r.depth2.toLowerCase().includes(q) ||
      r.screen.toLowerCase().includes(q) ||
      r.id.toLowerCase().includes(q)
    );
  });

  return (
    <section className="members-card">
      <div className="members-header">
        <div>
          <h2 className="members-title">Members</h2>
          <div className="muted">Home / Project / Members</div>
        </div>

        <div className="members-controls">
          <input
            className="members-search"
            placeholder="ID입력 GO(enter) 선택 스크롤 이동"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                // simple enter behaviour: nothing special for now
              }
            }}
          />
          <button className="btn-go" onClick={() => {}}>
            GO
          </button>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table className="members-table" role="table">
          <thead>
            <tr>
              <th className="col-depth">DEPTH2</th>
              <th className="col-depth">DEPTH3</th>
              <th className="col-depth">DEPTH4</th>
              <th className="col-screen">화면명</th>
              <th className="col-kubun">구분</th>
              <th className="col-url">URL</th>
              <th className="col-date">
                완료일{' '}
                <span className="sort-arrows">
                  <span className="up">▴</span>
                  <span className="down">▾</span>
                </span>
              </th>
              <th className="col-date">
                수정일{' '}
                <span className="sort-arrows">
                  <span className="up">▴</span>
                  <span className="down">▾</span>
                </span>
              </th>
              <th className="col-person">담당자</th>
              <th className="col-done">완료</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(r => (
              <tr key={r.id} className="row-hover">
                <td>{r.depth2}</td>
                <td>{r.depth3}</td>
                <td>{r.depth4}</td>
                <td>{r.screen}</td>
                <td className="muted">{r.kubun}</td>
                <td className="url-cell">
                  <a href="#" onClick={e => e.preventDefault()}>
                    {r.url}
                  </a>
                  <button className="copy-btn" onClick={() => handleCopy(r.url)}>
                    copy
                  </button>
                </td>
                <td className="center">{r.completeDate}</td>
                <td className="center">{r.modifyDate}</td>
                <td>{r.person}</td>
                <td className="center">
                  {r.done ? (
                    <span className="badge">완료</span>
                  ) : (
                    <span className="muted">진행</span>
                  )}
                </td>
                <td />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
