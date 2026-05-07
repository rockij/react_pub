import React from 'react';
import { Chart } from '../../components/Chart/Chart';
import { Table, type TableColumn, type TableRow } from '../../components/Table/Table';
import { Tabs, type TabItem } from '../../components/Tabs/Tabs';
import '../../assets/css/screen/portfolio-return-screen.css';

type ReturnPoint = {
  label: string;
  trust: number;
  benchmark: number;
};

const returnSeries = [
  { key: 'trust', label: '신탁', color: '#09a08f' },
  { key: 'benchmark', label: '벤치마킹', color: '#8c97ff' },
] as const;

const returnDataByPeriod: Record<string, ReturnPoint[]> = {
  '1m': [
    { label: '1주', trust: 1.8, benchmark: 0.4 },
    { label: '2주', trust: 4.5, benchmark: 3.1 },
    { label: '3주', trust: 6.2, benchmark: 4.8 },
    { label: '4주', trust: 8.8, benchmark: 6.0 },
    { label: '5주', trust: 6.9, benchmark: 7.1 },
    { label: '6주', trust: 10.3, benchmark: 9.0 },
    { label: '7주', trust: 12.2, benchmark: 11.4 },
    { label: '8주', trust: 11.1, benchmark: 10.2 },
  ],
  '3m': [
    { label: '1월', trust: 2.1, benchmark: 0.9 },
    { label: '2월', trust: 5.1, benchmark: 3.2 },
    { label: '3월', trust: 4.8, benchmark: 3.7 },
    { label: '4월', trust: 6.7, benchmark: 5.3 },
    { label: '5월', trust: 8.1, benchmark: 5.4 },
    { label: '6월', trust: 8.7, benchmark: 6.2 },
    { label: '7월', trust: 6.9, benchmark: 7.4 },
    { label: '8월', trust: 8.4, benchmark: 6.7 },
    { label: '9월', trust: 10.2, benchmark: 9.1 },
    { label: '10월', trust: 12.1, benchmark: 11.2 },
    { label: '11월', trust: 12.7, benchmark: 10.0 },
    { label: '12월', trust: 11.6, benchmark: 9.8 },
  ],
  '6m': [
    { label: '1월', trust: 1.3, benchmark: 0.2 },
    { label: '2월', trust: 3.8, benchmark: 2.9 },
    { label: '3월', trust: 4.9, benchmark: 3.6 },
    { label: '4월', trust: 4.7, benchmark: 3.3 },
    { label: '5월', trust: 6.4, benchmark: 4.8 },
    { label: '6월', trust: 6.6, benchmark: 5.1 },
    { label: '7월', trust: 8.3, benchmark: 4.9 },
    { label: '8월', trust: 8.1, benchmark: 6.1 },
    { label: '9월', trust: 8.8, benchmark: 6.4 },
    { label: '10월', trust: 6.4, benchmark: 7.2 },
    { label: '11월', trust: 6.8, benchmark: 4.5 },
    { label: '12월', trust: 3.2, benchmark: 8.9 },
    { label: '13월', trust: 7.1, benchmark: 6.6 },
    { label: '14월', trust: 6.7, benchmark: 7.0 },
    { label: '15월', trust: 8.5, benchmark: 6.9 },
    { label: '16월', trust: 8.2, benchmark: 7.5 },
    { label: '17월', trust: 10.1, benchmark: 8.9 },
    { label: '18월', trust: 10.0, benchmark: 8.8 },
    { label: '19월', trust: 12.0, benchmark: 11.0 },
    { label: '20월', trust: 12.9, benchmark: 11.5 },
    { label: '21월', trust: 12.7, benchmark: 11.1 },
    { label: '22월', trust: 11.4, benchmark: 10.7 },
    { label: '23월', trust: 11.1, benchmark: 9.8 },
    { label: '24월', trust: 12.2, benchmark: 10.4 },
  ],
  '1y': [
    { label: '1월', trust: 1.1, benchmark: 0.2 },
    { label: '2월', trust: 3.5, benchmark: 2.2 },
    { label: '3월', trust: 4.7, benchmark: 3.0 },
    { label: '4월', trust: 4.5, benchmark: 3.4 },
    { label: '5월', trust: 6.3, benchmark: 4.8 },
    { label: '6월', trust: 6.5, benchmark: 5.0 },
    { label: '7월', trust: 8.0, benchmark: 5.1 },
    { label: '8월', trust: 8.2, benchmark: 6.0 },
    { label: '9월', trust: 8.8, benchmark: 6.3 },
    { label: '10월', trust: 6.8, benchmark: 7.2 },
    { label: '11월', trust: 7.0, benchmark: 4.9 },
    { label: '12월', trust: 3.0, benchmark: 8.9 },
    { label: '13월', trust: 7.2, benchmark: 6.7 },
    { label: '14월', trust: 6.9, benchmark: 7.1 },
    { label: '15월', trust: 8.4, benchmark: 6.8 },
    { label: '16월', trust: 8.1, benchmark: 7.4 },
    { label: '17월', trust: 10.0, benchmark: 8.8 },
    { label: '18월', trust: 9.9, benchmark: 8.7 },
    { label: '19월', trust: 10.0, benchmark: 8.8 },
    { label: '20월', trust: 12.0, benchmark: 11.0 },
    { label: '21월', trust: 12.8, benchmark: 11.5 },
    { label: '22월', trust: 12.6, benchmark: 11.1 },
    { label: '23월', trust: 11.3, benchmark: 10.7 },
    { label: '24월', trust: 11.0, benchmark: 9.8 },
    { label: '25월', trust: 12.2, benchmark: 10.5 },
    { label: '26월', trust: 11.7, benchmark: 10.0 },
  ],
};

