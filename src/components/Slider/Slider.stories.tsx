import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'change' },
    className: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

/**
 * ✅ 기본 (내부 state로 value 동기화)
 * - Storybook Controls에서 value를 바꾸면 컴포넌트가 그 값으로 시작
 * - 슬라이더를 드래그하면 state가 업데이트되고 action(onChange)도 함께 찍힘
 */
export const Default: Story = {
  args: {
    id: 'slider-default',
    min: 0,
    max: 100,
    step: 1,
    value: 40,
    disabled: false,
  },
  render: args => {
    const [value, setValue] = React.useState<number>(args.value);

    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return (
      <Slider
        {...args}
        value={value}
        onChange={next => {
          setValue(next);
          args.onChange?.(next);
        }}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    id: 'slider-disabled',
    min: 0,
    max: 100,
    step: 1,
    value: 30,
    disabled: true,
  },
  render: args => {
    const [value, setValue] = React.useState<number>(args.value);

    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return (
      <Slider
        {...args}
        value={value}
        onChange={next => {
          setValue(next);
          args.onChange?.(next);
        }}
      />
    );
  },
};

export const RangeExample: Story = {
  args: {
    id: 'slider-range',
    min: 10,
    max: 50,
    step: 5,
    value: 25,
    disabled: false,
  },
  render: args => {
    const [value, setValue] = React.useState<number>(args.value);

    React.useEffect(() => {
      setValue(args.value);
    }, [args.value]);

    return (
      <div style={{ display: 'grid', gap: 12, justifyItems: 'center' }}>
        <Slider
          {...args}
          value={value}
          onChange={next => {
            setValue(next);
            args.onChange?.(next);
          }}
        />
        <div style={{ fontSize: 14 }}>
          value: <strong>{value}</strong>
        </div>
      </div>
    );
  },
};
