import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: '카드 제목',
    children: '이것은 카드 컴포넌트의 기본 예제입니다. 여기에 내용을 작성할 수 있습니다.',
  },
};

export const WithImage: Story = {
  args: {
    title: '이미지가 있는 카드',
    imageUrl: 'https://via.placeholder.com/400x200',
    children: '이 카드는 이미지를 포함하고 있습니다.',
  },
};

export const Clickable: Story = {
  args: {
    title: '클릭 가능한 카드',
    children: '이 카드는 클릭 이벤트를 처리할 수 있습니다.',
    onClick: () => alert('카드가 클릭되었습니다!'),
  },
};

export const LongContent: Story = {
  args: {
    title: '긴 내용이 있는 카드',
    children:
      '이 카드는 더 긴 내용을 포함하고 있습니다. 여러 줄의 텍스트를 표시할 수 있으며, 카드의 높이가 자동으로 조정됩니다. 이렇게 긴 내용도 깔끔하게 표시됩니다.',
  },
};
