import React from 'react';
import Link from 'next/link';

/**
 * @description Wylie Publishing 서비스 소개 페이지
 * 사용자의 요청에 따라 기술 태그를 삭제하고 '스토리북 바로가기' 버튼을 추가했습니다.
 * CSS Nesting 구조를 유지하며 외부 파일 분리가 용이하도록 설계되었습니다.
 */

const App = () => {
  const storybookUrl =
    process.env.NEXT_PUBLIC_STORYBOOK_URL ??
    (process.env.NODE_ENV === 'production' ? '/storybook/' : 'http://localhost:6006');

  const sampleAuthors = [
    { id: 1, name: '김철수', followersCount: 1250, avatarUrl: 'https://via.placeholder.com/48' },
    { id: 2, name: '이순신', followersCount: 2840, avatarUrl: 'https://via.placeholder.com/48' },
    { id: 3, name: '박영희', followersCount: 1620, avatarUrl: 'https://via.placeholder.com/48' },
  ];
  return (
    <div className="wylie-container">
      {/* Hero Section */}
      <header className="hero-section">
        <span className="badge">Total Communication Group</span>
        <h1>Wylie Publishing</h1>
        <p>프로젝트의 완성도를 결정짓는 전문 퍼블리싱 가이드를 제안합니다.</p>
      </header>

      {/* 독립된 타이틀 영역 */}
      <div className="main-title-area">
        <h2>
          퍼블리셔 협업의 <span>핵심 가치</span>
        </h2>
        <p className="sub-desc">
          디자인과 개발 사이의 간극을 줄여 효율적인 워크플로우를 완성합니다.
        </p>
      </div>

      <main className="content-wrapper">
        {/* 장점 섹션 */}
        <section className="benefit-grid">
          <article className="benefit-card">
            <div className="icon-box">01</div>
            <div className="text-content">
              <h3>개발 생산성 증대</h3>
              <ul className="feature-list">
                <li>
                  <strong>Role Separation (역할 분리)</strong>
                  <span>
                    UI 구조 전담을 통해 개발자가 로직 구현에만 집중할 수 있는 환경을 제공합니다.
                  </span>
                </li>
              </ul>
            </div>
          </article>

          <article className="benefit-card">
            <div className="icon-box">02</div>
            <div className="text-content">
              <h3>UI 구조 품질 안정화</h3>
              <ul className="feature-list">
                <li>
                  <strong>UI Architecture (UI 설계)</strong>
                  <span>
                    시맨틱 마크업 설계로 코드의 논리적 구조를 완성하고 유지보수 비용을 절감합니다.
                  </span>
                </li>
              </ul>
            </div>
          </article>

          <article className="benefit-card">
            <div className="icon-box">03</div>
            <div className="text-content">
              <h3>접근성 및 표준 준수</h3>
              <ul className="feature-list">
                <li>
                  <strong>A11y (접근성 리스크 관리)</strong>
                  <span>
                    웹 표준 가이드를 준수하여 모든 사용자의 환경에서 차별 없는 정보를 제공합니다.
                  </span>
                </li>
              </ul>
            </div>
          </article>

          <article className="benefit-card">
            <div className="icon-box">04</div>
            <div className="text-content">
              <h3>커뮤니케이션 가교</h3>
              <ul className="feature-list">
                <li>
                  <strong>Bridge Role (중재 역할)</strong>
                  <span>
                    디자인 시스템의 기술적 해석을 통해 디자이너와 개발자 사이의 소통 비용을
                    낮춥니다.
                  </span>
                </li>
              </ul>
            </div>
          </article>
        </section>

        {/* 기술 섹션 */}
        <section className="framework-section">
          <div className="text-area">
            <h2>React & Vue 전문 퍼블리싱</h2>
            <p>프레임워크 환경에 즉시 최적화된 컴포넌트 단위의 UI 결과물을 제공합니다.</p>
            <Link
              target="_blank"
              href={storybookUrl}
              rel="noopener noreferrer"
              className="storybook-btn"
            >
              스토리북 바로가기
            </Link>
          </div>
          <div className="tech-cards">
            <div className="tech-card">
              <h4>최적화된 UI 스크립트</h4>
              <p>프레임워크 내부 인터랙션을 직접 구현하여 개발 로드를 대폭 절감합니다.</p>
            </div>
            <div className="tech-card">
              <h4>Storybook 기반 검증</h4>
              <p>독립된 컴포넌트 테스트를 통해 UI의 무결성을 사전에 보장합니다.</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="company-name">Wylie Publishing</div>
        <div className="final-msg">
          구조적 품질과 효율적 협업을 위한 최상의 퍼블리싱 파트너입니다.
        </div>
      </footer>
    </div>
  );
};

export default App;
