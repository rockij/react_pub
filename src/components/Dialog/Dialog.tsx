import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import '../../assets/css/dialog.css';

export interface DialogProps {
  isOpen: boolean;
  onRequestClose: () => void;
  title?: string;
  children?: React.ReactNode;
  variant?: 'dialog' | 'bottomsheet' | 'full';
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onRequestClose,
  title,
  children,
  variant = 'dialog',
}) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      ReactModal.setAppElement(document.getElementById('__next') || document.body);
    }
  }, []);
  const isBottom = variant === 'bottomsheet';
  const isFull = variant === 'full';

  const overlayClass = {
    base: 'modal-overlay',
    afterOpen: 'modal-overlay--after-open',
    beforeClose: 'modal-overlay--before-close',
  };

  const contentClass = isBottom
    ? {
        base: 'modal-bottom-content',
        afterOpen: 'modal-bottom-content--after-open',
        beforeClose: 'modal-bottom-content--before-close',
      }
    : isFull
    ? {
        base: 'modal-full-content',
        afterOpen: 'modal-full-content--after-open',
        beforeClose: 'modal-full-content--before-close',
      }
    : {
        base: 'modal-content',
        afterOpen: 'modal-content--after-open',
        beforeClose: 'modal-content--before-close',
      };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title || (isBottom ? 'BottomSheet' : 'Dialog')}
      overlayClassName={overlayClass}
      className={contentClass}
      closeTimeoutMS={200}
    >
      {isBottom ? (
        <div className="modal-bottom-inner">
          <header className="modal-bottom-header">
            <h3 style={{ margin: 0 }}>{title}</h3>
            <button onClick={onRequestClose} aria-label="Close" className="modal-bottom-close">
              ×
            </button>
          </header>
          <div style={{ marginTop: 12 }}>{children}</div>
        </div>
      ) : isFull ? (
        <div className="modal-full-inner">
          <header className="modal-full-header">
            <h2 style={{ margin: 0 }}>{title}</h2>
            <button onClick={onRequestClose} aria-label="Close" className="modal-full-close">
              ×
            </button>
          </header>
          <div className="modal-full-body" style={{ marginTop: 12 }}>
            {children}
          </div>
        </div>
      ) : (
        <>
          <header
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <h2 style={{ margin: 0 }}>{title}</h2>
            <button
              onClick={onRequestClose}
              aria-label="Close"
              style={{ fontSize: 18, lineHeight: 1 }}
            >
              ×
            </button>
          </header>
          <div style={{ marginTop: 12 }}>{children}</div>
        </>
      )}
    </ReactModal>
  );
};
