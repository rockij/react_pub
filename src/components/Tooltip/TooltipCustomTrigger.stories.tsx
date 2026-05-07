import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TooltipDemo from './Tooltip';

const meta: Meta<typeof TooltipDemo> = {
  title: 'Components/Tooltip/Custom Trigger',
  component: TooltipDemo,
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof TooltipDemo>;

export const LinkTrigger: Story = {
  render: () => (
    <TooltipDemo id="tooltip-link-trigger" content="스토리북 링크를 새 탭에서 엽니다.">
      <a href="http://localhost:6006" target="_blank" rel="noopener noreferrer">
        Storybook
      </a>
    </TooltipDemo>
  ),
};
