import Link from 'next/link';
import { getComponentCards, getStorybookUrl } from './component-data';
import { ModeToggle } from './mode-toggle';
import { SiteFooter } from './site-footer';
import { StorybookNavLinkBottom } from './storybook-nav-link-bottom';

const stackItems = ['Next.js 14', 'React 18', 'TypeScript', 'Storybook 7', 'Netlify 정적 배포'];

const libraryItems = [
  { name: 'lucide-react', description: '아이콘 렌더링' },
  { name: 'react-modal', description: 'Dialog 모달 처리' },
  { name: 'react-tooltip', description: 'Tooltip 인터랙션' },
  { name: 'react-day-picker', description: 'DatePicker 달력 UI' },
  { name: 'date-fns', description: '날짜 포맷 및 계산' },
  { name: 'embla-carousel-react', description: 'Swipe 슬라이드 인터랙션' },
  { name: 'recharts', description: 'Chart 시각화' },
];

const scriptItems = [
  { name: 'npm run dev', description: 'Next.js 개발 서버 실행' },
  { name: 'npm run build', description: 'Next.js 프로덕션 빌드' },
  { name: 'npm run start', description: 'Next.js 프로덕션 서버 실행' },
  { name: 'npm run lint', description: 'ESLint 실행' },
  { name: 'npm run storybook', description: 'Storybook 개발 서버 실행' },
  { name: 'npm run build-storybook', description: 'Storybook 정적 빌드' },
  { name: 'npm run build-storybook:static', description: 'Storybook 결과물을 .next-build/storybook으로 출력' },
  { name: 'npm run build:netlify', description: 'Next.js 빌드와 Storybook 정적 결과물을 .next-build 기준으로 함께 생성' },
];

const sectionLinks = [
  { href: '#overview', label: '개요' },
  { href: '#stack', label: '기술 스택' },
  { href: '#libraries', label: '주요 라이브러리' },
  { href: '#getting-started', label: '시작 방법' },
  { href: '#environment', label: '환경 설정' },
  { href: '#vscode-setup', label: 'VS Code 설정' },
  { href: '#scripts', label: '스크립트' },
  { href: '#structure', label: '프로젝트 구조' },
  { href: '#components', label: '컴포넌트' },
  { href: '#workflow', label: '작업 원칙' },
];

