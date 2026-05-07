import React from 'react';
import '../../assets/css/component/textfield.css';

export type TextFieldVariant = 'outlined' | 'filled';

export interface TextFieldProps {
  id: string;
  label: string;

  value: string;
  onChange: (value: string) => void;

  type?: 'text' | 'password' | 'time';
  variant?: TextFieldVariant;

  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  readOnly?: boolean;

  helperText?: string;
  className?: string;
  endAdornment?: React.ReactNode;
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
  readOnly = false,

  helperText,
  className,
  endAdornment,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === 'password';
  const helperId = helperText ? `${id}-helper` : undefined;
  const inputType = isPassword && !showPassword ? 'password' : type;

  return (
    <div
      className={[
        'textfield',
        `textfield--${variant}`,
        disabled ? 'is-disabled' : '',
        error ? 'has-error' : '',
        endAdornment && !isPassword ? 'has-adornment' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="textfield__control">
        <input
          id={id}
          className="textfield__input"
          type={inputType}
          value={value}
          placeholder={placeholder ?? ' '}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          aria-invalid={error || undefined}
          aria-describedby={helperId}
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

        {!isPassword && endAdornment && (
          <span className="textfield__adornment" aria-hidden="true">
            {endAdornment}
          </span>
        )}
      </div>

      {helperText && (
        <p id={helperId} className="textfield__helper">
          {helperText}
        </p>
      )}
    </div>
  );
};
