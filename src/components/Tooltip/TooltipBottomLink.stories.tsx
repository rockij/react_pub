import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TooltipDemo from './Tooltip';

const meta: Meta<typeof TooltipDemo> = {
  title: 'Components/Tooltip/Bottom Link Trigger',
  component: TooltipDemo,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof TooltipDemo>;

export const LinkTriggerBottom: Story = {
  render: () => (
    <TooltipDemo id="tooltip-link-trigger-bottom" content="컴포넌트 상세 확인" place="bottom">
      <a href="http://localhost:6006" target="_blank" rel="noopener noreferrer">
        Storybook
      </a>
    </TooltipDemo>
  ),
};
