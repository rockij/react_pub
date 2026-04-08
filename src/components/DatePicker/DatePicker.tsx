import React from 'react';
import { format } from 'date-fns';
import type { Locale } from 'date-fns';
import { DayPicker, type Matcher } from 'react-day-picker';
import '../../assets/css/component/datepicker.css';

export type DatePickerVariant = 'outlined' | 'filled';

export interface DatePickerProps {
  id: string;
  label: string;
  value?: Date;
  onChange: (value?: Date) => void;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  className?: string;
  variant?: DatePickerVariant;
  allowClear?: boolean;
  disabledDays?: Matcher | Matcher[];
  fromDate?: Date;
  toDate?: Date;
  defaultMonth?: Date;
  captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years';
  locale?: Locale;
  formatString?: string;
}

export function DatePicker({
  id,
  label,
  value,
  onChange,
  name,
  placeholder,
  disabled = false,
  required = false,
  error = false,
  helperText,
  className,
  variant = 'outlined',
  allowClear = true,
  disabledDays,
  fromDate,
  toDate,
  defaultMonth,
  captionLayout = 'label',
  locale,
  formatString = 'yyyy.MM.dd',
}: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [month, setMonth] = React.useState<Date>(value ?? defaultMonth ?? new Date());
  const rootRef = React.useRef<HTMLDivElement>(null);
  const helperId = helperText ? `${id}-helper` : undefined;
  const displayValue = value ? format(value, formatString, locale ? { locale } : undefined) : '';
  const isFloating = isOpen || Boolean(displayValue);

  React.useEffect(() => {
    if (value) {
      setMonth(value);
      return;
    }

    if (defaultMonth) {
      setMonth(defaultMonth);
    }
  }, [defaultMonth, value]);

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

  const handleSelect = (nextDate?: Date) => {
    onChange(nextDate);

    if (nextDate) {
      setMonth(nextDate);
      setIsOpen(false);
    }
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onChange(undefined);
    setIsOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className={[
        'date-picker',
        `date-picker--${variant}`,
        disabled ? 'is-disabled' : '',
        error ? 'has-error' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="date-picker__control">
        <button
          id={id}
          type="button"
          className={['date-picker__trigger', displayValue ? 'has-value' : ''].filter(Boolean).join(' ')}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-invalid={error || undefined}
          aria-describedby={helperId}
          disabled={disabled}
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span className={isFloating ? 'date-picker__label is-floating' : 'date-picker__label'}>{label}</span>
          <span className={displayValue ? 'date-picker__value' : 'date-picker__placeholder'}>
            {displayValue || placeholder || '날짜를 선택하세요'}
          </span>
          <span className="date-picker__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path
                d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm12 8H5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8ZM6 6a1 1 0 0 0-1 1v1h14V7a1 1 0 0 0-1-1H6Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>

        {allowClear && value && !disabled && !required && (
          <button
            type="button"
            className="date-picker__clear"
            aria-label="선택한 날짜 지우기"
            onClick={handleClear}
          >
            ×
          </button>
        )}

        {name && (
          <input
            type="hidden"
            name={name}
            value={value ? format(value, 'yyyy-MM-dd') : ''}
            readOnly
          />
        )}
      </div>

      {helperText && (
        <p id={helperId} className="date-picker__helper">
          {helperText}
        </p>
      )}

      {isOpen && (
        <div className="date-picker__popover" role="dialog" aria-label={`${label} calendar`}>
          <DayPicker
            mode="single"
            selected={value}
            onSelect={handleSelect}
            month={month}
            onMonthChange={setMonth}
            locale={locale}
            captionLayout={captionLayout}
            disabled={disabledDays}
            startMonth={fromDate}
            endMonth={toDate}
            showOutsideDays
            fixedWeeks
            navLayout="around"
            className="date-picker__calendar"
          />
        </div>
      )}
    </div>
  );
}
