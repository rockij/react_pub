# React Pub Storybook

Next.js 14 기반의 컴포넌트 문서화 및 화면 사례 아카이브 프로젝트입니다.  
홈 화면에서 프로젝트 개요와 실행 방법을 확인할 수 있고, 컴포넌트 문서는 Next.js 페이지와 Storybook에서 함께 탐색할 수 있습니다.

## 기술 스택

- Next.js 14
- React 18
- TypeScript
- Storybook 7
- Netlify 정적 배포

## 사용 라이브러리

- `lucide-react`: 아이콘 렌더링
- `react-modal`: Dialog 컴포넌트 모달 처리
- `react-tooltip`: Tooltip 컴포넌트 및 툴팁 UI
- `react-day-picker`: DatePicker 달력 인터랙션
- `date-fns`: 날짜 포맷팅 및 계산

## 시작 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

- 기본 주소: `http://localhost:3000`

### 3. Storybook 실행

```bash
npm run storybook
```

- 기본 주소: `http://localhost:6006`

앱과 Storybook을 함께 확인하려면 `npm run dev`와 `npm run storybook`을 각각 실행하면 됩니다.

## 환경 설정

기본 실행에는 필수 환경 변수가 없습니다.  
Storybook 연결 주소를 바꾸려면 루트에 `.env.local` 파일을 만들고 아래 값을 설정하면 됩니다.

```env
NEXT_PUBLIC_STORYBOOK_URL=http://localhost:6006
```

설명:

- 개발 환경에서는 값이 없으면 기본값으로 `http://localhost:6006`을 사용합니다.
- 프로덕션 환경에서는 값이 없으면 기본값으로 `/storybook/` 경로를 사용합니다.
- `.env*.local` 파일은 `.gitignore`에 포함되어 있어 커밋되지 않습니다.

관련 코드: [component-data.ts](/d:/workspace/react_pub/src/app/component-data.ts)

## 사용 가능한 스크립트

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run storybook
npm run build-storybook
npm run build-storybook:static
npm run build:netlify
```

각 스크립트 설명:

- `npm run dev`: Next.js 개발 서버 실행
- `npm run build`: Next.js 프로덕션 빌드
- `npm run start`: Next.js 프로덕션 서버 실행
- `npm run lint`: ESLint 실행
- `npm run storybook`: Storybook 개발 서버 실행
- `npm run build-storybook`: Storybook 정적 빌드
- `npm run build-storybook:static`: Storybook 결과물을 `out/storybook`으로 출력
- `npm run build:netlify`: Next.js 빌드 후 Storybook 정적 결과물을 `out/storybook`에 생성

## 프로젝트 구조

```text
react_pub/
├─ .storybook/                 # Storybook 설정
├─ public/                     # 정적 에셋
├─ src/
│  ├─ app/                     # Next.js App Router 페이지
│  ├─ assets/
│  │  └─ css/
│  │     ├─ component/         # 컴포넌트 전용 스타일
│  │     ├─ screen/            # 스크린 케이스 전용 스타일
│  │     ├─ base.css           # 공통 토큰/기본 스타일
│  │     ├─ global.css         # 전역 import 진입점
│  │     └─ home-docs.css      # 홈/README 화면 스타일
│  ├─ components/              # UI 컴포넌트 및 스토리
│  └─ screen/                  # 화면 사례 컴포넌트
├─ netlify.toml                # Netlify 배포 설정
└─ STORYBOOK_GUIDE.md          # Storybook 가이드
```

## 현재 등록된 주요 컴포넌트

- Accordion
- Button
- Card
- Checkbox
- DatePicker
- Dialog
- Pagination
- RadioGroup
- Select
- Skeleton
- Slider
- Switch
- Table
- Tabs
- Textarea
- TextField
- Toast
- Tooltip

## Screen Cases

- BankingHomeScreenCase

## 개발 규칙

- 컴포넌트 케이스를 추가할 때는 Storybook 스토리도 함께 추가합니다.
- README를 수정할 때는 홈 화면의 README 섹션도 함께 업데이트합니다.
- 공통 스타일 변수는 [`src/assets/css/base.css`](/d:/workspace/react_pub/src/assets/css/base.css)에서 관리합니다.
- 컴포넌트 스타일은 `src/assets/css/component`, 스크린 케이스 스타일은 `src/assets/css/screen`에서 관리합니다.

## 빌드와 배포

이 프로젝트는 `next.config.js`에서 `output: 'export'`를 사용해 정적 사이트로 빌드합니다.

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

- `out/`: Next.js 정적 결과물
- `out/storybook/`: Storybook 정적 결과물

Netlify에서는 `netlify.toml` 설정 기준으로 `out` 디렉터리를 배포합니다.

## 참고 문서

- [STORYBOOK_GUIDE.md](./STORYBOOK_GUIDE.md)
