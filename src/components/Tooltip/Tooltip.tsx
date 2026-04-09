'use client';

import React from 'react';
import { Tooltip as RTTooltip } from 'react-tooltip';

export interface TooltipDemoProps {
  id?: string;
  content?: string;
  place?: 'top' | 'right' | 'bottom' | 'left';
  openOnClick?: boolean;
  buttonLabel?: string;
  children?: React.ReactNode;
  triggerClassName?: string;
  triggerStyle?: React.CSSProperties;
  wrapperClassName?: string;
}

export const TooltipDemo: React.FC<TooltipDemoProps> = ({
  id = 'demo-tooltip',
  content = '툴팁 내용',
  place = 'top',
  openOnClick = false,
  buttonLabel = 'Hover me',
  children,
  triggerClassName,
  triggerStyle,
  wrapperClassName,
}) => {
  const hasCustomTrigger = children !== undefined;

  return (
    <div
      className={wrapperClassName}
      style={
        hasCustomTrigger
          ? { display: 'inline-flex', alignItems: 'center' }
          : { display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }
      }
    >
      <RTTooltip id={id} place={place} openOnClick={openOnClick} />
      {hasCustomTrigger ? (
        <span
          className={triggerClassName}
          style={triggerStyle}
          data-tooltip-id={id}
          data-tooltip-content={content}
        >
          {children}
        </span>
      ) : (
        <button
          className={triggerClassName}
          style={{ padding: '8px 12px', ...triggerStyle }}
          data-tooltip-id={id}
          data-tooltip-content={content}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
};

export default TooltipDemo;
