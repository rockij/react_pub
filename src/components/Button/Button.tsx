import React from 'react';
import '../../assets/css/button.css';

export interface ButtonProps {
  /**
   * 버튼의 라벨
   */
  label: string;
  /**
   * 버튼의 크기
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 버튼의 색상 변형
   */
  variant?: 'primary' | 'secondary' | 'danger';
  /**
   * 버튼 비활성화 여부
   */
  disabled?: boolean;
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
}

/**
 * 재사용 가능한 Button 컴포넌트
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  onClick,
}) => {
  const className = ['btn', `btn--${size}`, `btn--${variant}`, disabled ? 'btn--disabled' : '']
    .filter(Boolean)
    .join(' ');

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};
