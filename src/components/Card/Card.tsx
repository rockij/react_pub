import React from 'react';

export interface CardProps {
  /**
   * 카드 제목
   */
  title: string;
  /**
   * 카드 내용
   */
  children: React.ReactNode;
  /**
   * 카드 이미지 URL (선택사항)
   */
  imageUrl?: string;
  /**
   * 카드 클릭 이벤트 핸들러
   */
  onClick?: () => void;
}

/**
 * 재사용 가능한 Card 컴포넌트
 */
export const Card: React.FC<CardProps> = ({
  title,
  children,
  imageUrl,
  onClick,
}) => {
  const cardStyles: React.CSSProperties = {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: onClick ? 'pointer' : 'default',
    transition: 'all 0.3s ease',
    maxWidth: '400px',
    backgroundColor: 'white',
  };

  const imageStyles: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyles: React.CSSProperties = {
    padding: '16px',
  };

  const titleStyles: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 600,
    marginBottom: '12px',
    color: '#333',
  };

  return (
    <div style={cardStyles} onClick={onClick}>
      {imageUrl && (
        <img src={imageUrl} alt={title} style={imageStyles} />
      )}
      <div style={contentStyles}>
        <h3 style={titleStyles}>{title}</h3>
        <div style={{ color: '#666', lineHeight: '1.6' }}>{children}</div>
      </div>
    </div>
  );
};

