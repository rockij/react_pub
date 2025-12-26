// Toast.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast, type ToastProps } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen', // 하단 고정 UI 확인용
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

function Demo(args: ToastProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div style={{ minHeight: '40vh', padding: 24 }}>
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <button type="button" onClick={() => setOpen(true)}>
          Show Toast
        </button>

        <button type="button" onClick={() => setOpen(false)}>
          Force Close
        </button>
      </div>

      <p style={{ marginTop: 12, opacity: 0.7 }}>
        - 하단에서 올라오고(duration 유지) 사라집니다. <br />- action 클릭 시 onAction 실행 후
        닫힙니다.
      </p>

      <Toast
        {...args}
        open={open}
        onClose={() => setOpen(false)}
        onAction={() => {
          args.onAction?.();
          // Toast 컴포넌트 내부에서 onClose도 호출하지만,
          // 데모에서 명시적으로도 닫고 싶으면 여기서 setOpen(false) 추가 가능
        }}
      />
    </div>
  );
}

export const Default: Story = {
  args: {
    open: false, // Demo에서 제어
    message: 'I love snacks.',
    duration: 2000,
    transitionMs: 250,
    position: 'bottom',
    variant: 'default',
    actionLabel: 'LOREM IPSUM DOLOREM',
  },
  render: args => <Demo {...args} />,
};

export const Top: Story = {
  args: {
    open: false,
    message: 'Top position toast',
    duration: 2000,
    transitionMs: 250,
    position: 'top',
    variant: 'default',
    actionLabel: 'ACTION',
  },
  render: args => <Demo {...args} />,
};

export const Success: Story = {
  args: {
    open: false,
    message: 'Saved successfully.',
    duration: 2000,
    transitionMs: 250,
    position: 'bottom',
    variant: 'success',
    actionLabel: 'UNDO',
  },
  render: args => <Demo {...args} />,
};

export const Error: Story = {
  args: {
    open: false,
    message: 'Something went wrong.',
    duration: 2000,
    transitionMs: 250,
    position: 'bottom',
    variant: 'error',
    actionLabel: 'RETRY',
  },
  render: args => <Demo {...args} />,
};
