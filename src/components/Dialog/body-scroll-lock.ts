let lockCount = 0;
let prevBodyOverflow = '';

export function lockBodyScroll() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  lockCount += 1;
  if (lockCount > 1) {
    return;
  }

  const body = document.body;
  prevBodyOverflow = body.style.overflow;
  // Keep html scroll state untouched to avoid page jump-to-top in some environments.
  body.style.overflow = 'hidden';
}

export function unlockBodyScroll() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  if (lockCount === 0) {
    return;
  }

  lockCount -= 1;
  if (lockCount > 0) {
    return;
  }

  const body = document.body;

  body.style.overflow = prevBodyOverflow;
}
