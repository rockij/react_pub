import React from 'react';
import '../../assets/css/component/badge.css';

export type BadgeTone = 'neutral' | 'brand' | 'success' | 'warning' | 'danger';
export type BadgeVariant = 'solid' | 'soft' | 'outline';
export type BadgeSize = 'small' | 'medium';

export interface BadgeProps {
  label: React.ReactNode;
  tone?: BadgeTone;
  variant?: BadgeVariant;
  size?: BadgeSize;
  leadingDot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  tone = 'neutral',
  variant = 'soft',
  size = 'medium',
  leadingDot = false,
  removable = false,
  onRemove,
  className,
}) => {
  const rootClassName = [
    'badge',
    `badge--${tone}`,
    `badge--${variant}`,
    `badge--${size}`,
    leadingDot ? 'badge--with-dot' : '',
    removable ? 'badge--removable' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={rootClassName}>
      {leadingDot ? <span className="badge__dot" aria-hidden="true" /> : null}
      <span className="badge__label">{label}</span>
      {removable ? (
        <button
          type="button"
          className="badge__remove"
          onClick={onRemove}
          aria-label={`${typeof label === 'string' ? label : 'badge'} remove`}
        >
          <span aria-hidden="true">x</span>
        </button>
      ) : null}
    </span>
  );
};
