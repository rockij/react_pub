import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Accordion>;

const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ width: 760, maxWidth: '100%' }}>{children}</div>
);

export const SingleOpen: Story = {
  name: 'single',
  args: {
    mode: 'single',
    defaultOpenId: 'panel3',
    items: [
      {
        id: 'panel1',
        title: 'Accordion 1',
        content: <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, amet!</p>,
      },
      {
        id: 'panel2',
        title: 'Accordion 2',
        content: (
          <>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <p>Doloremque adipisci ea error ad architecto tempore ullam dolores voluptatibus.</p>
            <p>Provident, tempore sit. Eaque nam eius assumenda iste rem.</p>
          </>
        ),
      },
      {
        id: 'panel3',
        title: 'Accordion Actions',
        content: (
          <>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus
              ex, sit amet blandit leo lobortis eget.
            </p>
            <div
              style={{ display: 'flex', justifyContent: 'flex-end', gap: 16, padding: '16px 0 0' }}
            >
              <button type="button">CANCEL</button>
              <button type="button">AGREE</button>
            </div>
          </>
        ),
      },
    ],
  },
  render: args => (
    <Wrapper>
      <Accordion {...args} />
    </Wrapper>
  ),
};

export const MultipleToggle: Story = {
  name: 'multiple',
  args: {
    mode: 'multiple',
    defaultOpenIds: ['panel2'],
    items: [
      {
        id: 'panel1',
        title: 'Grid is awesome',
        content: <p>패널 1 컨텐츠</p>,
      },
      {
        id: 'panel2',
        title: "It's full of neat tricks",
        content: (
          <>
            <p>패널 2 컨텐츠</p>
            <p>여러 단락도 문제 없이 열림/닫힘 됩니다.</p>
          </>
        ),
      },
      {
        id: 'panel3',
        title: 'Tell me more (disabled)',
        disabled: true,
        content: <p>disabled 상태라 클릭해도 동작하지 않습니다.</p>,
      },
    ],
  },
  render: args => (
    <Wrapper>
      <Accordion {...args} />
    </Wrapper>
  ),
};

export const LongTitle: Story = {
  name: '긴 타이틀 케이스',
  args: {
    mode: 'single',
    items: [
      {
        id: 'panel1',
        title:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Long title alignment check',
        content: (
          <p>긴 타이틀에서도 우측 아이콘 영역이 겹치지 않도록 padding-right가 적용되어 있습니다.</p>
        ),
      },
      {
        id: 'panel2',
        title: 'Consectetur adipisicing',
        content: <p>패널 2 컨텐츠</p>,
      },
    ],
  },
  render: args => (
    <Wrapper>
      <Accordion {...args} />
    </Wrapper>
  ),
};
