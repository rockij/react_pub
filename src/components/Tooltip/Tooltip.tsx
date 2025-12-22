import React from 'react';
import { Tooltip as RTTooltip } from 'react-tooltip';

export interface TooltipDemoProps {
  id?: string;
  content?: string;
  place?: 'top' | 'right' | 'bottom' | 'left';
  openOnClick?: boolean;
  buttonLabel?: string;
}

export const TooltipDemo: React.FC<TooltipDemoProps> = ({
  id = 'demo-tooltip',
  content = '툴팁 내용',
  place = 'top',
  openOnClick = false,
  buttonLabel = 'Hover me',
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
      <RTTooltip id={id} place={place} openOnClick={openOnClick} />
      <button data-tooltip-id={id} data-tooltip-content={content} style={{ padding: '8px 12px' }}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default TooltipDemo;
