import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ width: 780, maxWidth: '100%' }}>{children}</div>
);

const panelTextStyle = {
  margin: 0,
  fontSize: 15,
  lineHeight: 1.7,
  color: '#506273',
} satisfies React.CSSProperties;

const panelCardStyle = {
  padding: 16,
  borderRadius: 16,
  border: '1px solid #e3e9f0',
  background: '#f5f8fb',
} satisfies React.CSSProperties;

const overviewItems = [
  {
    id: 'overview',
    label: 'Overview',
    content: (
      <>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75, color: '#506273' }}>
          Tabs help split related information into smaller views while keeping the layout stable.
        </p>
        <p style={{ margin: '12px 0 0', fontSize: 16, lineHeight: 1.75, color: '#506273' }}>
          Use them when users need to compare categories without leaving the current context.
        </p>
      </>
    ),
  },
  {
    id: 'specs',
    label: 'Specs',
    content: (
      <div style={{ display: 'grid', gap: 12 }}>
        <div style={{ padding: 16, borderRadius: 14, background: '#f5f8fb' }}>
          <strong style={{ display: 'block', marginBottom: 6 }}>Container</strong>
          <span style={{ fontSize: 15, color: '#5c6c7a' }}>Width adapts to content area</span>
        </div>
        <div style={{ padding: 16, borderRadius: 14, background: '#f5f8fb' }}>
          <strong style={{ display: 'block', marginBottom: 6 }}>Interaction</strong>
          <span style={{ fontSize: 15, color: '#5c6c7a' }}>Click and arrow-key navigation</span>
        </div>
      </div>
    ),
  },
  {
    id: 'activity',
    label: 'Recent activity',
    content: (
      <ul style={{ margin: 0, paddingLeft: 20, fontSize: 16, lineHeight: 1.8, color: '#506273' }}>
        <li>Design tokens updated for container spacing</li>
        <li>Keyboard interaction verified for horizontal layout</li>
        <li>Disabled tabs remain visible but unavailable</li>
      </ul>
    ),
  },
];

const imageDesignItems = [
  {
    id: 'etf',
    label: 'ETF',
    content: (
      <p style={panelTextStyle}>
        Use this layout when ETF categories need to stay visible as a compact top filter.
      </p>
    ),
  },
  {
    id: 'fund',
    label: '펀드',
    content: (
      <div style={panelCardStyle}>
        <strong style={{ display: 'block', marginBottom: 6 }}>Recommended fund group</strong>
        <span style={{ fontSize: 15, lineHeight: 1.7, color: '#5c6c7a' }}>
          Theme, bond, and global allocation products can stay under one chip-based entry point.
        </span>
      </div>
    ),
  },
  {
    id: 'deposit',
    label: '예금',
    content: (
      <p style={panelTextStyle}>
        Fixed-rate products work well with this pattern when the tab row sits above summary cards.
      </p>
    ),
  },
  {
    id: 'cash',
    label: '현금성',
    content: (
      <p style={panelTextStyle}>
        Cash-like assets such as CMA or MMF can be separated without making the header feel too heavy.
      </p>
    ),
  },
  {
    id: 'holding',
    label: '보유',
    content: (
      <div
        style={{
          display: 'grid',
          gap: 12,
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        }}
      >
        <div style={panelCardStyle}>
          <strong style={{ display: 'block', marginBottom: 6 }}>Total holdings</strong>
          <span style={{ fontSize: 20, fontWeight: 700, color: '#2f3f56' }}>128,420,000원</span>
        </div>
        <div style={panelCardStyle}>
          <strong style={{ display: 'block', marginBottom: 6 }}>Today</strong>
          <span style={{ fontSize: 20, fontWeight: 700, color: '#2f3f56' }}>+2.14%</span>
        </div>
      </div>
    ),
  },
  {
    id: 'interest',
    label: '관심',
    content: (
      <p style={panelTextStyle}>
        Favorites or watchlisted products can reuse the same visual treatment without extra component work.
      </p>
    ),
  },
] satisfies React.ComponentProps<typeof Tabs>['items'];

export const Underline: Story = {
  name: 'underline',
  args: {
    defaultActiveId: 'overview',
    items: overviewItems,
  },
  render: args => (
    <Wrapper>
      <Tabs {...args} />
    </Wrapper>
  ),
};

export const Pill: Story = {
  name: 'pill',
  args: {
    variant: 'pill',
    fullWidth: true,
    defaultActiveId: 'month',
    items: [
      {
        id: 'day',
        label: 'Today',
        content: <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75 }}>1,284 active sessions</p>,
      },
      {
        id: 'week',
        label: 'This week',
        content: (
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75 }}>8,945 active sessions this week</p>
        ),
      },
      {
        id: 'month',
        label: 'This month',
        content: (
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75 }}>
            37,240 active sessions this month with steady retention.
          </p>
        ),
      },
    ],
  },
  render: args => (
    <Wrapper>
      <Tabs {...args} />
    </Wrapper>
  ),
};

export const ImageDesign: Story = {
  name: 'image-design',
  args: {
    variant: 'pill',
    className: 'tabs--category-pill',
    defaultActiveId: 'holding',
    ariaLabel: '투자 카테고리 탭',
    items: imageDesignItems,
  },
  render: args => (
    <Wrapper>
      <Tabs {...args} />
    </Wrapper>
  ),
};

export const Vertical: Story = {
  name: 'vertical',
  args: {
    orientation: 'vertical',
    defaultActiveId: 'billing',
    items: [
      {
        id: 'profile',
        label: 'Profile settings',
        content: (
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75 }}>
            Manage personal information, notification defaults, and account preferences.
          </p>
        ),
      },
      {
        id: 'billing',
        label: 'Billing',
        content: (
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75 }}>
            Review current plan usage, payment methods, and invoice history.
          </p>
        ),
      },
      {
        id: 'security',
        label: 'Security',
        content: (
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.75 }}>
            Control 2FA, session devices, and team access approval rules.
          </p>
        ),
      },
      {
        id: 'audit',
        label: 'Audit log',
        disabled: true,
        content: <p style={{ margin: 0 }}>Disabled tab content</p>,
      },
    ],
  },
  render: args => (
    <Wrapper>
      <Tabs {...args} />
    </Wrapper>
  ),
};
