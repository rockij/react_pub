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
