import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch, type SwitchProps } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'change' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

/**
 * 기본 스위치
 */
export const Default: Story = {
  args: {
    id: 'switch-default',
    checked: false,
    disabled: false,
    ariaLabel: '기본 스위치',
  },
  render: args => {
    const [checked, setChecked] = React.useState<boolean>(args.checked);

    return (
      <Switch
        {...args}
        checked={checked}
        onChange={next => {
          setChecked(next);
          args.onChange?.(next);
        }}
      />
    );
  },
};

/**
 * ON 상태
 */
export const Checked: Story = {
  args: {
    id: 'switch-checked',
    checked: true,
    ariaLabel: '켜진 스위치',
  },
  render: Default.render,
};

/**
 * Disabled (OFF)
 */
export const Disabled: Story = {
  args: {
    id: 'switch-disabled',
    checked: false,
    disabled: true,
    ariaLabel: '비활성 스위치',
  },
};

/**
 * Disabled (ON)
 */
export const DisabledChecked: Story = {
  args: {
    id: 'switch-disabled-checked',
    checked: true,
    disabled: true,
    ariaLabel: '비활성 켜짐 스위치',
  },
};

/**
 * 시각적 라벨 포함
 */
export const WithLabel: Story = {
  args: {
    id: 'switch-label',
    checked: true,
    label: '알림 수신',
  },
  render: Default.render,
};

/**
 * 실사용 예 (설정 토글)
 */
export const SettingsExample: Story = {
  render: () => {
    const [darkMode, setDarkMode] = React.useState(false);

    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Switch id="dark-mode" checked={darkMode} onChange={setDarkMode} label="다크 모드" />
        <span style={{ fontSize: 13, color: '#666' }}>{darkMode ? 'ON' : 'OFF'}</span>
      </div>
    );
  },
};
