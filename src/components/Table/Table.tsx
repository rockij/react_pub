import React from 'react';
import '../../assets/css/component/table.css';

export type TableAlign = 'left' | 'center' | 'right';

export type TableRow = Record<string, React.ReactNode> & {
  id?: string | number;
};

export interface TableColumn {
  key: string;
  header: React.ReactNode;
  align?: TableAlign;
  width?: string;
  render?: (value: React.ReactNode, row: TableRow, rowIndex: number) => React.ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  data: TableRow[];
  caption?: string;
  emptyMessage?: string;
  striped?: boolean;
  compact?: boolean;
  hoverable?: boolean;
  className?: string;
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  caption,
  emptyMessage = '표시할 데이터가 없습니다.',
  striped = false,
  compact = false,
  hoverable = false,
  className,
}) => {
  const tableClassName = [
    'table',
    striped ? 'table--striped' : '',
    compact ? 'table--compact' : '',
    hoverable ? 'table--hoverable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="table-wrap">
      <table className={tableClassName}>
        {caption && <caption className="table__caption">{caption}</caption>}

        {columns.some(column => column.width) && (
          <colgroup>
            {columns.map(column => (
              <col key={column.key} style={column.width ? { width: column.width } : undefined} />
            ))}
          </colgroup>
        )}

        <thead>
          <tr>
            {columns.map(column => (
              <th
                key={column.key}
                scope="col"
                className={column.align ? `table__cell--${column.align}` : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="table__empty">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={row.id ?? `${rowIndex}`}>
                {columns.map(column => {
                  const value = row[column.key];

                  return (
                    <td
                      key={column.key}
                      className={column.align ? `table__cell--${column.align}` : undefined}
                    >
                      {column.render ? column.render(value, row, rowIndex) : value}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
