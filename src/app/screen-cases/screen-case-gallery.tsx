'use client';

import React from 'react';
import { Dialog } from '../../components/Dialog/Dialog';
import { Card } from '../../components/Card/Card';
import { BankingHomeScreenCase } from '../../screen/BankingHomeScreenCase/BankingHomeScreenCase';
import type { ScreenCaseItem } from './data';

type ScreenCaseGalleryProps = {
  items: ScreenCaseItem[];
};

const previewMap: Record<string, () => React.ReactNode> = {
  'banking-home': () => <BankingHomeScreenCase />,
};

const referenceImageMap: Record<string, string> = {
  'banking-home': '/images/screen-cases/banking-home-reference.png',
};

export function ScreenCaseGallery({ items }: ScreenCaseGalleryProps) {
  const [activeSlug, setActiveSlug] = React.useState<string | null>(null);

  const activeItem = items.find(item => item.slug === activeSlug) ?? null;
  const activePreview = activeItem && previewMap[activeItem.slug] ? previewMap[activeItem.slug]() : null;
  const activeReferenceImage = activeItem ? referenceImageMap[activeItem.slug] : null;

  return (
    <>
      <div className="screen-cases-grid">
        {items.map(item => {
          const hasPreview = item.slug in previewMap;

          return (
            <button
              key={item.slug}
              type="button"
              className="screen-case-card screen-case-launcher"
              onClick={() => setActiveSlug(item.slug)}
            >
              <div className="screen-case-top">
                <span className="screen-case-category">{item.category}</span>
                <span
                  className={item.status === '완료' ? 'screen-case-status is-ready' : 'screen-case-status'}
                >
                  {item.status}
                </span>
              </div>

              <div className="screen-case-launcher-preview" aria-hidden="true">
                {hasPreview ? (
                  <div className="screen-case-launcher-preview-frame">{previewMap[item.slug]()}</div>
                ) : (
                  <div className="screen-case-launcher-preview-placeholder">
                    <strong>{item.status === '완료' ? '미리보기 가능' : '미리보기 준비중'}</strong>
                    <span>{item.components.slice(0, 3).join(' · ')}</span>
                  </div>
                )}
              </div>

              <h3>{item.title}</h3>
              <p>{item.summary}</p>

              <div className="screen-case-component-block">
                <strong>사용 컴포넌트</strong>
                <ul className="screen-case-chip-list">
                  {item.components.map(component => (
                    <li key={component}>{component}</li>
                  ))}
                </ul>
              </div>
            </button>
          );
        })}
      </div>

      <Dialog
        isOpen={activeItem !== null}
        onRequestClose={() => setActiveSlug(null)}
        title={activeItem?.title}
        variant="dialog"
        contentClassName="screen-case-modal"
      >
        {activeItem ? (
          <div className="screen-case-dialog-body">
            <div className="screen-case-dialog-header">
              <div className="screen-case-top">
                <span className="screen-case-category">{activeItem.category}</span>
                <span
                  className={
                    activeItem.status === '완료' ? 'screen-case-status is-ready' : 'screen-case-status'
                  }
                >
                  {activeItem.status}
                </span>
              </div>
              <p>{activeItem.summary}</p>
            </div>

            <div className="screen-case-dialog-grid">
              {activeReferenceImage ? (
                <Card title="레퍼런스 이미지" imageUrl={activeReferenceImage}>
                  이 화면 케이스에 연결된 기준 이미지입니다.
                </Card>
              ) : (
                <div className="screen-case-dialog-panel screen-case-dialog-panel--placeholder">
                  <p className="section-eyebrow">Reference</p>
                  <h3>레퍼런스 이미지가 아직 없습니다</h3>
                  <p>케이스는 먼저 등록해 두고, 기준 이미지는 나중에 연결할 수 있습니다.</p>
                </div>
              )}

              <div className="screen-case-dialog-panel">
                <div className="screen-case-preview-copy">
                  <p className="section-eyebrow">Live Preview</p>
                  <h3>{activePreview ? '실제 조합 미리보기' : '미리보기 준비중'}</h3>
                  <p>
                    {activePreview
                      ? '이 화면은 재사용 가능한 UI 조각으로 구성되어 있으며, 팝업 안에서 실제 형태를 확인할 수 있습니다.'
                      : '화면 정의는 등록되어 있지만 실제 조합 미리보기는 아직 구현되지 않았습니다.'}
                  </p>
                </div>

                {activePreview ? (
                  <div className="screen-case-dialog-live-preview">{activePreview}</div>
                ) : (
                  <div className="screen-case-dialog-empty-state">
                    <strong>예정 컴포넌트</strong>
                    <ul className="screen-case-chip-list">
                      {activeItem.components.map(component => (
                        <li key={component}>{component}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </Dialog>
    </>
  );
}
