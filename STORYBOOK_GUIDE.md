# Storybook 사용 가이드

이 프로젝트는 Next.js와 Storybook을 통합하여 컴포넌트를 개발하고 문서화하는 환경을 제공합니다.

## 📋 목차

1. [환경 설정](#환경-설정)
2. [Storybook 실행](#storybook-실행)
3. [컴포넌트 작성](#컴포넌트-작성)
4. [스토리 작성](#스토리-작성)
5. [컴포넌트 사용 예제](#컴포넌트-사용-예제)
6. [Netlify 배포](#netlify-배포)

## 🚀 환경 설정

### 1. 의존성 설치

```bash
npm install
```

또는

```bash
yarn install
```

### 2. 프로젝트 구조

```
react_pub/
├── .storybook/          # Storybook 설정 파일
│   ├── main.ts         # Storybook 메인 설정
│   └── preview.ts      # Storybook 미리보기 설정
├── src/
│   ├── app/            # Next.js 앱 라우터
│   └── components/     # 재사용 가능한 컴포넌트
│       ├── Button/
│       │   ├── Button.tsx
│       │   └── Button.stories.tsx
│       └── Card/
│           ├── Card.tsx
│           └── Card.stories.tsx
├── package.json
└── tsconfig.json
```

## 🎨 Storybook 실행

### 개발 모드

```bash
npm run storybook
```

브라우저에서 `http://localhost:6006`으로 접속하여 Storybook을 확인할 수 있습니다.

### 빌드

```bash
npm run build-storybook
```

정적 파일로 빌드하여 배포할 수 있습니다. 빌드된 파일은 `storybook-static` 폴더에 생성됩니다.

## 📝 컴포넌트 작성

### 컴포넌트 구조

각 컴포넌트는 다음과 같은 구조를 따릅니다:

```
ComponentName/
├── ComponentName.tsx      # 컴포넌트 파일
└── ComponentName.stories.tsx  # 스토리 파일
```

### 예제: Button 컴포넌트

```typescript
// src/components/Button/Button.tsx
import React from 'react';

export interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  onClick,
}) => {
  // 컴포넌트 구현
};
```

## 📖 스토리 작성

### 스토리 파일 구조

```typescript
// src/components/Button/Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};
```

### 스토리 메타데이터 옵션

- **title**: Storybook 사이드바에 표시될 경로
- **component**: 스토리가 사용하는 컴포넌트
- **parameters**: 스토리의 추가 설정 (레이아웃, 배경 등)
- **tags**: 자동 문서화를 위한 태그
- **argTypes**: Controls 패널에서 사용할 수 있는 속성 정의

### 여러 스토리 변형 만들기

```typescript
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};
```

## 💡 컴포넌트 사용 예제

### Next.js 페이지에서 사용

```typescript
// src/app/page.tsx
import { Button, Card } from '@/components';

export default function Home() {
  return (
    <main>
      <Button 
        label="클릭하세요" 
        variant="primary" 
        size="large"
        onClick={() => console.log('클릭됨')}
      />
      
      <Card title="카드 제목">
        카드 내용입니다.
      </Card>
    </main>
  );
}
```

## 🛠️ 유용한 기능

### Controls

Storybook의 Controls 패널을 사용하면 컴포넌트의 props를 실시간으로 조정할 수 있습니다.

### Actions

이벤트 핸들러를 Actions 패널에서 확인할 수 있습니다:

```typescript
argTypes: {
  onClick: { action: 'clicked' },
}
```

### 자동 문서화

`tags: ['autodocs']`를 사용하면 컴포넌트의 props와 사용법이 자동으로 문서화됩니다.

## 🚀 Netlify 배포

Netlify를 사용하여 Storybook을 정적 사이트로 배포할 수 있습니다.

### 1. 설정 파일 확인

프로젝트 루트에 `netlify.toml` 파일이 이미 생성되어 있습니다:

```toml
[build]
  command = "npm run build-storybook"
  publish = "storybook-static"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 2. Netlify 배포 방법

#### 방법 1: Netlify 웹 대시보드 사용

1. [Netlify](https://www.netlify.com/)에 로그인
2. "Add new site" → "Import an existing project" 클릭
3. Git 저장소 연결 (GitHub, GitLab, Bitbucket 등)
4. 빌드 설정:
   - **Build command**: `npm run build-storybook`
   - **Publish directory**: `storybook-static`
5. "Deploy site" 클릭

#### 방법 2: Netlify CLI 사용

```bash
# Netlify CLI 설치
npm install -g netlify-cli

# Netlify 로그인
netlify login

# 배포
netlify deploy --prod
```

### 3. 배포 확인

배포가 완료되면 Netlify에서 제공하는 URL로 Storybook에 접속할 수 있습니다.

예: `https://your-site-name.netlify.app`

### 4. 자동 배포 설정

Git 저장소와 연결한 경우, 다음 상황에서 자동으로 재배포됩니다:

- `main` 또는 `master` 브랜치에 푸시할 때
- Pull Request가 생성될 때 (프리뷰 배포)

### 5. 환경 변수 설정 (필요한 경우)

Netlify 대시보드에서:
1. Site settings → Build & deploy → Environment variables
2. 필요한 환경 변수 추가

### 6. 커스텀 도메인 설정

1. Netlify 대시보드 → Domain settings
2. "Add custom domain" 클릭
3. 도메인 입력 및 DNS 설정

## 📚 추가 리소스

- [Storybook 공식 문서](https://storybook.js.org/)
- [Next.js 공식 문서](https://nextjs.org/docs)
- [Storybook + Next.js 가이드](https://storybook.js.org/docs/get-started/frameworks/nextjs)
- [Netlify 공식 문서](https://docs.netlify.com/)

## 🎯 다음 단계

1. 새로운 컴포넌트를 `src/components/`에 추가
2. 해당 컴포넌트의 스토리 파일 작성
3. Storybook에서 컴포넌트 테스트 및 문서화
4. Next.js 앱에서 컴포넌트 사용
5. Netlify에 배포하여 팀과 공유

