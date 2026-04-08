'use client';

import React from 'react';

const THEMES = [
  { id: 'blue', label: 'Blue theme', color: '#005a9c' },
  { id: 'emerald', label: 'Emerald theme', color: '#0f766e' },
  { id: 'sand', label: 'Sand theme', color: '#9a6b2f' },
] as const;

type ThemeId = (typeof THEMES)[number]['id'];

const STORAGE_KEY = 'wylie-theme';

function applyTheme(theme: ThemeId) {
  document.documentElement.setAttribute('data-theme', theme);
}

export function ThemeSwitcher() {
  const [theme, setTheme] = React.useState<ThemeId>('blue');

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ThemeId | null;
    const nextTheme = THEMES.some(item => item.id === stored) ? stored! : 'blue';
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }, []);

  const handleChange = (nextTheme: ThemeId) => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  return (
    <div className="theme-switcher" aria-label="Theme switcher">
      {THEMES.map(item => (
        <button
          key={item.id}
          type="button"
          className={theme === item.id ? 'theme-dot is-active' : 'theme-dot'}
          style={{ ['--theme-dot' as string]: item.color }}
          aria-label={item.label}
          aria-pressed={theme === item.id}
          onClick={() => handleChange(item.id)}
        />
      ))}
    </div>
  );
}
