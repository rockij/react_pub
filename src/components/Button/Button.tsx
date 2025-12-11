import React from 'react';

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
  const baseStyles: React.CSSProperties = {
    padding: size === 'small' ? '8px 16px' : size === 'large' ? '16px 32px' : '12px 24px',
    fontSize: size === 'small' ? '14px' : size === 'large' ? '18px' : '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.6 : 1,
    transition: 'all 0.2s ease',
    fontWeight: 500,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      backgroundColor: '#0070f3',
      color: 'white',
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
    },
    danger: {
      backgroundColor: '#dc3545',
      color: 'white',
    },
  };

  return (
    <button
      style={{ ...baseStyles, ...variantStyles[variant] }}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

