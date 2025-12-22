import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Dialog } from './Dialog';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const Example: React.FC = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button label="모달 열기" onClick={() => setOpen(true)} />
          <Dialog isOpen={open} onRequestClose={() => setOpen(false)} title="예시 다이얼로그">
            <p>다이얼로그 내용입니다.</p>
            <div style={{ marginTop: 12 }}>
              <Button label="닫기" onClick={() => setOpen(false)} />
            </div>
          </Dialog>
        </>
      );
    };
    return <Example />;
  },
};

export const BottomSheetStory: Story = {
  render: () => {
    const Example: React.FC = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button label="BottomSheet 열기" onClick={() => setOpen(true)} />
          <Dialog
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            title="바텀 시트 예시"
            variant="bottomsheet"
          >
            <p>바텀 시트 내용입니다.</p>
            <div style={{ marginTop: 12 }}>
              <Button label="닫기" onClick={() => setOpen(false)} />
            </div>
          </Dialog>
        </>
      );
    };
    return <Example />;
  },
};

export const FullDialogStory: Story = {
  render: () => {
    const Example: React.FC = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button label="Full Dialog 열기" onClick={() => setOpen(true)} />
          <Dialog
            isOpen={open}
            onRequestClose={() => setOpen(false)}
            title="풀스크린 다이얼로그"
            variant="full"
          >
            <p>전체 화면을 덮는 다이얼로그 예시입니다.</p>
            <div style={{ marginTop: 12 }}>
              <Button label="닫기" onClick={() => setOpen(false)} />
            </div>
          </Dialog>
        </>
      );
    };
    return <Example />;
  },
};
