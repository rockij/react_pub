'use client';

import Image from 'next/image';
import React from 'react';
import { Dialog } from '../../components/Dialog/DialogIcon';
import bankingHomeThumbnail from '../../assets/images/temp/001.png';
import findIdThumbnail from '../../assets/images/temp/002.png';
import consultInquiryThumbnail from '../../assets/images/temp/003.png';
import signupAgreementThumbnail from '../../assets/images/temp/004.png';
import noticeBottomsheetThumbnail from '../../assets/images/temp/005.png';
import insuranceSignupCompleteThumbnail from '../../assets/images/temp/006.png';
import signupPeriodBottomsheetThumbnail from '../../assets/images/temp/008.png';
import portfolioReturnThumbnail from '../../assets/images/temp/009.png';
import firstTradeSavingThumbnail from '../../assets/images/temp/010.png';
import { BankingHomeScreenCase } from '../../screen/BankingHomeScreenCase/BankingHomeScreenCase';
import { ConsultInquiryScreenCase } from '../../screen/ConsultInquiryScreenCase/ConsultInquiryScreenCase';
import { FindIdScreenCase } from '../../screen/FindIdScreenCase/FindIdScreenCase';
import { FirstTradeSavingScreenCase } from '../../screen/FirstTradeSavingScreenCase/FirstTradeSavingScreenCase';
import { IdLoginScreenCase } from '../../screen/IdLoginScreenCase/IdLoginScreenCase';
import { InsuranceSignupCompleteScreenCase } from '../../screen/InsuranceSignupCompleteScreenCase/InsuranceSignupCompleteScreenCase';
import { NoticeBottomsheetScreenCase } from '../../screen/NoticeBottomsheetScreenCase/NoticeBottomsheetScreenCase';
import { PortfolioReturnScreenCase } from '../../screen/PortfolioReturnScreenCase/PortfolioReturnScreenCase';
import { SignupPeriodBottomsheetScreenCase } from '../../screen/SignupPeriodBottomsheetScreenCase/SignupPeriodBottomsheetScreenCase';
import { SignupAgreementScreenCase } from '../../screen/SignupAgreementScreenCase/SignupAgreementScreenCase';
import type { ScreenCaseItem } from './data';

type ScreenCaseGalleryProps = {
  items: ScreenCaseItem[];
};

const previewMap: Record<string, () => React.ReactNode> = {
  'banking-home': () => <BankingHomeScreenCase />,
  'consult-inquiry': () => <ConsultInquiryScreenCase />,
  'id-login': () => <IdLoginScreenCase />,
  'find-id': () => <FindIdScreenCase />,
  'first-trade-saving': () => <FirstTradeSavingScreenCase />,
  'signup-agreement': () => <SignupAgreementScreenCase />,
  'insurance-signup-complete': () => <InsuranceSignupCompleteScreenCase />,
  'portfolio-return': () => <PortfolioReturnScreenCase />,
};

const thumbnailMap = {
  'banking-home': {
    src: bankingHomeThumbnail,
    alt: 'Banking Home screen case thumbnail',
    width: 392,
    height: 730,
  },
  'consult-inquiry': {
    src: consultInquiryThumbnail,
    alt: 'Consult inquiry screen case thumbnail',
    width: 392,
    height: 730,
  },
  'id-login': {
    src: '/images/screen-cases/id-login-thumbnail.svg',
    alt: 'ID login screen case thumbnail',
    width: 392,
    height: 730,
  },
  'find-id': {
    src: findIdThumbnail,
    alt: 'Find ID screen case thumbnail',
    width: 392,
    height: 730,
  },
  'signup-agreement': {
    src: signupAgreementThumbnail,
    alt: 'Signup agreement screen case thumbnail',
    width: 392,
    height: 730,
  },
  'notice-bottomsheet': {
    src: noticeBottomsheetThumbnail,
    alt: 'Notice bottomsheet screen case thumbnail',
    width: 392,
    height: 730,
  },
  'insurance-signup-complete': {
    src: insuranceSignupCompleteThumbnail,
    alt: 'Insurance signup complete screen case thumbnail',
    width: 392,
    height: 730,
  },
  'signup-period-bottomsheet': {
    src: signupPeriodBottomsheetThumbnail,
    alt: 'Signup period bottomsheet screen case thumbnail',
    width: 392,
    height: 730,
  },
  'portfolio-return': {
    src: portfolioReturnThumbnail,
    alt: 'Portfolio return screen case thumbnail',
    width: 392,
    height: 730,
  },
  'first-trade-saving': {
    src: firstTradeSavingThumbnail,
    alt: 'First trade saving screen case thumbnail',
    width: 392,
    height: 730,
  },
} as const;

