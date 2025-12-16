import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioGroup } from './RadioGroup';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'change' }, // Storybook Actions 패널로도 확인 가능
  },
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    name: 'gender',
    value: 'male',
    required: false,
    disabled: false,
    className: 'radio-group',
    options: [
      { value: 'male', label: '남성' },
      { value: 'female', label: '여성' },
      { value: 'none', label: '선택안함', disabled: true },
    ],
  },
  render: args => {
    const [value, setValue] = React.useState<string>(args.value ?? '');

    return (
      <RadioGroup
        {...args}
        value={value}
        onChange={next => {
          setValue(next);
          args.onChange?.(next); // action(change)로도 이벤트 노출
        }}
      />
    );
  },
};
