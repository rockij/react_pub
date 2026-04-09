import type { Meta, StoryObj } from '@storybook/react';
import { FindIdScreenCase } from './FindIdScreenCase';

const meta: Meta<typeof FindIdScreenCase> = {
  title: 'Screen Cases/FindIdScreenCase',
  component: FindIdScreenCase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FindIdScreenCase>;

export const Default: Story = {};
