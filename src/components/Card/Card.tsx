import React from 'react';
import '../../assets/css/card.css';

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
export const Card: React.FC<CardProps> = ({ title, children, imageUrl, onClick }) => {
  const className = ['card', onClick ? 'card--clickable' : ''].filter(Boolean).join(' ');

  return (
    <div className={className} onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} className="card__image" />}
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <div className="card__body">{children}</div>
      </div>
    </div>
  );
};