export default async function Page() {
  const storybookUrl = getStorybookUrl();
  const componentCards = await getComponentCards(storybookUrl);

  return (
    <div className="wylie-container">
      <header className="hero-section">
        <div className="hero-top">
          <div className="hero-brand">
            <h1>React Pub Storybook</h1>
            <ModeToggle />
          </div>
        </div>
        <nav className="hero-nav" aria-label="Main navigation">
          <div className="hero-nav-inner">
            <Link href="/" className="is-active">
              Home
            </Link>
            <Link href="/components">Component</Link>
            <Link href="/screen-cases">Screen Cases</Link>
            <Link href="/pubsheet">Pub Sheet</Link>
            <StorybookNavLinkBottom href={storybookUrl} tooltipId="global-storybook-nav-home" />
          </div>
        </nav>
      </header>

      <main className="content-wrapper home-docs-page">
        <div className="home-docs-layout">
          <aside className="home-docs-nav" aria-label="홈 문서 목차">
            <div className="home-docs-nav-card">
              <p className="home-docs-nav-kicker">On this page</p>
              <ul>
                {sectionLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="home-docs-article">
            <section className="home-docs-hero" id="overview">
              <p className="home-docs-kicker">README</p>
              <h2>Next.js 14 기반 컴포넌트 문서와 화면 케이스 아카이브</h2>
              <p className="home-docs-lead">
                홈 화면에서 프로젝트 개요와 실행 방법을 확인할 수 있고, 컴포넌트 문서와 화면 케이스는
                Next.js 페이지와 Storybook에서 함께 탐색할 수 있습니다.
              </p>
              <div className="home-docs-actions">
                <Link href="/components" className="home-docs-primary-link">
                  컴포넌트 목록 보기
                </Link>
                <Link
                  href={storybookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-docs-secondary-link"
                >
                  Storybook 열기
                </Link>
              </div>
              <dl className="home-docs-meta">
                <div>
                  <dt>홈 주소</dt>
                  <dd>http://localhost:3000</dd>
                </div>
                <div>
                  <dt>스토리북</dt>
                  <dd>{storybookUrl}</dd>
                </div>
                <div>
                  <dt>컴포넌트 수</dt>
                  <dd>{componentCards.length}개</dd>
                </div>
              </dl>
            </section>

            <section className="home-docs-section" id="stack">
              <h3>기술 스택</h3>
              <ul className="home-docs-bullet-list">
                {stackItems.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="home-docs-section" id="libraries">
              <h3>주요 라이브러리</h3>
              <div className="home-docs-script-table" role="table" aria-label="주요 라이브러리">
                {libraryItems.map(item => (
                  <div key={item.name} className="home-docs-script-row" role="row">
                    <div className="home-docs-script-command" role="cell">
                      {item.name}
                    </div>
                    <div className="home-docs-script-description" role="cell">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="home-docs-section" id="getting-started">
              <h3>시작 방법</h3>
              <div className="home-docs-step">
                <h4>1. 의존성 설치</h4>
                <pre>{'npm install'}</pre>
              </div>
              <div className="home-docs-step">
                <h4>2. 개발 서버 실행</h4>
                <pre>{'npm run dev'}</pre>
                <p>기본 주소는 `http://localhost:3000`입니다.</p>
              </div>
              <div className="home-docs-step">
                <h4>3. Storybook 실행</h4>
                <pre>{'npm run storybook'}</pre>
                <p>기본 Storybook 주소는 `http://localhost:6006`입니다.</p>
              </div>
              <p className="home-docs-note">
                홈과 Storybook을 함께 확인하려면 `npm run dev`와 `npm run storybook`을 각각 실행하면
                됩니다.
              </p>
            </section>

            <section className="home-docs-section" id="environment">
              <h3>환경 설정</h3>
              <p>
                기본 실행에는 필수 환경 변수가 없습니다. Storybook 연결 주소를 바꾸려면 루트에
                `.env.local` 파일을 만들고 아래 값을 설정합니다.
              </p>
              <pre>{'NEXT_PUBLIC_STORYBOOK_URL=http://localhost:6006'}</pre>
              <ul className="home-docs-bullet-list">
                <li>개발 환경에서는 값이 없으면 `http://localhost:6006`을 사용합니다.</li>
                <li>프로덕션 환경에서는 값이 없으면 `/storybook/` 경로를 사용합니다.</li>
                <li>`.env*.local` 파일은 `.gitignore`에 포함되어 있어 커밋되지 않습니다.</li>
              </ul>
            </section>

            <section className="home-docs-section" id="vscode-setup">
              <h3>VS Code 작업 환경 설정</h3>
              <p>
                VS Code에서는 루트 폴더를 그대로 열고, 터미널 2개로 Next.js와 Storybook을 병행 실행하는
                흐름을 기준으로 작업합니다.
              </p>
              <div className="home-docs-step">
                <h4>1. 프로젝트 폴더 열기</h4>
                <pre>{'code .\n# 또는 VS Code에서 react_pub 폴더 열기'}</pre>
              </div>
              <div className="home-docs-step">
                <h4>2. 추천 확장 설치</h4>
                <ul className="home-docs-bullet-list">
                  <li>ESLint: 저장 전후 린트 오류 확인</li>
                  <li>Prettier: JSX, TS, CSS 포맷 정리</li>
                  <li>EditorConfig 사용 시 팀 규칙과 자동 정렬 기준 보조</li>
                </ul>
              </div>
              <div className="home-docs-step">
                <h4>3. 통합 터미널 실행</h4>
                <pre>{'npm install\nnpm run dev\nnpm run storybook'}</pre>
                <p>
                  `npm run dev`와 `npm run storybook`은 별도 터미널에서 실행하면 Home과 Storybook을
                  함께 확인하기 편합니다.
                </p>
              </div>
              <div className="home-docs-step">
                <h4>4. 확인 포인트</h4>
                <ul className="home-docs-bullet-list">
                  <li>Home: `http://localhost:3000`</li>
                  <li>Storybook: `http://localhost:6006`</li>
                  <li>환경 변수 변경 시 VS Code 터미널에서 개발 서버를 재시작합니다.</li>
                </ul>
              </div>
            </section>

            <section className="home-docs-section" id="scripts">
              <h3>사용 가능한 스크립트</h3>
              <div className="home-docs-script-table" role="table" aria-label="사용 가능한 스크립트">
                {scriptItems.map(item => (
                  <div key={item.name} className="home-docs-script-row" role="row">
                    <div className="home-docs-script-command" role="cell">
                      {item.name}
                    </div>
                    <div className="home-docs-script-description" role="cell">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="home-docs-section" id="structure">
              <h3>프로젝트 구조</h3>
              <pre>{`react_pub/
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
└─ STORYBOOK_GUIDE.md          # Storybook 가이드`}</pre>
            </section>

            <section className="home-docs-section" id="components">
              <h3>현재 등록된 컴포넌트</h3>
              <p className="home-docs-note">총 {componentCards.length}종이 등록되어 있습니다.</p>
              <ul className="home-docs-plain-list">
                {componentCards.map(component => (
                  <li key={component.slug}>{component.name}</li>
                ))}
              </ul>
            </section>

            <section className="home-docs-section" id="workflow">
              <h3>작업 원칙</h3>
              <ul className="home-docs-bullet-list">
                <li>협업이 필요하면 GitHub 아이디를 이메일 `ijkim@wylie.co.kr`로 보내 주세요. 확인 후 협업 신청 메일을 발송합니다.</li>
                <li>협업 승인 후에는 가이드에 따라 환경을 설정하고, `develop` 브랜치 기준으로 본인 작업 브랜치를 추가한 뒤 작업합니다.</li>
                <li>퍼블리셔 관점에서 재사용 구조와 마크업 일관성을 유지합니다.</li>
                <li>Screen Case 작업 시 프로젝트 내 공통 컴포넌트를 우선 사용합니다.</li>
                <li>Screen Case 추가 또는 수정 시 사용 컴포넌트 목록을 함께 업데이트합니다.</li>
                <li>컴포넌트를 이용해 Screen Case를 추가할 때 CSS는 <code>src/assets/css/screen</code> 경로에 케이스별 파일로 추가해 작업합니다.</li>
                <li>컴포넌트 케이스 추가 시 Storybook 스토리도 함께 추가합니다.</li>
                <li>공통 스타일 변경은 `src/assets/css/base.css`에서 관리합니다.</li>
                <li>컴포넌트 스타일은 `src/assets/css/component`, 화면 케이스 스타일은 `src/assets/css/screen`에서 관리합니다.</li>
                <li>README 수정 시 홈 화면의 README 섹션도 함께 업데이트합니다.</li>
                <li>`master` 브랜치는 자동 배포 대상이므로 직접 머지하지 않고, 반드시 `develop` 브랜치로 Merge Request 또는 Pull Request를 요청합니다.</li>
                <li>작업 후 스테이지에 올리기 전에는 `develop` 브랜치에 pull 받을 내용이 있는지 확인하고, 있으면 본인 브랜치에 먼저 merge 합니다.</li>
                <li>개인 브랜치에서 작업 후 push 전에는 페이지에 빨간줄이 없는지 확인하고, <code>npm run lint</code>와 <code>npm run build</code>를 실행해 에러 여부를 점검합니다.</li>
                <li>작업 완료 후에는 본인 브랜치에만 push 하고, 타겟 브랜치를 `develop`으로 지정한 Merge Request 또는 Pull Request를 작성해 전달합니다.</li>
                <li>Pull Request 작성 시 `Add a description`에 작업 내용을 간략히 적어 주는 것을 권장합니다.</li>
                <li>승인된 작업만 배포합니다.</li>
                <li>`next.config.js`의 `output: &apos;export&apos;` 설정으로 정적 사이트를 빌드합니다.</li>
                <li>Netlify는 `netlify.toml` 기준으로 `.next-build` 디렉터리를 배포합니다.</li>
              </ul>
              <div className="home-docs-build-grid">
                <div className="home-docs-build-card">
                  <h4>정적 빌드</h4>
                  <pre>{'npm run build\nnpm run build-storybook'}</pre>
                </div>
                <div className="home-docs-build-card">
                  <h4>Netlify 배포용 빌드</h4>
                  <pre>{'npm run build:netlify'}</pre>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
