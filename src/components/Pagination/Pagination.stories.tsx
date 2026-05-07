import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ padding: '12px 0' }}>{children}</div>
);

export const Default: Story = {
  args: {
    count: 12,
    defaultPage: 6,
  },
  render: args => (
    <Wrapper>
      <Pagination {...args} />
    </Wrapper>
  ),
};

export const WithEdges: Story = {
  args: {
    count: 24,
    defaultPage: 9,
    siblingCount: 1,
    boundaryCount: 2,
    showFirstButton: true,
    showLastButton: true,
    size: 'large',
  },
  render: args => (
    <Wrapper>
      <Pagination {...args} />
    </Wrapper>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [page, setPage] = React.useState(3);

    return (
      <div style={{ display: 'grid', gap: 16, justifyItems: 'center' }}>
        <Pagination
          count={18}
          page={page}
          onChange={setPage}
          showFirstButton
          showLastButton
        />
        <div style={{ fontSize: 15, color: '#4f6679' }}>Current page: {page}</div>
      </div>
    );
  },
};
