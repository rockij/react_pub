import Link from 'next/link';
import { Layers3, LayoutTemplate, MonitorSmartphone } from 'lucide-react';
import { getStorybookUrl } from '../component-data';
import { SiteFooter } from '../site-footer';
import { ModeToggle } from '../mode-toggle';
import { StorybookNavLinkBottom } from '../storybook-nav-link-bottom';
import { screenCaseItems } from './data';
import { ScreenCaseGallery } from './screen-case-gallery-card';

const totalComponents = new Set(screenCaseItems.flatMap(item => item.components)).size;

export default function Page() {
  const storybookUrl = getStorybookUrl();

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
            <Link href="/">Home</Link>
            <Link href="/components">Component</Link>
            <Link href="/screen-cases" className="is-active">
              Screen Cases
            </Link>
            <StorybookNavLinkBottom href={storybookUrl} tooltipId="global-storybook-nav-screen-cases" />
          </div>
        </nav>
      </header>

      <main className="content-wrapper screen-cases-page">
        <section className="screen-cases-hero">
          <p className="screen-cases-kicker">Use Cases</p>
          <h2>재사용 가능한 컴포넌트로 구성한 화면 케이스</h2>
          <p className="screen-cases-lead">
            이 페이지에서는 개별 컴포넌트가 실제 화면으로 조합되는 방식을 확인할 수 있습니다. 은행 홈
            케이스는 제공된 레퍼런스 이미지와 현재 컴포넌트 기반의 라이브 미리보기를 함께 제공합니다.
          </p>

          <div className="screen-cases-stats">
            <article>
              <LayoutTemplate size={20} aria-hidden="true" />
              <strong>{screenCaseItems.length}개 케이스</strong>
              <span>등록된 화면 케이스</span>
            </article>
            <article>
              <Layers3 size={20} aria-hidden="true" />
              <strong>{totalComponents}개 컴포넌트</strong>
              <span>케이스에 사용된 컴포넌트</span>
            </article>
            <article>
              <MonitorSmartphone size={20} aria-hidden="true" />
              <strong>미리보기 제공</strong>
              <span>레퍼런스 이미지와 라이브 구성</span>
            </article>
          </div>
        </section>

        <section className="screen-cases-section" aria-labelledby="screen-case-list-title">
          <div className="section-heading">
            <p className="section-eyebrow">Case Directory</p>
            <h2 id="screen-case-list-title">미리보기 목록</h2>
            <p className="section-description">
              각 케이스는 미리보기 버튼 형태로 제공됩니다. 항목을 선택하면 중앙 팝업에서 화면과 현재
              구현 상태를 확인할 수 있습니다.
            </p>
          </div>

          <ScreenCaseGallery items={screenCaseItems} />
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
