'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const SHOW_DELAY_MS = 150;

function isInternalNavigation(event: MouseEvent, anchor: HTMLAnchorElement) {
  if (event.defaultPrevented) {
    return false;
  }

  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return false;
  }

  if (anchor.target && anchor.target !== '_self') {
    return false;
  }

  if (anchor.hasAttribute('download')) {
    return false;
  }

  const href = anchor.getAttribute('href');
  if (!href || href.startsWith('#')) {
    return false;
  }

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) {
    return false;
  }

  const current = `${window.location.pathname}${window.location.search}`;
  const next = `${url.pathname}${url.search}`;

  return current !== next;
}

export default function RouteLoadingOverlay() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a');

      if (!anchor || !isInternalNavigation(event, anchor)) {
        return;
      }

      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }

      timerRef.current = window.setTimeout(() => {
        setVisible(true);
      }, SHOW_DELAY_MS);
    };

    document.addEventListener('click', onClick, true);

    return () => {
      document.removeEventListener('click', onClick, true);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setVisible(false);
  }, [pathname, searchParams]);

  if (!visible) {
    return null;
  }

  return (
    <div className="route-loading" role="status" aria-live="polite" aria-label="페이지 이동 중">
      <div className="route-loading__content">
        <span className="route-loading__spinner" aria-hidden="true" />
        <p>화면을 불러오는 중입니다.</p>
      </div>
    </div>
  );
}
