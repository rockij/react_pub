import Link from 'next/link';
import { getStorybookUrl } from './component-data';
import { SiteFooter } from './site-footer';
import { ThemeSwitcher } from './theme-switcher';

export default function Page() {
  const storybookUrl = getStorybookUrl();

  return (
    <div className="wylie-container">
      <header className="hero-section">
        <div className="hero-top">
          <div className="hero-brand">
            <h1>Wylie Design System</h1>
            <ThemeSwitcher />
          </div>
        </div>
        <nav className="hero-nav" aria-label="Main navigation">
          <div className="hero-nav-inner">
            <Link href="/" className="is-active">
              Home
            </Link>
            <Link href="/components">Component</Link>
            <Link href={storybookUrl} target="_blank" rel="noopener noreferrer">
              Storybook
            </Link>
          </div>
        </nav>
      </header>

      <main className="content-wrapper home-content">
        <section className="intro-hero-card">
          <p className="section-eyebrow">Design System Intro</p>
          <h2>브랜드 경험을 빠르게 구현할 수 있도록 돕는 퍼블리싱 기반 UI 라이브러리입니다</h2>
          <p className="intro-description">
            Wylie Design System은 반복되는 화면 제작 비용을 줄이고, 기획부터 개발까지 같은 기준으로
            소통할 수 있도록 공통 컴포넌트와 문서화를 함께 제공합니다.
          </p>
          <div className="intro-actions">
            <Link href="/components" className="primary-link-btn">
              컴포넌트 보러가기
            </Link>
            <Link href={storybookUrl} target="_blank" rel="noopener noreferrer" className="secondary-link-btn">
              스토리북 열기
            </Link>
          </div>
        </section>

        <section className="home-feature-grid" aria-label="핵심 소개">
          <article className="home-feature-card">
            <span>01</span>
            <h3>일관된 화면 구조</h3>
            <p>컴포넌트 단위로 구조를 표준화해 프로젝트가 커져도 UI 품질과 속도를 유지합니다.</p>
          </article>
          <article className="home-feature-card">
            <span>02</span>
            <h3>문서와 구현의 연결</h3>
            <p>스토리북 문서와 실제 컴포넌트를 함께 관리해 협업 과정에서 해석 차이를 줄입니다.</p>
          </article>
          <article className="home-feature-card">
            <span>03</span>
            <h3>확장 가능한 컴포넌트 설계</h3>
            <p>새로운 서비스 요구사항이 생겨도 기존 구조를 바탕으로 자연스럽게 확장할 수 있습니다.</p>
          </article>
        </section>

        <section className="home-info-panel">
          <div>
            <p className="section-eyebrow">How To Use</p>
            <h3>상단의 Component 메뉴에서 전체 컴포넌트 목록을 카드형 화면으로 확인할 수 있습니다</h3>
          </div>
          <p>
            각 카드에서는 컴포넌트의 성격을 한눈에 보고, 바로 Storybook Docs로 이동해 세부 속성과
            예제를 이어서 확인할 수 있습니다.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}


