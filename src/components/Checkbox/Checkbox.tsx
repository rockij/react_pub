import React from 'react';
import '../../assets/css/checkbox.css';

interface Props {
  /**
   * 최상위 wrapper에 적용할 커스텀 클래스
   */
  className?: string;

  /**
   * 체크박스 id
   */
  id: string;

  /**
   * 체크박스 라벨
   */
  label: string;

  /**
   * 크기
   */
  size: 'small' | 'medium' | 'large';

  /**
   * 체크 여부
   */
  checked: boolean;

  /**
   * 비활성화 여부
   */
  disabled?: boolean;

  /**
   * 필수 여부
   */
  required?: boolean;

  /**
   * 클릭 이벤트 핸들러
   */
  onChange: (next: boolean) => void;
}

/**
 * 재사용 가능한 checkbox 컴포넌트
 */
export const Checkbox: React.FC<Props> = ({
  className,
  id,
  label,
  size = 'medium',
  checked = false,
  disabled,
  required,
  onChange,
}) => {
  return (
    <div className={`checkbox ${className} -${size}`.trim()}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        required={required}
        onChange={e => onChange(e.target.checked)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
