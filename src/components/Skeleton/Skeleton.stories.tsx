import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

/** 단일 Skeleton: 라인 */
export const Line: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, maxWidth: 520 }}>
      <Skeleton variant="line" width="90%" height={14} />
      <Skeleton variant="line" width="70%" height={14} />
      <Skeleton variant="line" width="60%" height={14} />
    </div>
  ),
};

/** 단일 Skeleton: 원형(아바타) */
export const Circle: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Skeleton variant="circle" width={56} height={56} />
      <div style={{ display: 'grid', gap: 10, width: 420 }}>
        <Skeleton variant="line" width="55%" height={14} />
        <Skeleton variant="line" width="85%" height={14} />
      </div>
    </div>
  ),
};

/** 단일 Skeleton: 사각 블록(카드/이미지 영역) */
export const Rect: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12, maxWidth: 720 }}>
      <Skeleton variant="rect" width="100%" height={160} />
      <Skeleton variant="rect" width="100%" height={96} />
    </div>
  ),
};

/** Playground: controls (Args table) 확인용 */
export const Playground: Story = {
  args: {
    variant: 'rect',
    width: 200,
    height: 100,
    label: 'Loading',
  },
  render: args => <Skeleton {...args} />,
};
