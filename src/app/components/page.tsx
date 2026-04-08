import Link from 'next/link';
import {
  AppWindow,
  BadgeInfo,
  BellRing,
  CalendarDays,
  ChevronsUpDown,
  CircleDot,
  ExternalLink,
  LoaderCircle,
  MessageSquareWarning,
  MousePointerClick,
  Rows3,
  Rows4,
  SlidersHorizontal,
  SquareCheck,
  SquareChevronDown,
  SquareStack,
  TableProperties,
  Text,
  TextCursorInput,
  ToggleRight,
  type LucideIcon,
} from 'lucide-react';
import { getComponentCards, getStorybookUrl } from '../component-data';
import { SiteFooter } from '../site-footer';
import { ModeToggle } from '../mode-toggle';

const componentIcons: Record<string, LucideIcon> = {
  Accordion: ChevronsUpDown,
  Button: MousePointerClick,
  Card: SquareStack,
  DatePicker: CalendarDays,
  Checkbox: SquareCheck,
  Dialog: MessageSquareWarning,
  Pagination: Rows4,
  RadioGroup: CircleDot,
  Select: SquareChevronDown,
  Skeleton: LoaderCircle,
  Slider: SlidersHorizontal,
  Switch: ToggleRight,
  Table: TableProperties,
  Textarea: Text,
  Tabs: Rows3,
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
            <Link href={storybookUrl} target="_blank" rel="noopener noreferrer">
              Storybook
            </Link>
          </div>
        </nav>
      </header>

      <main className="content-wrapper">
        <section id="component-section" className="component-gallery-section">
          <div className="section-heading component-gallery-heading">
            <p className="section-eyebrow">Component Library</p>
            <h2>재사용 가능한 UI 컴포넌트 모음</h2>
            <p className="section-description">
              프로젝트에서 공통으로 사용하는 UI 컴포넌트를 한곳에 모아 정리한 페이지입니다. 각
              항목에서 기본 사례를 확인하고, 상세 페이지와 Storybook Docs로 바로 이동할 수 있게
              구성했습니다.
            </p>
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


