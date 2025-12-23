import React from 'react';
import '../../assets/css/skeleton.css';

type SkeletonVariant = 'rect' | 'circle' | 'line';

export interface SkeletonProps {
  /** rect: 박스, circle: 원형(아바타), line: 텍스트 라인 */
  variant?: SkeletonVariant;

  /** width/height는 number(px) 또는 css string(%, rem 등) */
  width?: number | string;
  height?: number | string;

  /** line에서 유용: 라인 끝을 살짝 불규칙하게 만들고 싶을 때 */
  radius?: number | string;

  /** 접근성: 로딩 상태 설명 (기본: Loading) */
  label?: string;

  className?: string;
  style?: React.CSSProperties;
}

function toCssSize(v?: number | string) {
  if (v === undefined) return undefined;
  return typeof v === 'number' ? `${v}px` : v;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rect',
  width,
  height,
  radius,
  label = 'Loading',
  className,
  style,
}) => {
  const isCircle = variant === 'circle';

  const classes = ['skeleton', `v_${variant}`];
  if (className) classes.push(className);

  return (
    <span
      className={classes.join(' ')}
      style={{
        width: toCssSize(width),
        height: toCssSize(height),
        borderRadius: isCircle ? '9999px' : radius ? toCssSize(radius) : undefined,
        ...style,
      }}
      role="status"
      aria-label={label}
      aria-live="polite"
    />
  );
};
