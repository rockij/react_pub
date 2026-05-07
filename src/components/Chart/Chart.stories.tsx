import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Chart } from './Chart';

const meta: Meta<typeof Chart> = {
  title: 'Components/Chart',
  component: Chart,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Chart>;

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ width: '100%', maxWidth: 860 }}>{children}</div>
);

const monthlyTraffic = [
  { label: 'Jan', users: 8400, conversion: 2.4 },
  { label: 'Feb', users: 9100, conversion: 2.7 },
  { label: 'Mar', users: 10400, conversion: 3.1 },
  { label: 'Apr', users: 9800, conversion: 2.9 },
  { label: 'May', users: 12100, conversion: 3.5 },
  { label: 'Jun', users: 13400, conversion: 3.8 },
];

const campaignPerformance = [
  { label: 'Search', spend: 1200, revenue: 4200 },
  { label: 'Display', spend: 860, revenue: 2780 },
  { label: 'CRM', spend: 520, revenue: 2310 },
  { label: 'Social', spend: 970, revenue: 3560 },
];

const trafficChannels = [
  { label: 'Organic', share: 38 },
  { label: 'Paid', share: 27 },
  { label: 'Referral', share: 18 },
  { label: 'Direct', share: 17 },
];

export const Line: Story = {
  args: {
    variant: 'line',
    title: 'Monthly traffic trend',
    description: '월별 방문자 추이를 라인 차트로 보여주는 기본형 예제입니다.',
    data: monthlyTraffic,
    xKey: 'label',
    series: [{ key: 'users', label: 'Users', color: '#1f78b4' }],
    valueFormatter: value => `${Number(value).toLocaleString()} users`,
  },
  render: args => (
    <Wrapper>
      <Chart {...args} />
    </Wrapper>
  ),
};

export const Bar: Story = {
  args: {
    variant: 'bar',
    title: 'Campaign performance',
    description: '채널별 spend와 revenue를 비교하는 바 차트 예제입니다.',
    data: campaignPerformance,
    xKey: 'label',
    series: [
      { key: 'spend', label: 'Spend', color: '#7ca6c8' },
      { key: 'revenue', label: 'Revenue', color: '#0c5a86' },
    ],
    valueFormatter: value => `$${Number(value).toLocaleString()}`,
  },
  render: args => (
    <Wrapper>
      <Chart {...args} />
    </Wrapper>
  ),
};

export const Donut: Story = {
  args: {
    variant: 'donut',
    title: 'Traffic share',
    description: '유입 채널 비중을 도넛 차트로 표현한 요약형 예제입니다.',
    data: trafficChannels,
    xKey: 'label',
    series: [
      { key: 'share', label: 'Organic', color: '#0c5a86' },
      { key: 'share', label: 'Paid', color: '#5b8fb8' },
      { key: 'share', label: 'Referral', color: '#99bdd8' },
      { key: 'share', label: 'Direct', color: '#d6e6f2' },
    ],
    valueFormatter: value => `${value}%`,
    height: 340,
  },
  render: args => (
    <Wrapper>
      <Chart {...args} />
    </Wrapper>
  ),
};
