# React Pub Storybook

Next.js 14 기반으로 컴포넌트 문서와 화면 케이스를 함께 관리하는 퍼블리싱 아카이브 프로젝트입니다.  
홈 화면에서 프로젝트 개요와 실행 방법을 확인할 수 있고, 컴포넌트 문서와 화면 케이스는 Next.js 페이지와 Storybook에서 함께 탐색할 수 있습니다.

## 기술 스택

- Next.js 14
- React 18
- TypeScript
- Storybook 7
- Netlify 정적 배포

## 주요 라이브러리

- `lucide-react`: 아이콘 렌더링
- `react-modal`: Dialog 모달 처리
- `react-tooltip`: Tooltip 인터랙션
- `react-day-picker`: DatePicker 달력 UI
- `date-fns`: 날짜 포맷 및 계산
- `embla-carousel-react`: Swipe 슬라이드 인터랙션
- `recharts`: Chart 시각화

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

홈과 Storybook을 함께 확인하려면 `npm run dev`와 `npm run storybook`을 각각 실행하면 됩니다.

## 환경 설정

기본 실행에는 필수 환경 변수가 없습니다.  
Storybook 연결 주소를 바꾸려면 루트에 `.env.local` 파일을 만들고 아래 값을 설정합니다.

```env
NEXT_PUBLIC_STORYBOOK_URL=http://localhost:6006
```

설명:

- 개발 환경에서는 값이 없으면 기본값으로 `http://localhost:6006`을 사용합니다.
- 프로덕션 환경에서는 값이 없으면 기본값으로 `/storybook/` 경로를 사용합니다.
- `.env*.local` 파일은 `.gitignore`에 포함되어 있어 커밋되지 않습니다.

관련 코드: [src/app/component-data.ts](/d:/workspace/react_pub/src/app/component-data.ts)

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

- `npm run dev`: Next.js 개발 서버 실행
- `npm run build`: Next.js 프로덕션 빌드
- `npm run start`: Next.js 프로덕션 서버 실행
- `npm run lint`: ESLint 실행
- `npm run storybook`: Storybook 개발 서버 실행
- `npm run build-storybook`: Storybook 정적 빌드
- `npm run build-storybook:static`: Storybook 결과물을 `out/storybook`으로 출력
- `npm run build:netlify`: Next.js 빌드와 Storybook 정적 결과물을 함께 생성

## 프로젝트 구조

```text
react_pub/
├─ .storybook/                 # Storybook 설정
├─ public/                     # 정적 에셋
├─ src/
│  ├─ app/                     # Next.js App Router 페이지
│  │  ├─ components/           # 컴포넌트 목록 및 상세 페이지
│  │  ├─ pubsheet/             # 퍼블리싱 문서 페이지
│  │  └─ screen-cases/         # 화면 케이스 목록 및 데이터
│  ├─ assets/
│  │  ├─ css/
│  │  │  ├─ component/         # 컴포넌트 전용 스타일
│  │  │  ├─ screen/            # 화면 케이스 전용 스타일
│  │  │  ├─ base.css           # 공통 토큰/기본 스타일
│  │  │  ├─ global.css         # 전역 import 진입점
│  │  │  └─ home-docs.css      # 홈 README 섹션 스타일
│  │  └─ images/               # 화면/홈 비주얼 에셋
│  ├─ components/              # UI 컴포넌트와 Storybook 스토리
│  └─ screen/                  # 화면 케이스 구현 컴포넌트
├─ netlify.toml                # Netlify 배포 설정
└─ STORYBOOK_GUIDE.md          # Storybook 가이드
```

## 현재 등록된 컴포넌트

총 21종이 등록되어 있습니다.

- Accordion
- Badge
- Button
- Card
- Chart
- Checkbox
- DatePicker
- Dialog
- Pagination
- RadioGroup
- Select
- Skeleton
- Slider
- Swipe
- Switch
- Table
- Tabs
- Textarea
- TextField
- Toast
- Tooltip

## Screen Cases

총 4종이 등록되어 있습니다.

- `문의 접수`: Select, TextField, Textarea, Checkbox, DatePicker 사용
- `모바일 뱅킹 홈`: Button, Swipe 사용
- `아이디 로그인`: TextField, Button 사용
- `아이디 찾기`: TextField, Button 사용

관련 코드:

- [src/app/screen-cases/data.ts](/d:/workspace/react_pub/src/app/screen-cases/data.ts)
- [src/screen/index.ts](/d:/workspace/react_pub/src/screen/index.ts)

## 작업 원칙

- 컴포넌트 케이스 추가 시 Storybook 스토리도 함께 추가합니다.
- README 수정 시 홈 화면의 README 섹션도 함께 업데이트합니다.
- 퍼블리셔 관점에서 재사용 구조와 마크업 일관성을 유지합니다.
- Screen Case 추가 또는 수정 시 사용 컴포넌트 목록을 함께 업데이트합니다.
- Screen Case 작업 시 프로젝트 내 공통 컴포넌트를 우선 사용합니다.
- 공통 스타일 변경은 [src/assets/css/base.css](/d:/workspace/react_pub/src/assets/css/base.css)에서 관리합니다.
- 컴포넌트 스타일은 `src/assets/css/component`, 화면 케이스 스타일은 `src/assets/css/screen`에서 관리합니다.

## 빌드와 배포

이 프로젝트는 [next.config.js](/d:/workspace/react_pub/next.config.js)에서 `output: 'export'`를 사용해 정적 사이트로 빌드합니다.

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
