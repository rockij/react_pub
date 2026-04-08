# React Pub Storybook

Next.js 14 기반 컴포넌트 쇼케이스 프로젝트입니다.  
앱 페이지에서 컴포넌트 목록과 문서를 보여주고, 실제 컴포넌트 문서는 Storybook으로 확인할 수 있습니다.

## 기술 스택

- Next.js 14
- React 18
- TypeScript
- Storybook 7
- Netlify 정적 배포

## 시작 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

- 기본 앱 주소: `http://localhost:3000`
- 개발 환경의 Storybook 기본 주소: `http://localhost:6006`

### 3. Storybook 실행

```bash
npm run storybook
```

- Storybook 주소: `http://localhost:6006`

앱과 Storybook을 함께 확인하려면 `npm run dev`와 `npm run storybook`을 각각 실행하면 됩니다.

## 환경 설정

이 프로젝트는 필수 환경 변수 없이도 실행됩니다.  
다만 앱에서 연결할 Storybook 주소를 바꾸고 싶다면 루트에 `.env.local` 파일을 만들어 아래 값을 설정할 수 있습니다.

```env
NEXT_PUBLIC_STORYBOOK_URL=http://localhost:6006
```

설명:

- 개발 환경에서는 값이 없으면 기본적으로 `http://localhost:6006`을 사용합니다.
- 프로덕션 환경에서는 값이 없으면 기본적으로 `/storybook/` 경로를 사용합니다.
- `.env*.local` 파일은 `.gitignore`에 포함되어 있어 커밋되지 않습니다.

관련 코드: [component-data.ts](/d:/workspace/react_pub/src/app/component-data.ts#L98)

## 사용 가능한 스크립트

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run storybook
npm run build-storybook
npm run build:netlify
```

각 스크립트 설명:

- `npm run dev`: Next.js 개발 서버 실행
- `npm run build`: Next.js 프로덕션 빌드
- `npm run start`: Next.js 프로덕션 서버 실행
- `npm run lint`: ESLint 실행
- `npm run storybook`: Storybook 개발 서버 실행
- `npm run build-storybook`: Storybook 정적 빌드
- `npm run build:netlify`: Next.js 정적 export와 Storybook 정적 빌드를 함께 생성

## 프로젝트 구조

```text
react_pub/
├─ .storybook/          # Storybook 설정
├─ public/              # 정적 에셋
├─ src/
│  ├─ app/              # Next.js App Router
│  ├─ assets/           # 전역 CSS 및 리소스
│  └─ components/       # UI 컴포넌트
├─ netlify.toml         # Netlify 배포 설정
└─ STORYBOOK_GUIDE.md   # Storybook 상세 가이드
```

현재 등록된 주요 컴포넌트:

- Accordion
- Button
- Card
- Checkbox
- Dialog
- RadioGroup
- Select
- Skeleton
- Slider
- Switch
- TextField
- Toast
- Tooltip

## 개발 규칙

- 컴포넌트 케이스를 추가할 때는 Storybook 스토리도 함께 추가합니다.
- 공통 스타일 변수는 [`src/assets/css/base.css`](/d:/workspace/react_pub/src/assets/css/base.css)에 관리합니다.

## 빌드와 배포

이 프로젝트는 `next.config.js`에서 `output: 'export'`를 사용하므로 정적 사이트로 빌드됩니다.

관련 설정:

- [next.config.js](/d:/workspace/react_pub/next.config.js)
- [netlify.toml](/d:/workspace/react_pub/netlify.toml)

### 정적 빌드

```bash
npm run build
npm run build-storybook
```

### Netlify 배포용 빌드

```bash
npm run build:netlify
```

생성 결과:

- `out/`: Next.js export 결과
- `out/storybook/`: Storybook 정적 결과

Netlify에서는 `netlify.toml` 기준으로 `out` 디렉터리를 배포합니다.

## 참고 문서

- [STORYBOOK_GUIDE.md](./STORYBOOK_GUIDE.md)
