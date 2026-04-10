import React from 'react';
import { format } from 'date-fns';
import type { Locale } from 'date-fns';
import { ko } from 'date-fns/locale';
import { DayPicker, Nav, type Matcher, type NavProps } from 'react-day-picker';
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
  inline?: boolean;
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
  locale = ko,
  formatString = 'yyyy.MM.dd',
  inline = false,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [month, setMonth] = React.useState<Date>(value ?? defaultMonth ?? new Date());
  const rootRef = React.useRef<HTMLDivElement>(null);
  const helperId = helperText ? `${id}-helper` : undefined;
  const displayValue = value ? format(value, formatString, locale ? { locale } : undefined) : '';
  const isFloating = isOpen || Boolean(displayValue);
  const isCalendarVisible = inline || isOpen;
  const displayText = displayValue || placeholder || '날짜를 선택해 주세요.';

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
    if (inline || !isOpen) {
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
  }, [inline, isOpen]);

  const handleSelect = (nextDate?: Date) => {
    onChange(nextDate);

    if (nextDate) {
      setMonth(nextDate);

      if (!inline) {
        setIsOpen(false);
      }
    }
  };

  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    onChange(undefined);

    if (!inline) {
      setIsOpen(false);
    }
  };

  const CalendarNav = (props: NavProps) => (
    <div className="date-picker__calendar-nav-slot">
      <Nav {...props} />
      {inline && allowClear && value && !disabled && !required && (
        <button
          type="button"
          className="date-picker__calendar-clear"
          aria-label="선택한 날짜 지우기"
          onClick={handleClear}
        >
          <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
            <path
              d="M12 5a7 7 0 1 1-6.32 9.99 1 1 0 1 1 1.8-.88A5 5 0 1 0 12 7h-1.59a1 1 0 0 1-.7-1.71l2.3-2.29a1 1 0 0 1 1.41 0l2.29 2.3a1 1 0 0 1-.7 1.7H12Z"
              fill="currentColor"
            />
          </svg>
        </button>
      )}
    </div>
  );

  return (
    <div
      ref={rootRef}
      className={[
        'date-picker',
        `date-picker--${variant}`,
        inline ? 'date-picker--inline' : '',
        disabled ? 'is-disabled' : '',
        error ? 'has-error' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {inline ? (
        <div className="date-picker__inline-header">
          <div className="date-picker__inline-copy">
            <span className="date-picker__inline-label">
              {label}
              {required ? ' *' : ''}
            </span>
            <span className={displayValue ? 'date-picker__inline-value' : 'date-picker__inline-placeholder'}>
              {displayText}
            </span>
          </div>

        </div>
      ) : (
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
            {displayValue ? <span className="date-picker__value">{displayValue}</span> : null}
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
        </div>
      )}

      {name && <input type="hidden" name={name} value={value ? format(value, 'yyyy-MM-dd') : ''} readOnly />}

      {helperText && (
        <p id={helperId} className="date-picker__helper">
          {helperText}
        </p>
      )}

      {isCalendarVisible && (
        <div
          className={
            inline
              ? 'date-picker__calendar-shell date-picker__calendar-shell--inline'
              : 'date-picker__calendar-shell date-picker__calendar-shell--popover'
          }
          role={inline ? undefined : 'dialog'}
          aria-label={inline ? undefined : `${label} calendar`}
        >
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
            navLayout="after"
            components={{ Nav: CalendarNav }}
            className="date-picker__calendar"
          />
        </div>
      )}
    </div>
  );
}
