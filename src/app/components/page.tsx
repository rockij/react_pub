import Link from 'next/link';
import {
  AppWindow,
  BadgeInfo,
  BellRing,
  ChevronsUpDown,
  CircleDot,
  ExternalLink,
  LoaderCircle,
  MessageSquareWarning,
  MousePointerClick,
  SlidersHorizontal,
  SquareCheck,
  SquareChevronDown,
  SquareStack,
  TextCursorInput,
  ToggleRight,
  type LucideIcon,
} from 'lucide-react';
import { getComponentCards, getStorybookUrl } from '../component-data';
import { SiteFooter } from '../site-footer';
import { ThemeSwitcher } from '../theme-switcher';

const componentIcons: Record<string, LucideIcon> = {
  Accordion: ChevronsUpDown,
  Button: MousePointerClick,
  Card: SquareStack,
  Checkbox: SquareCheck,
  Dialog: MessageSquareWarning,
  RadioGroup: CircleDot,
  Select: SquareChevronDown,
  Skeleton: LoaderCircle,
  Slider: SlidersHorizontal,
  Switch: ToggleRight,
  TextField: TextCursorInput,
  Toast: BellRing,
  Tooltip: BadgeInfo,
};

export default async function Page() {
  const storybookUrl = getStorybookUrl();
  const componentCards = await getComponentCards(storybookUrl);

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
            <Link href="/">Home</Link>
            <Link href="/components" className="is-active">
              Component
            </Link>
            <Link href={storybookUrl} target="_blank" rel="noopener noreferrer">
              Storybook
            </Link>
          </div>
        </nav>
      </header>

      <main className="content-wrapper">
        <section id="component-section" className="component-gallery-section">
          <div className="section-heading">
            <h2>Components</h2>
          </div>

          <div className="component-gallery" aria-label="컴포넌트 갤러리">
            {componentCards.map(component => {
              const PreviewIcon = componentIcons[component.name] ?? AppWindow;

              return (
                <article key={component.name} className="component-showcase-card">
                  <div className="showcase-top">
                    <Link
                      href={`/components/${component.slug}`}
                      className="showcase-link-layer"
                      aria-label={`${component.title} cases page`}
                    />
                    <Link
                      href={component.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="preview-docs-link"
                      aria-label={`${component.title} Storybook Docs`}
                    >
                      <ExternalLink size={16} strokeWidth={2} aria-hidden="true" />
                    </Link>
                    <div className="showcase-preview-group">
                      <div className="component-preview" aria-hidden="true">
                        <PreviewIcon size={34} strokeWidth={1.9} />
                      </div>
                    </div>
                    <div className="showcase-copy">
                      <div className="showcase-title-row">
                        <h3>{component.title}</h3>
                      </div>
                      <p>{component.meta.description}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}


