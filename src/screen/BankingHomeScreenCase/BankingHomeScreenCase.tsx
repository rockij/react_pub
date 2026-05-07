import React from 'react';
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Copy,
  EllipsisVertical,
  ShieldCheck,
  Sparkles,
  WalletCards,
  X,
} from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { Swipe } from '../../components/Swipe/Swipe';
import '../../assets/css/screen/banking-home-screen.css';

const quickMenus = [
  { title: '전체계좌', icon: WalletCards, accent: 'blue' },
  { title: '모임지갑', icon: Sparkles, accent: 'mint' },
  { title: '영하나', icon: ShieldCheck, accent: 'sky' },
  { title: '하나머니', icon: Sparkles, accent: 'gold' },
  { title: '여행로그', icon: WalletCards, accent: 'indigo' },
  { title: '하나플레이', icon: ShieldCheck, accent: 'rose' },
  { title: '충전하기', icon: Bell, accent: 'orange' },
] as const;

const accountSlides = [
  {
    id: 'account-salary',
    eyebrow: '입출금',
    title: '급여하나 통장',
    accountNumber: '하나은행 198-0502739-10042',
    balance: '15,800,300원',
  },
  {
    id: 'account-living',
    eyebrow: '생활비',
    title: '세이프 생활 통장',
    accountNumber: '하나은행 312-1028471-99311',
    balance: '2,430,000원',
  },
  {
    id: 'account-saving',
    eyebrow: '저축',
    title: '하이 세이브 적금',
    accountNumber: '하나은행 512-8842013-22019',
    balance: '28,900,000원',
  },
] as const;

export function BankingHomeScreenCase() {
  const [selectedAccountIndex, setSelectedAccountIndex] = React.useState(0);
  const [swipeApi, setSwipeApi] = React.useState<{
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: () => boolean;
    canScrollNext: () => boolean;
  } | null>(null);

  return (
    <section className="banking-home-screen" aria-label="모바일 뱅킹 홈 화면">
      <div className="banking-home-screen__device">
        <div className="banking-home-screen__chip-row">
          <span className="banking-home-screen__chip banking-home-screen__chip--active">혜택</span>
          <div className="banking-home-screen__chip-stack">
            <span className="banking-home-screen__chip">간편</span>
            <span className="banking-home-screen__chip">검색</span>
            <span className="banking-home-screen__chip">알림</span>
          </div>
        </div>

        <div className="banking-home-screen__banner">
          <div className="banking-home-screen__banner-copy">
            <Bell size={16} />
            <span>VIP 쿠폰함이 열려 있어요</span>
          </div>
          <button type="button" aria-label="Close banner">
            <X size={14} strokeWidth={2.2} />
          </button>
        </div>

        <div className="banking-home-screen__account-swipe">
          <Swipe
            ariaLabel="계좌 카드 스와이프"
            className="banking-home-screen__account-carousel"
            slides={accountSlides.map(account => ({
              id: account.id,
              content: (
                <article className="banking-home-screen__account-card">
                  <div className="banking-home-screen__account-head">
                    <div>
                      <p className="banking-home-screen__eyebrow">{account.eyebrow}</p>
                      <h3>{account.title}</h3>
                      <p className="banking-home-screen__account-meta">
                        {account.accountNumber} <Copy size={13} />
                      </p>
                    </div>
                    <button type="button" aria-label="Account menu">
                      <EllipsisVertical size={18} />
                    </button>
                  </div>

                  <p className="banking-home-screen__balance">{account.balance}</p>

                  <div className="banking-home-screen__actions">
                    <Button label="받기" size="medium" variant="secondary" />
                    <Button label="보내기" size="medium" variant="primary" />
                  </div>
                </article>
              ),
            }))}
            slideGap="0px"
            showControls={false}
            showDots={false}
            options={{ align: 'start', containScroll: 'trimSnaps' }}
            onSelect={setSelectedAccountIndex}
            onApiReady={api => {
              if (!api) {
                setSwipeApi(null);
                return;
              }

              setSwipeApi({
                scrollPrev: () => api.scrollPrev(),
                scrollNext: () => api.scrollNext(),
                canScrollPrev: () => api.canScrollPrev(),
                canScrollNext: () => api.canScrollNext(),
              });
            }}
          />
        </div>

        <div className="banking-home-screen__pager" aria-label="Page status">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => swipeApi?.scrollPrev()}
            disabled={!swipeApi?.canScrollPrev()}
          >
            <ChevronLeft size={16} />
          </button>
          <span>
            {selectedAccountIndex + 1} / {accountSlides.length}
          </span>
          <button
            type="button"
            aria-label="Next"
            onClick={() => swipeApi?.scrollNext()}
            disabled={!swipeApi?.canScrollNext()}
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <button type="button" className="banking-home-screen__list-button">
          <span>전체 계좌</span>
          <ChevronRight size={18} />
        </button>

        <div className="banking-home-screen__menu-grid">
          {quickMenus.map(({ title, icon: Icon, accent }) => (
            <article key={title} className="banking-home-screen__menu-card">
              <h4>{title}</h4>
              <span className={`banking-home-screen__menu-icon banking-home-screen__menu-icon--${accent}`}>
                <Icon size={16} />
              </span>
            </article>
          ))}
        </div>

        <div className="banking-home-screen__shortcut-list">
          <button type="button" className="banking-home-screen__list-button">
            <span>ATM·영업점 출금</span>
            <ChevronRight size={18} />
          </button>
          <button type="button" className="banking-home-screen__list-button">
            <span>긴급 신고센터</span>
            <ChevronRight size={18} />
          </button>
        </div>

        <p className="banking-home-screen__footer-note">개인정보 처리방침</p>
      </div>
    </section>
  );
}
