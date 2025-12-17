import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

const ageOptions = [
  { value: '10', label: '10대' },
  { value: '20', label: '20대' },
  { value: '30', label: '30대' },
  { value: '40', label: '40대' },
];

export const Default: Story = {
  args: {
    id: 'age',
    value: '',
    placeholder: 'Age',
    options: ageOptions,
    disabled: false,
    required: false,
    onChange: () => {},
  },
  render: args => {
    const [value, setValue] = React.useState<string>(args.value ?? '');

    return (
      <Select
        {...args}
        value={value}
        onChange={next => {
          setValue(next);
          console.log('Select value:', next);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    id: 'age-disabled',
    value: '',
    placeholder: 'Age',
    options: ageOptions,
    disabled: true,
    required: false,
    onChange: () => {},
  },
  render: args => {
    const [value, setValue] = React.useState<string>(args.value ?? '');

    return <Select {...args} value={value} onChange={setValue} />;
  },
};

export const Preselected: Story = {
  args: {
    id: 'age-preselected',
    value: '30',
    placeholder: 'Age',
    options: ageOptions,
    disabled: false,
    required: false,
    onChange: () => {},
  },
  render: args => {
    const [value, setValue] = React.useState<string>(args.value ?? '');

    return <Select {...args} value={value} onChange={setValue} />;
  },
};
