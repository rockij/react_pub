import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table } from './Table';

const columns = [
  { key: 'name', header: 'Name' },
  { key: 'role', header: 'Role' },
  { key: 'status', header: 'Status', align: 'center' as const, width: '140px' },
  { key: 'score', header: 'Score', align: 'right' as const, width: '120px' },
];

const rows = [
  { id: 'row-1', name: 'Avery Kim', role: 'Product Designer', status: 'Active', score: '92' },
  { id: 'row-2', name: 'Mina Lee', role: 'Frontend Engineer', status: 'Review', score: '88' },
  { id: 'row-3', name: 'Joon Park', role: 'QA Analyst', status: 'Blocked', score: '74' },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    caption: 'Team status table',
    columns,
    data: rows,
    hoverable: true,
  },
};

export const StripedCompact: Story = {
  args: {
    caption: 'Compact billing summary',
    columns: [
      { key: 'invoice', header: 'Invoice' },
      { key: 'date', header: 'Date', width: '160px' },
      { key: 'amount', header: 'Amount', align: 'right', width: '140px' },
    ],
    data: [
      { id: 'invoice-1', invoice: 'INV-2401', date: 'Apr 02, 2026', amount: '$1,200.00' },
      { id: 'invoice-2', invoice: 'INV-2402', date: 'Apr 05, 2026', amount: '$860.00' },
      { id: 'invoice-3', invoice: 'INV-2403', date: 'Apr 07, 2026', amount: '$540.00' },
    ],
    striped: true,
    compact: true,
  },
};

export const EmptyState: Story = {
  args: {
    caption: 'Empty data example',
    columns,
    data: [],
    emptyMessage: '등록된 팀 멤버가 없습니다.',
  },
};
