import React from 'react';
import '../../assets/css/textfield.css';

export type TextFieldVariant = 'outlined' | 'filled';

export interface TextFieldProps {
  id: string;
  label: string;

  value: string;
  onChange: (value: string) => void;

  type?: 'text' | 'password';
  variant?: TextFieldVariant;

  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;

  helperText?: string;
  className?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  onChange,

  type = 'text',
  variant = 'outlined',

  placeholder,
  disabled = false,
  required = false,
  error = false,

  helperText,
  className,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === 'password';

  return (
    <div
      className={`textfield ${`textfield--${variant}`} ${disabled ? 'is-disabled' : ''} ${
        error && 'has-error'
      } ${className}`.trim()}
    >
      <div className="textfield__control">
        <input
          id={id}
          className="textfield__input"
          type={isPassword && !showPassword ? 'password' : 'text'}
          value={value}
          placeholder={placeholder ?? ' '}
          disabled={disabled}
          required={required}
          aria-invalid={error || undefined}
          onChange={e => onChange(e.target.value)}
        />

        <label htmlFor={id} className="textfield__label">
          {label}
        </label>

        {isPassword && (
          <button
            type="button"
            className="textfield__toggle"
            aria-label="비밀번호 표시 전환"
            onClick={() => setShowPassword(v => !v)}
            tabIndex={-1}
          >
            👁
          </button>
        )}
      </div>

      {helperText && <p className="textfield__helper">{helperText}</p>}
    </div>
  );
};
