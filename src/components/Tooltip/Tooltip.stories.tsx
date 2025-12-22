import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TooltipDemo from './Tooltip';

const meta: Meta<typeof TooltipDemo> = {
  title: 'Components/Tooltip',
  component: TooltipDemo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TooltipDemo>;

export const Standalone: Story = {
  args: {},
};

export const PlacementRight: Story = {
  render: () => <TooltipDemo id="tooltip-right" content="오른쪽 툴팁" place="right" />,
};

export const PlacementBottom: Story = {
  render: () => <TooltipDemo id="tooltip-bottom" content="아래쪽 툴팁" place="bottom" />,
};

export const ClickTrigger: Story = {
  render: () => (
    <TooltipDemo
      id="tooltip-click"
      content="클릭으로 열리는 툴팁"
      openOnClick
      buttonLabel="Click me"
    />
  ),
};
