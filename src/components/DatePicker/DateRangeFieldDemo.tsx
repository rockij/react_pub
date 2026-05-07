import React from 'react';
import { format } from 'date-fns';
import type { Locale } from 'date-fns';
import { ko } from 'date-fns/locale';
import { DayPicker, Nav, type DateRange, type Matcher, type NavProps } from 'react-day-picker';

interface DateRangeFieldDemoProps {
  id: string;
  value?: DateRange;
  onChange: (value?: DateRange) => void;
  label?: string;
  locale?: Locale;
  formatString?: string;
  placeholderStart?: string;
  placeholderEnd?: string;
  disabled?: boolean;
  disabledDays?: Matcher | Matcher[];
  fromDate?: Date;
  toDate?: Date;
  defaultMonth?: Date;
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path
        d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm12 8H5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8ZM6 6a1 1 0 0 0-1 1v1h14V7a1 1 0 0 0-1-1H6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function DateRangeFieldDemo({
  id,
  value,
  onChange,
  label = '기간 선택',
  locale = ko,
  formatString = 'yyyy.MM.dd',
  placeholderStart = '시작일',
  placeholderEnd = '종료일',
  disabled = false,
  disabledDays,
  fromDate,
  toDate,
  defaultMonth,
}: DateRangeFieldDemoProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [month, setMonth] = React.useState<Date>(value?.from ?? defaultMonth ?? new Date());
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (value?.from) {
      setMonth(value.from);
      return;
    }

    if (defaultMonth) {
      setMonth(defaultMonth);
    }
  }, [defaultMonth, value?.from]);

  React.useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const startText = value?.from ? format(value.from, formatString, { locale }) : placeholderStart;
  const endText = value?.to ? format(value.to, formatString, { locale }) : placeholderEnd;

  const handleSelect = (nextRange?: DateRange) => {
    onChange(nextRange);

    if (nextRange?.from) {
      setMonth(nextRange.from);
    }

    if (nextRange?.from && nextRange?.to) {
      setIsOpen(false);
    }
  };

  const CalendarNav = (props: NavProps) => (
    <div className="date-picker__calendar-nav-slot">
      <Nav {...props} />
    </div>
  );

  return (
    <div ref={rootRef} className="date-picker-range">
      <button
        id={id}
        type="button"
        className="date-picker-range__trigger"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={label}
        disabled={disabled}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span className="date-picker-range__segment">
          <span className={value?.from ? 'date-picker-range__value' : 'date-picker-range__placeholder'}>
            {startText}
          </span>
          <span className="date-picker-range__icon" aria-hidden="true">
            <CalendarIcon />
          </span>
        </span>
        <span className="date-picker-range__separator" aria-hidden="true">
          ~
        </span>
        <span className="date-picker-range__segment">
          <span className={value?.to ? 'date-picker-range__value' : 'date-picker-range__placeholder'}>
            {endText}
          </span>
          <span className="date-picker-range__icon" aria-hidden="true">
            <CalendarIcon />
          </span>
        </span>
      </button>

      {isOpen && (
        <div
          className="date-picker__calendar-shell date-picker__calendar-shell--popover"
          role="dialog"
          aria-label={`${label} calendar`}
        >
          <DayPicker
            mode="range"
            selected={value}
            onSelect={handleSelect}
            month={month}
            onMonthChange={setMonth}
            locale={locale}
            disabled={disabledDays}
            startMonth={fromDate}
            endMonth={toDate}
            showOutsideDays
            fixedWeeks
            navLayout="after"
            components={{ Nav: CalendarNav }}
            className="date-picker__calendar"
          />
        </div>
      )}
    </div>
  );
}
