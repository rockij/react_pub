import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    id: 'checkbox-1',
    checked: false,
    disabled: false,
    required: false,
  },
  render: args => {
    const [checked, setChecked] = React.useState<boolean>(args.checked ?? false);

    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={next => {
          setChecked(next);
        }}
      />
    );
  },
};

export const Label: Story = {
  args: {
    id: 'checkbox-2',
    checked: false,
    disabled: false,
    required: false,
  },
  render: args => {
    const [checked1, setChecked1] = React.useState<boolean>(args.checked ?? false);
    const [checked2, setChecked2] = React.useState<boolean>(args.checked ?? false);
    const [checked3, setChecked3] = React.useState<boolean>(args.checked ?? false);

    return (
      <div className="checkbox-group">
        <Checkbox
          {...args}
          id={`${args.id}-1`}
          label="label"
          checked={checked1}
          onChange={next => {
            setChecked1(next);
          }}
        />
        <Checkbox
          {...args}
          id={`${args.id}-2`}
          label="Required *"
          checked={checked2}
          required
          onChange={next => {
            setChecked2(next);
          }}
        />
        <Checkbox
          {...args}
          id={`${args.id}-3`}
          label="disabled"
          checked={checked3}
          disabled
          onChange={next => {
            setChecked3(next);
          }}
        />
      </div>
    );
  },
};

export const Size: Story = {
  args: {
    id: 'checkbox-3',
    checked: false,
  },
  render: args => {
    const [checked1, setChecked1] = React.useState<boolean>(args.checked ?? false);
    const [checked2, setChecked2] = React.useState<boolean>(args.checked ?? false);
    const [checked3, setChecked3] = React.useState<boolean>(args.checked ?? false);

    return (
      <div className="checkbox-group">
        <Checkbox
          {...args}
          size="small"
          id={`${args.id}-1`}
          label="small"
          checked={checked1}
          onChange={next => {
            setChecked1(next);
          }}
        />
        <Checkbox
          {...args}
          id={`${args.id}-2`}
          label="medium"
          checked={checked2}
          required
          onChange={next => {
            setChecked2(next);
          }}
        />
        <Checkbox
          {...args}
          size="large"
          id={`${args.id}-3`}
          label="large"
          checked={checked3}
          onChange={next => {
            setChecked3(next);
          }}
        />
      </div>
    );
  },
};
