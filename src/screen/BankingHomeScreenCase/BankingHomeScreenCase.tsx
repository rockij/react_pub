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

export function BankingHomeScreenCase() {
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
            <span>VIP 쿠폰팩이 도착했어요.</span>
          </div>
          <button type="button" aria-label="Close banner">
            <X size={14} strokeWidth={2.2} />
          </button>
        </div>

        <article className="banking-home-screen__account-card">
          <div className="banking-home-screen__account-head">
            <div>
              <p className="banking-home-screen__eyebrow">입출금</p>
              <h3>급여하나 통장</h3>
              <p className="banking-home-screen__account-meta">
                하나은행 198-0502739-10042 <Copy size={13} />
              </p>
            </div>
            <button type="button" aria-label="Account menu">
              <EllipsisVertical size={18} />
            </button>
          </div>

          <p className="banking-home-screen__balance">15,800,300원</p>

          <div className="banking-home-screen__actions">
            <Button label="받기" size="medium" variant="secondary" />
            <Button label="보내기" size="medium" variant="primary" />
          </div>
        </article>

        <div className="banking-home-screen__pager" aria-label="Page status">
          <button type="button" aria-label="Previous">
            <ChevronLeft size={16} />
          </button>
          <span>4 / 5</span>
          <button type="button" aria-label="Next">
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
