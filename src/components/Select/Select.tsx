import React from 'react';
import '../../assets/css/select.css';

interface SelectOption {
  /**
   * option의 실제 값
   */
  value: string;
  /**
   * 화면 표시 텍스트
   */
  label: string;
  /**
   * 비활성 여부
   */
  disabled?: boolean;
}

interface Props {
  /**
   * 고유 id
   */
  id: string;

  /**
   * 현재 선택 값
   */
  value: string;

  /**
   * 변경시 호출 콜백
   */
  onChange: (value: string) => void;

  /**
   * select에 표시될 목록
   */
  options: SelectOption[];

  /**
   * 선택전 텍스트
   */
  placeholder?: string;

  /**
   * 비활성 여부
   */
  disabled?: boolean;

  /**
   * 필수 입력 여부
   */
  required?: boolean;

  /**
   * 스타일 확장 className
   */
  className?: string;
}

export const Select: React.FC<Props> = ({
  id,
  value,
  onChange,
  options,
  placeholder = '선택',
  disabled,
  required,
  className,
}) => {
  return (
    <div className={`select ${className}`.trim()}>
      <select
        id={id}
        value={value}
        disabled={disabled}
        required={required}
        onChange={e => onChange(e.target.value)}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>

        {options.map(opt => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
