import React from 'react';
import { Check } from 'lucide-react';
import { Accordion } from '../../components/Accordion/Accordion';
import { Button } from '../../components/Button/Button';
import '../../assets/css/screen/insurance-signup-complete-screen.css';

const contractDetails = [
  { label: '계약자', value: '강하나' },
  { label: '주피보험자', value: '홍길동' },
  { label: '이메일', value: 'qwer@qwer.com' },
  { label: '상품명', value: '(무)흥미잇NH부모님안전보험2404' },
  { label: '보험료', value: '9,500원' },
  { label: '보험기간(납입기간)', value: '1년만기(1년납)' },
  { label: '출금계좌번호', value: '123-123456-12345' },
] as const;

export function InsuranceSignupCompleteScreenCase() {
  const accordionItems = [
    {
      id: 'insurance-signup-complete-details',
      title: '상세정보 닫기',
      content: (
        <dl className="insurance-signup-complete-screen__detail-list">
          {contractDetails.map(item => (
            <div key={item.label} className="insurance-signup-complete-screen__detail-row">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      ),
    },
  ];

  return (
    <section className="insurance-signup-complete-screen" aria-label="보험 가입 완료 화면">
      <div className="insurance-signup-complete-screen__device">
        <div className="insurance-signup-complete-screen__body">
          <div className="insurance-signup-complete-screen__result-icon" aria-hidden="true">
            <Check size={34} strokeWidth={2.6} />
          </div>

          <h2>상품을 가입했어요</h2>

          <div className="insurance-signup-complete-screen__divider" />

          <Accordion
            items={accordionItems}
            mode="single"
            defaultOpenId="insurance-signup-complete-details"
            ariaLabel="보험 가입 상세정보"
            className="insurance-signup-complete-screen__accordion"
          />
        </div>

        <footer className="insurance-signup-complete-screen__footer">
          <Button label="확인" size="large" variant="primary" />
        </footer>
      </div>
    </section>
  );
}
