import type { Metadata } from 'next';
import '../assets/css/global.css';

export const metadata: Metadata = {
  title: 'Wylie Publishing',
  description: '와일리 퍼블리싱 코드 스토리북',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
