import { Button, Card } from '../components';

export default function Home() {
  const storybookUrl =
    process.env.NEXT_PUBLIC_STORYBOOK_URL ??
    (process.env.NODE_ENV === 'production' ? '/storybook/' : 'http://localhost:6006');

  return (
    <main style={{ padding: '2rem', display: 'grid', gap: '1.5rem' }}>
      <div>
        <h1 style={{ marginBottom: '0.5rem' }}>React Pub Storybook</h1>
        <p style={{ color: '#4a5568' }}>
          Storybook을 사용하여 컴포넌트를 확인하세요.
        </p>
      </div>

      <Card title="Storybook 살펴보기">
        Storybook에서 Card, Button 컴포넌트 등 모든 UI를 바로 확인할 수
        있습니다. 아래 버튼을 눌러 새로운 탭에서 Storybook을 열어보세요.
      </Card>

      <div>
        <a href={storybookUrl} target="_blank" rel="noreferrer">
          <Button label="Storybook 열기" size="large" />
        </a>
      </div>
    </main>
  );
}

