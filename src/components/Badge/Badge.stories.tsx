import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: { type: 'select' },
      options: ['neutral', 'brand', 'success', 'warning', 'danger'],
    },
    variant: {
      control: { type: 'select' },
      options: ['solid', 'soft', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium'],
    },
    leadingDot: {
      control: { type: 'boolean' },
    },
    removable: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Default',
    tone: 'brand',
    variant: 'soft',
    size: 'medium',
  },
};

export const StatusSet: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Badge label="기본" tone="neutral" />
      <Badge label="진행중" tone="brand" />
      <Badge label="완료" tone="success" />
      <Badge label="검토 필요" tone="warning" />
      <Badge label="오류" tone="danger" />
    </div>
  ),
};

export const OutlineWithDot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Badge label="온라인" tone="success" variant="outline" leadingDot />
      <Badge label="배포 대기" tone="warning" variant="outline" leadingDot />
      <Badge label="긴급 점검" tone="danger" variant="outline" leadingDot />
    </div>
  ),
};

export const Removable: Story = {
  render: () => {
    const [items, setItems] = React.useState(['React', 'Storybook', 'Publishing']);

    return (
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {items.map(item => (
          <Badge
            key={item}
            label={item}
            tone="brand"
            variant="soft"
            removable
            onRemove={() => setItems(prev => prev.filter(value => value !== item))}
          />
        ))}
      </div>
    );
  },
};
