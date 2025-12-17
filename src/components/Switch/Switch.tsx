import React from 'react';
import '../../assets/css/switch.css';

export interface SwitchProps {
  /** input id (label 연결/테스트 용도) */
  id: string;

  /** 현재 on/off 상태 (controlled) */
  checked: boolean;

  /** 상태 변경 콜백 */
  onChange: (next: boolean) => void;

  /** 비활성화 */
  disabled?: boolean;

  /** 추가 클래스 */
  className?: string;

  /** 스크린리더용 라벨(권장). 시각 라벨이 없다면 필수에 가깝습니다. */
  ariaLabel?: string;

  /** 시각 라벨(선택) */
  label?: React.ReactNode;
}

export function Switch({
  id,
  checked,
  onChange,
  disabled = false,
  className,
  ariaLabel,
  label,
}: SwitchProps) {
  // 시각 라벨이 없으면 ariaLabel을 반드시 주는 걸 권장
  const a11yLabel = ariaLabel ?? (typeof label === 'string' ? label : undefined);

  return (
    <label className={`switch ${disabled ? 'disabled' : ''} ${className}`.trim()}>
      <input
        id={id}
        className="switch-input"
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        aria-label={a11yLabel}
        onChange={e => onChange(e.currentTarget.checked)}
      />

      <span className="switch-track" aria-hidden="true">
        <span className="switch-thumb" aria-hidden="true" />
      </span>

      {label ? <span className="switch-label">{label}</span> : null}
    </label>
  );
}