const portfolioRows: TableRow[] = [
  { id: 1, rank: 1, stock: 'Agnico Eagle Mines Ltd', ratio: 'n.nn' },
  { id: 2, rank: 2, stock: 'Kinross Gold Corp', ratio: 'n.nn' },
  { id: 3, rank: 3, stock: 'Newmont Corp', ratio: 'n.nn' },
  { id: 4, rank: 4, stock: 'Barrick Gold Corp', ratio: 'n.nn' },
  { id: 5, rank: 5, stock: 'Endeavour Mining PLC', ratio: 'n.nn' },
];

const portfolioColumns: TableColumn[] = [
  { key: 'rank', header: 'NO', align: 'center', width: '19%' },
  { key: 'stock', header: '종목명', align: 'center' },
  { key: 'ratio', header: '비중 (%)', align: 'center', width: '21%' },
];

export function PortfolioReturnScreenCase() {
  const tabItems: TabItem[] = [
    {
      id: '1m',
      label: '1개월',
      content: (
        <Chart
          data={returnDataByPeriod['1m']}
          series={returnSeries.map(series => ({ ...series }))}
          xKey="label"
          variant="line"
          showLegend={false}
          showGrid
          height={200}
          className="portfolio-return-screen__chart"
        />
      ),
    },
    {
      id: '3m',
      label: '3개월',
      content: (
        <Chart
          data={returnDataByPeriod['3m']}
          series={returnSeries.map(series => ({ ...series }))}
          xKey="label"
          variant="line"
          showLegend={false}
          showGrid
          height={200}
          className="portfolio-return-screen__chart"
        />
      ),
    },
    {
      id: '6m',
      label: '6개월',
      content: (
        <Chart
          data={returnDataByPeriod['6m']}
          series={returnSeries.map(series => ({ ...series }))}
          xKey="label"
          variant="line"
          showLegend={false}
          showGrid
          height={200}
          className="portfolio-return-screen__chart"
        />
      ),
    },
    {
      id: '1y',
      label: '1년',
      content: (
        <Chart
          data={returnDataByPeriod['1y']}
          series={returnSeries.map(series => ({ ...series }))}
          xKey="label"
          variant="line"
          showLegend={false}
          showGrid
          height={200}
          className="portfolio-return-screen__chart"
        />
      ),
    },
  ];

  return (
    <section className="portfolio-return-screen" aria-label="기간수익률 및 포트폴리오 구성">
      <div className="portfolio-return-screen__device">
        <section className="portfolio-return-screen__section">
          <h2>기간수익률 추이</h2>
          <Tabs
            items={tabItems}
            defaultActiveId="1y"
            ariaLabel="기간 수익률 탭"
            variant="pill"
            fullWidth
            className="portfolio-return-screen__tabs"
          />

          <ul className="portfolio-return-screen__legend" aria-label="수익률 비교 범례">
            <li>
              <i style={{ backgroundColor: '#09a08f' }} aria-hidden="true" />
              <span>신탁</span>
            </li>
            <li>
              <i style={{ backgroundColor: '#8c97ff' }} aria-hidden="true" />
              <span>벤치마킹</span>
            </li>
          </ul>
        </section>

        <section className="portfolio-return-screen__section">
          <h3>포트폴리오 구성</h3>
          <Table
            columns={portfolioColumns}
            data={portfolioRows}
            compact
            className="portfolio-return-screen__table"
          />
        </section>
      </div>
    </section>
  );
}
