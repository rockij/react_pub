'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';

type ColorMode = 'light' | 'dark';

const STORAGE_KEY = 'wylie-color-mode';

function resolveInitialMode(): ColorMode {
  if (typeof window === 'undefined') {
    return 'light';
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyColorMode(mode: ColorMode) {
  document.documentElement.setAttribute('data-color-mode', mode);
}

export function ModeToggle() {
  const [mode, setMode] = React.useState<ColorMode>('light');

  React.useEffect(() => {
    const initialMode = resolveInitialMode();
    setMode(initialMode);
    applyColorMode(initialMode);
  }, []);

  const nextMode = mode === 'light' ? 'dark' : 'light';

  const handleToggle = () => {
    setMode(nextMode);
    applyColorMode(nextMode);
    window.localStorage.setItem(STORAGE_KEY, nextMode);
  };

  return (
    <button
      type="button"
      className="mode-toggle"
      aria-label={mode === 'light' ? '다크 모드로 전환' : '라이트 모드로 전환'}
      aria-pressed={mode === 'dark'}
      onClick={handleToggle}
    >
      <span className="mode-toggle__track">
        <span className="mode-toggle__thumb" />
      </span>
      {mode === 'light' ? (
        <Moon size={15} strokeWidth={2} aria-hidden="true" />
      ) : (
        <Sun size={15} strokeWidth={2} aria-hidden="true" />
      )}
    </button>
  );
}
