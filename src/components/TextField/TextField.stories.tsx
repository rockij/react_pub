import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Clock3 } from 'lucide-react';
import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

// args.value를 초기값으로 쓰되, Controls 변경도 반영되게 동기화
function useArgsState(initialValue: string) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, setValue] as const;
}

export const Outlined: Story = {
  args: {
    id: 'outlined',
    label: 'Outlined',
    value: '',
  },
  render: args => {
    const [value, setValue] = useArgsState(args.value ?? '');
    return <TextField {...args} value={value} onChange={setValue} />;
  },
};

export const Filled: Story = {
  args: {
    id: 'filled',
    label: 'Filled',
    variant: 'filled',
    value: '',
  },
  render: args => {
    const [value, setValue] = useArgsState(args.value ?? '');
    return <TextField {...args} value={value} onChange={setValue} />;
  },
};

export const Password: Story = {
  args: {
    id: 'password',
    label: 'Password',
    type: 'password',
    value: '',
  },
  render: args => {
    const [value, setValue] = useArgsState(args.value ?? '');
    return <TextField {...args} value={value} onChange={setValue} />;
  },
};

export const Error: Story = {
  args: {
    id: 'error',
    label: 'Outlined',
    value: 'invalid value',
    error: true,
    helperText: '입력값을 확인해주세요',
  },
  render: args => {
    const [value, setValue] = useArgsState(args.value ?? '');
    return <TextField {...args} value={value} onChange={setValue} />;
  },
};

export const Disabled: Story = {
  args: {
    id: 'disabled',
    label: 'Disabled',
    value: 'readonly text',
    disabled: true,
  },
  render: args => <TextField {...args} onChange={() => {}} />,
};

export const TimeSelect: Story = {
  args: {
    id: 'time-select',
    label: '시간 선택',
    value: '',
    readOnly: true,
  },
  render: args => {
    const [value, setValue] = useArgsState(args.value ?? '');
    const timeInputRef = React.useRef<HTMLInputElement>(null);

    const openTimePicker = () => {
      const input = timeInputRef.current;

      if (!input) {
        return;
      }

      if (typeof input.showPicker === 'function') {
        input.showPicker();
        return;
      }

      input.focus();
      input.click();
    };

    return (
      <div
        style={{ position: 'relative', width: 280 }}
        role="button"
        tabIndex={0}
        aria-label="시간 선택 열기"
        onClick={openTimePicker}
        onKeyDown={event => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openTimePicker();
          }
        }}
      >
        <TextField
          {...args}
          value={value}
          onChange={setValue}
          endAdornment={<Clock3 strokeWidth={2} />}
          className="textfield-story-time-select"
        />
        <input
          ref={timeInputRef}
          type="time"
          value={value}
          aria-label="시간 선택"
          onChange={event => setValue(event.target.value)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
            cursor: 'pointer',
          }}
        />
      </div>
    );
  },
};
