// Toast.tsx
import React from 'react';
import '../../assets/css/component/toast.css';

export type ToastVariant = 'default' | 'success' | 'error';

export interface ToastProps {
  open: boolean;
  message: React.ReactNode;

  /** ms 단위. 기본 2000 */
  duration?: number;

  /** 진입/이탈 애니메이션 시간(ms). 기본 250 */
  transitionMs?: number;

  /** 토스트 위치. 기본 'bottom' */
  position?: 'bottom' | 'top';

  /** 우측 액션(텍스트 버튼 등) */
  actionLabel?: string;
  onAction?: () => void;

  /** 닫기 이벤트(자동/수동 모두 여기로 수렴) */
  onClose: () => void;

  /** 스타일 확장 */
  variant?: ToastVariant;
  className?: string;

  /** 접근성 라벨(닫기 버튼) */
  closeLabel?: string;
}

export function Toast({
  open,
  message,
  duration = 2000,
  transitionMs = 250,
  position = 'bottom',
  actionLabel,
  onAction,
  onClose,
  variant = 'default',
  className,
  closeLabel = '닫기',
}: ToastProps) {
  const closeTimerRef = React.useRef<number | null>(null);
  const transitionStyle: React.CSSProperties & { '--toast-transition-ms': string } = {
    '--toast-transition-ms': `${transitionMs}ms`,
  };

  // open=true가 되면 duration 후 close 트리거
  React.useEffect(() => {
    if (!open) return;

    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => onClose(), duration);

    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    };
  }, [open, duration, onClose]);

  // ESC로 닫기
  React.useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const rootClass = [
    'ui-toast-host',
    `ui-toast-host--${position}`,
    open ? 'is-open' : 'is-closed',
  ].join(' ');

  const toastClass = ['ui-toast', `ui-toast--${variant}`, className ?? ''].join(' ').trim();

  return (
    <div className={rootClass} style={transitionStyle}>
      <div className={toastClass} role="status" aria-live="polite" aria-atomic="true">
        <div className="ui-toast__message">{message}</div>

        <div className="ui-toast__right">
          {actionLabel && (
            <button
              type="button"
              className="ui-toast__action"
              onClick={() => {
                onAction?.();
                onClose();
              }}
            >
              {actionLabel}
            </button>
          )}

          <button
            type="button"
            className="ui-toast__close"
            onClick={onClose}
            aria-label={closeLabel}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
