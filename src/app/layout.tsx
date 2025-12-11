import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'React Pub Storybook',
  description: 'React 퍼블리싱 코드 스토리북',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

