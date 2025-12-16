import React from 'react';
import '../../assets/css/radio-group.css';

type Option = {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
};

interface Props {
  /**
   * 최상위 wrapper에 적용할 커스텀 클래스
   */
  className?: string;

  /**
   * 그룹을 식별하는 값
   */
  name: string;

  /**
   * 현재 선택된 값
   */
  value: string;

  /**
   * 크기
   */
  size: 'small' | 'medium' | 'large';

  /**
   * 선택 값 변경 시 호출
   */
  onChange: (next: string) => void;

  /**
   * Radio 옵션 목록
   */
  options: Option[];

  /**
   * 필수 선택 여부

   */
  required?: boolean;

  /**
   * 비활성화 여부
   */
  disabled?: boolean;

  /**
   * 그룹 설명 영역의 id 값
   */
  descriptionId?: string; // 그룹 설명(선택)

  /**
   * 에러 메시지 영역의 id 값
   */
  errorId?: string; // 에러 메시지(선택)

  /**
   * 에러 상태 여부
   */
  hasError?: boolean; // 에러 상태(선택)
}

export const RadioGroup: React.FC<Props> = ({
  name,
  value,
  onChange,
  options,
  required,
  disabled,
  className,
  size = 'medium',
}) => {
  return (
    <div className={`radio-group ${className} -${size}`.trim()}>
      {options.map((opt, idx) => {
        const id = `${name}-${idx}`;
        const isChecked = value === opt.value;

        return (
          <div className="radio" key={opt.value}>
            <input
              type="radio"
              id={id}
              name={name}
              value={opt.value}
              checked={isChecked}
              onChange={e => onChange(e.target.value)}
              required={required}
              disabled={disabled || opt.disabled}
            />
            <label htmlFor={id}>{opt.label}</label>
          </div>
        );
      })}
    </div>
  );
};
