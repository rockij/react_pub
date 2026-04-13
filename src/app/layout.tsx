import type { Metadata } from 'next';
import '../assets/css/global.css';
import { Suspense } from 'react';
import RouteLoadingOverlay from './route-loading-overlay';

export const metadata: Metadata = {
  title: 'React Pub Storybook',
  description: '퍼블리싱 컴포넌트와 Storybook 문서를 함께 제공하는 쇼케이스입니다.',
};

const colorModeScript = `
(() => {
  const storageKey = 'wylie-color-mode';
  const stored = window.localStorage.getItem(storageKey);
  const mode =
    stored === 'light' || stored === 'dark'
      ? stored
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

  document.documentElement.setAttribute('data-color-mode', mode);
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" data-color-mode="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: colorModeScript }} />
      </head>
      <body>
        <Suspense fallback={null}>
          <RouteLoadingOverlay />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
