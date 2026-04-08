import type { Meta, StoryObj } from '@storybook/react';
import { BankingHomeScreenCase } from './BankingHomeScreenCase';

const meta: Meta<typeof BankingHomeScreenCase> = {
  title: 'Screen Cases/BankingHomeScreenCase',
  component: BankingHomeScreenCase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof BankingHomeScreenCase>;

export const Default: Story = {};
