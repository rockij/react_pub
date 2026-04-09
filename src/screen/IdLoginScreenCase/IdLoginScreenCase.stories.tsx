import type { Meta, StoryObj } from '@storybook/react';
import { IdLoginScreenCase } from './IdLoginScreenCase';

const meta: Meta<typeof IdLoginScreenCase> = {
  title: 'Screen Cases/IdLoginScreenCase',
  component: IdLoginScreenCase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof IdLoginScreenCase>;

export const Default: Story = {};