export function ScreenCaseGallery({ items }: ScreenCaseGalleryProps) {
  const [activeSlug, setActiveSlug] = React.useState<string | null>(null);

  const activeItem = items.find(item => item.slug === activeSlug) ?? null;
  const isDirectBottomsheetCase =
    activeItem?.slug === 'notice-bottomsheet' || activeItem?.slug === 'signup-period-bottomsheet';

  const activePreview =
    activeItem?.slug === 'notice-bottomsheet' ? (
      <NoticeBottomsheetScreenCase onDismiss={() => setActiveSlug(null)} />
    ) : activeItem?.slug === 'signup-period-bottomsheet' ? (
      <SignupPeriodBottomsheetScreenCase onDismiss={() => setActiveSlug(null)} />
    ) : activeItem && previewMap[activeItem.slug] ? (
      previewMap[activeItem.slug]()
    ) : null;

  const openPreview = (slug: string) => {
    setActiveSlug(slug);
  };

  const handleCardKeyDown = (event: React.KeyboardEvent<HTMLElement>, slug: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPreview(slug);
    }
  };

  return (
    <>
      <div className="screen-cases-grid">
        {items.map(item => {
          const thumbnail = thumbnailMap[item.slug as keyof typeof thumbnailMap];
          const isReady = item.status === '완료';

          return (
            <article
              key={item.slug}
              className="screen-case-card screen-case-launcher"
              role="button"
              tabIndex={0}
              onClick={() => openPreview(item.slug)}
              onKeyDown={event => handleCardKeyDown(event, item.slug)}
              aria-label={`${item.title} 미리보기 열기`}
            >
              <div className="screen-case-launcher-preview" aria-hidden="true">
                {thumbnail ? (
                  <div
                    className={[
                      'screen-case-launcher-thumbnail',
                      item.slug === 'first-trade-saving'
                        ? 'screen-case-launcher-thumbnail--centered'
                        : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <Image
                      src={thumbnail.src}
                      alt={thumbnail.alt}
                      width={thumbnail.width}
                      height={thumbnail.height}
                      className={[
                        'screen-case-launcher-thumbnail-image',
                        item.slug === 'first-trade-saving'
                          ? 'screen-case-launcher-thumbnail-image--no-fit'
                          : '',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                    />
                  </div>
                ) : item.slug in previewMap ? (
                  <div className="screen-case-launcher-preview-frame">{previewMap[item.slug]()}</div>
                ) : (
                  <div className="screen-case-launcher-preview-placeholder">
                    <strong>{isReady ? '미리보기 가능' : '미리보기 준비중'}</strong>
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
            </article>
          );
        })}
      </div>

      {isDirectBottomsheetCase ? (
        activePreview
      ) : (
        <Dialog
          isOpen={activeItem !== null}
          onRequestClose={() => setActiveSlug(null)}
          title="미리보기 상세"
          variant="dialog"
          contentClassName="screen-case-modal"
        >
          {activeItem ? (
            <div className="screen-case-dialog-live-preview screen-case-dialog-live-preview--only">
              {activePreview}
            </div>
          ) : null}
        </Dialog>
      )}
    </>
  );
}
