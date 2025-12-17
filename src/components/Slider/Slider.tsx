import React from 'react';
import '../../assets/css/slider.css';

interface SliderProps {
  /**
   * 고유 id
   */
  id: string;

  /**
   * 최소값
   */
  min?: number;

  /**
   * 최대값
   */
  max?: number;

  /**
   * 값 증감 단위
   */
  step?: number;

  /**
   * 현재 선택된 값
   */
  value: number;

  /**
   * 호출시 콜백
   */
  onChange: (value: number) => void;

  /**
   * 비활성 여부
   */
  disabled?: boolean;

  /**
   * 스타일 확장을 위한 className
   */
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  id,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  disabled = false,
  className,
}) => {
  // 진행률 계산 (활성 트랙 비율)
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={`slider ${disabled ? 'slider--disabled' : ''} ${className}`.trim()}>
      <div className="slider__track">
        <div className="slider__track-fill" style={{ width: `${percentage}%` }} />
      </div>

      <input
        type="range"
        id={id}
        className="slider__input"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        aria-disabled={disabled}
        onChange={e => onChange(Number(e.target.value))}
      />
    </div>
  );
};
