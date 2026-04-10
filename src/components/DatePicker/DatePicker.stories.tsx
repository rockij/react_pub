import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { addDays } from 'date-fns';
import { ko } from 'date-fns/locale';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

function useArgsDate(initialValue?: Date) {
  const [value, setValue] = React.useState<Date | undefined>(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, setValue] as const;
}

export const Default: Story = {
  args: {
    id: 'storybook-datepicker-default',
    label: '체크인',
    placeholder: '날짜를 선택해 주세요.',
    helperText: '기본 단일 날짜 선택 예제입니다.',
    locale: ko,
  },
  render: args => {
    const [value, setValue] = useArgsDate(args.value);

    return <DatePicker {...args} value={value} onChange={setValue} />;
  },
};

export const BoundedRange: Story = {
  args: {
    id: 'storybook-datepicker-bounded',
    label: '예약일',
    placeholder: '예약 가능한 날짜를 선택해 주세요.',
    helperText: '오늘부터 30일 안의 평일만 선택 가능하도록 제한한 예제입니다.',
    fromDate: new Date(),
    toDate: addDays(new Date(), 30),
    disabledDays: { dayOfWeek: [0, 6] },
    locale: ko,
  },
  render: args => {
    const [value, setValue] = useArgsDate(args.value);

    return <DatePicker {...args} value={value} onChange={setValue} />;
  },
};

export const InlineCalendar: Story = {
  args: {
    id: 'storybook-datepicker-inline',
    label: '선택날짜',
    value: new Date('2026-04-21'),
    helperText: '필드를 열지 않고 화면에 직접 달력을 노출하는 인라인 예제입니다.',
    placeholder: '방문 날짜를 선택해 주세요.',
    formatString: 'yyyy년 M월 d일',
    inline: true,
    defaultMonth: new Date('2026-04-01'),
    locale: ko,
  },
  render: args => {
    const [value, setValue] = useArgsDate(args.value);

    return <DatePicker {...args} value={value} onChange={setValue} />;
  },
};

export const Disabled: Story = {
  args: {
    id: 'storybook-datepicker-disabled',
    label: '마감일',
    value: new Date('2026-04-20'),
    disabled: true,
    locale: ko,
  },
  render: args => <DatePicker {...args} onChange={() => {}} />,
};
