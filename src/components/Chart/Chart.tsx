'use client';

import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import '../../assets/css/component/chart.css';

export type ChartVariant = 'line' | 'bar' | 'composed' | 'donut';

export type ChartDatum = Record<string, string | number>;

export interface ChartSeries {
  key: string;
  label: string;
  color: string;
  type?: 'line' | 'bar';
  stackId?: string;
  strokeWidth?: number;
}

export interface ChartProps {
  data: ChartDatum[];
  series: ChartSeries[];
  xKey?: string;
  title?: string;
  description?: string;
  variant?: ChartVariant;
  height?: number;
  className?: string;
  showGrid?: boolean;
  showLegend?: boolean;
  emptyMessage?: string;
  valueFormatter?: (value: number | string) => string;
}

const defaultValueFormatter = (value: number | string) => `${value}`;

type TooltipPayloadItem = {
  color?: string;
  dataKey?: string;
  name?: string;
  value?: number | string;
};

function ChartTooltip({
  active,
  label,
  payload,
  formatter,
}: {
  active?: boolean;
  label?: string | number;
  payload?: TooltipPayloadItem[];
  formatter: (value: number | string) => string;
}) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="chart-tooltip">
      {label !== undefined && <strong className="chart-tooltip__label">{label}</strong>}
      <ul className="chart-tooltip__list">
        {payload.map(item => (
          <li key={`${item.dataKey}-${item.name}`} className="chart-tooltip__item">
            <span className="chart-tooltip__key">
              <i className="chart-tooltip__dot" style={{ backgroundColor: item.color }} aria-hidden="true" />
              {item.name}
            </span>
            <span className="chart-tooltip__value">{formatter(item.value ?? '')}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function renderCartesianSeries(series: ChartSeries[], variant: ChartVariant) {
  return series.map(item => {
    const seriesType = variant === 'bar' ? 'bar' : variant === 'line' ? 'line' : item.type ?? 'line';

    if (seriesType === 'bar') {
      return (
        <Bar
          key={item.key}
          dataKey={item.key}
          name={item.label}
          fill={item.color}
          radius={[10, 10, 4, 4]}
          stackId={item.stackId}
          maxBarSize={40}
        />
      );
    }

    return (
      <Line
        key={item.key}
        type="monotone"
        dataKey={item.key}
        name={item.label}
        stroke={item.color}
        strokeWidth={item.strokeWidth ?? 3}
        dot={{ r: 4, strokeWidth: 2, fill: '#ffffff' }}
        activeDot={{ r: 6 }}
      />
    );
  });
}

export function Chart({
  data,
  series,
  xKey = 'label',
  title,
  description,
  variant = 'line',
  height = 320,
  className,
  showGrid = true,
  showLegend = true,
  emptyMessage = '표시할 데이터가 없습니다.',
  valueFormatter = defaultValueFormatter,
}: ChartProps) {
  const rootClassName = ['chart-card', `chart-card--${variant}`, className].filter(Boolean).join(' ');

  if (data.length === 0 || series.length === 0) {
    return (
      <section className={rootClassName}>
        {(title || description) && (
          <header className="chart-card__header">
            {title && <h3 className="chart-card__title">{title}</h3>}
            {description && <p className="chart-card__description">{description}</p>}
          </header>
        )}
        <div className="chart-card__empty">{emptyMessage}</div>
      </section>
    );
  }

  const primarySeries = series[0];

  return (
    <section className={rootClassName}>
      {(title || description) && (
        <header className="chart-card__header">
          {title && <h3 className="chart-card__title">{title}</h3>}
          {description && <p className="chart-card__description">{description}</p>}
        </header>
      )}

      <div className="chart-card__body" style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          {variant === 'donut' ? (
            <PieChart>
              <Tooltip content={<ChartTooltip formatter={valueFormatter} />} />
              {showLegend && <Legend verticalAlign="bottom" height={28} iconType="circle" />}
              <Pie
                data={data}
                dataKey={primarySeries.key}
                nameKey={xKey}
                innerRadius="58%"
                outerRadius="82%"
                paddingAngle={3}
                cornerRadius={10}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`${entry[xKey]}-${index}`}
                    fill={series[index]?.color ?? primarySeries.color}
                  />
                ))}
              </Pie>
            </PieChart>
          ) : variant === 'bar' ? (
            <BarChart data={data} barGap={12}>
              {showGrid && <CartesianGrid vertical={false} strokeDasharray="4 4" stroke="rgba(156, 177, 198, 0.45)" />}
              <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip content={<ChartTooltip formatter={valueFormatter} />} />
              {showLegend && <Legend verticalAlign="top" height={36} iconType="circle" />}
              {renderCartesianSeries(series, variant)}
            </BarChart>
          ) : variant === 'composed' ? (
            <ComposedChart data={data}>
              {showGrid && <CartesianGrid vertical={false} strokeDasharray="4 4" stroke="rgba(156, 177, 198, 0.45)" />}
              <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip content={<ChartTooltip formatter={valueFormatter} />} />
              {showLegend && <Legend verticalAlign="top" height={36} iconType="circle" />}
              {renderCartesianSeries(series, variant)}
            </ComposedChart>
          ) : (
            <ComposedChart data={data}>
              {showGrid && <CartesianGrid vertical={false} strokeDasharray="4 4" stroke="rgba(156, 177, 198, 0.45)" />}
              <XAxis dataKey={xKey} tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip content={<ChartTooltip formatter={valueFormatter} />} />
              {showLegend && <Legend verticalAlign="top" height={36} iconType="circle" />}
              {renderCartesianSeries(series, variant)}
            </ComposedChart>
          )}
        </ResponsiveContainer>
      </div>
    </section>
  );
}
