import React from 'react';
import '../../assets/css/component/textarea.css';

export type TextareaVariant = 'outlined' | 'filled';
export type TextareaResize = 'none' | 'vertical' | 'horizontal' | 'both';

export interface TextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  variant?: TextareaVariant;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helperText?: string;
  className?: string;
  rows?: number;
  resize?: TextareaResize;
  maxLength?: number;
  showCount?: boolean;
}

export function Textarea({
  id,
  label,
  value,
  onChange,
  variant = 'outlined',
  placeholder,
  disabled = false,
  required = false,
  error = false,
  helperText,
  className,
  rows = 4,
  resize = 'vertical',
  maxLength,
  showCount = false,
}: TextareaProps) {
  const helperId = helperText ? `${id}-helper` : undefined;
  const countId = showCount ? `${id}-count` : undefined;
  const describedBy = [helperId, countId].filter(Boolean).join(' ') || undefined;
  const currentLength = value.length;

  return (
    <div
      className={[
        'textarea',
        `textarea--${variant}`,
        `textarea--resize-${resize}`,
        disabled ? 'is-disabled' : '',
        error ? 'has-error' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="textarea__control">
        <textarea
          id={id}
          className="textarea__input"
          value={value}
          placeholder={placeholder ?? ' '}
          disabled={disabled}
          required={required}
          rows={rows}
          maxLength={maxLength}
          aria-invalid={error || undefined}
          aria-describedby={describedBy}
          onChange={event => onChange(event.target.value)}
        />

        <label htmlFor={id} className="textarea__label">
          {label}
        </label>
      </div>

      {(helperText || showCount) && (
        <div className="textarea__footer">
          {helperText ? (
            <p id={helperId} className="textarea__helper">
              {helperText}
            </p>
          ) : (
            <span />
          )}

          {showCount && (
            <span id={countId} className="textarea__count" aria-live="polite">
              {maxLength ? `${currentLength}/${maxLength}` : `${currentLength}`}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
