import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['outlined', 'filled'],
    },
    resize: {
      control: { type: 'select' },
      options: ['none', 'vertical', 'horizontal', 'both'],
    },
    error: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    showCount: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

function useArgsState(initialValue: string) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, setValue] as const;
}

export const Outlined: Story = {
  args: {
    id: 'textarea-outlined',
    label: 'Project summary',
    value: '',
    placeholder: 'Write a short summary',
    rows: 4,
  },
  render: args => {
    const [value, setValue] = useArgsState(args.value ?? '');
    return <Textarea {...args} value={value} onChange={setValue} />;
  },
};

export const Filled: Story = {
  args: {
    id: 'textarea-filled',
    label: 'Notes',
    variant: 'filled',
    value: 'Filled variant keeps the form surface softer for dense layouts.',
    rows: 5,
  },
  render: args => {
    const [value, setValue] = useArgsState(args.value ?? '');
    return <Textarea {...args} value={value} onChange={setValue} />;
  },
};

export const WithHelperAndCount: Story = {
  args: {
    id: 'textarea-helper',
    label: 'Team update',
    value: 'Weekly release notes',
    helperText: 'Keep it concise so it fits in the dashboard card.',
    maxLength: 120,
    showCount: true,
    rows: 5,
  },
  render: args => {
    const [value, setValue] = useArgsState(args.value ?? '');
    return <Textarea {...args} value={value} onChange={setValue} />;
  },
};

export const Error: Story = {
  args: {
    id: 'textarea-error',
    label: 'Feedback',
    value: 'Too short',
    error: true,
    helperText: 'Please include at least one concrete example.',
    rows: 4,
  },
  render: args => {
    const [value, setValue] = useArgsState(args.value ?? '');
    return <Textarea {...args} value={value} onChange={setValue} />;
  },
};

export const Disabled: Story = {
  args: {
    id: 'textarea-disabled',
    label: 'Archived note',
    value: 'This content is locked for editing.',
    disabled: true,
    resize: 'none',
    rows: 4,
  },
  render: args => <Textarea {...args} onChange={() => {}} />,
};
