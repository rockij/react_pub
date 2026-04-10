import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ComponentCaseSections } from '../../component-cases';
import { getComponentCards, getStorybookUrl } from '../../component-data';
import { SiteFooter } from '../../site-footer';
import { ModeToggle } from '../../mode-toggle';
import { StorybookNavLinkBottom } from '../../storybook-nav-link-bottom';

export async function generateStaticParams() {
  const cards = await getComponentCards(getStorybookUrl());

  return cards.map(card => ({ slug: card.slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const storybookUrl = getStorybookUrl();
  const componentCards = await getComponentCards(storybookUrl);
  const component = componentCards.find(card => card.slug === params.slug);

  if (!component) {
    notFound();
  }

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
            <Link href="/components" className="is-active">
              Component
            </Link>
            <Link href="/screen-cases">Screen Cases</Link>
            <Link href="/pubsheet">Pub Sheet</Link>
            <StorybookNavLinkBottom href={storybookUrl} tooltipId="global-storybook-nav-component-detail" />
          </div>
        </nav>
      </header>

      <main className="content-wrapper component-docs-wrapper">
        <section className="component-docs-shell">
          <p className="component-docs-kicker">Component Pattern</p>
          <h1>{component.title}</h1>
          <div className="component-docs-intro">
            <p>{component.meta.description}</p>
            <p>
              이 페이지는 스토리북 케이스를 기준으로 정리한 대표 사용 예시를 문서형 레이아웃으로
              모아 보여줍니다.
            </p>
          </div>

          <nav className="component-docs-toc" aria-label="Page contents">
            <h2>Page Contents</h2>
            <ul>
              <li>
                <a href="#examples">Examples</a>
              </li>
              <li>
                <a href="#reference">Reference</a>
              </li>
            </ul>
          </nav>

          <section id="examples" className="component-docs-section">
            <h2>Examples</h2>
            <ComponentCaseSections slug={component.slug} />
          </section>

          <section id="reference" className="component-docs-section">
            <h2>Reference</h2>
            <p>추가 속성, 상호작용, 전체 문서는 Storybook Docs에서 이어서 확인할 수 있습니다.</p>
            <div className="component-detail-actions">
              <Link href="/components" className="secondary-link-btn light">
                전체 목록
              </Link>
              <Link
                href={component.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="primary-link-btn dark"
              >
                Storybook Docs
              </Link>
            </div>
          </section>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}


