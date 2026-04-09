import type { Meta, StoryObj } from '@storybook/react';
import { ConsultInquiryScreenCase } from './ConsultInquiryScreenCase';

const meta: Meta<typeof ConsultInquiryScreenCase> = {
  title: 'Screen Cases/ConsultInquiryScreenCase',
  component: ConsultInquiryScreenCase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ConsultInquiryScreenCase>;

export const Default: Story = {};
