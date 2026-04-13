import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import '../../assets/css/screen/signup-agreement-screen.css';

const agreementDefinitions = [
  { key: 'terms', label: '[필수] 이용약관 동의', required: true },
  { key: 'privacy', label: '[필수] 개인정보 수집 및 이용 동의', required: true },
  { key: 'age', label: '[필수] 만 14세 이상 확인', required: true },
  { key: 'marketing', label: '[선택] 혜택/마케팅 정보 수신 동의', required: false },
] as const;

type AgreementKey = (typeof agreementDefinitions)[number]['key'];
type AgreementState = Record<AgreementKey, boolean>;

const initialAgreementState: AgreementState = {
  terms: false,
  privacy: false,
  age: false,
  marketing: false,
};

export function SignupAgreementScreenCase() {
  const idPrefix = React.useId();
  const [agreements, setAgreements] = React.useState<AgreementState>(initialAgreementState);

  const isAllChecked = agreementDefinitions.every(item => agreements[item.key]);
  const isRequiredChecked = agreementDefinitions
    .filter(item => item.required)
    .every(item => agreements[item.key]);

  const handleToggleAll = (next: boolean) => {
    setAgreements({
      terms: next,
      privacy: next,
      age: next,
      marketing: next,
    });
  };

  const handleToggleItem = (key: AgreementKey, next: boolean) => {
    setAgreements(prev => ({
      ...prev,
      [key]: next,
    }));
  };

  return (
    <section className="signup-agreement-screen" aria-label="회원가입 전체동의 화면">
      <div className="signup-agreement-screen__device">
        <div className="signup-agreement-screen__body">
          <header className="signup-agreement-screen__header">
            <h2>서비스 이용을 위해 약관에 동의해 주세요</h2>
          </header>

          <div className="signup-agreement-screen__summary">
            <strong>약관 전체 동의</strong>
            <span>필수 항목을 모두 동의해야 가입을 진행할 수 있습니다.</span>
          </div>

          <form className="signup-agreement-screen__form" onSubmit={event => event.preventDefault()}>
            <div className="signup-agreement-screen__all-row">
              <Checkbox
                id={`${idPrefix}-signup-agreement-all`}
                className="signup-agreement-screen__checkbox signup-agreement-screen__checkbox--all"
                label="전체 동의"
                size="large"
                checked={isAllChecked}
                onChange={handleToggleAll}
              />
            </div>

            <ul className="signup-agreement-screen__agreement-list">
              {agreementDefinitions.map(item => (
                <li key={item.key} className="signup-agreement-screen__agreement-item">
                  <Checkbox
                    id={`${idPrefix}-signup-agreement-${item.key}`}
                    className="signup-agreement-screen__checkbox"
                    label={item.label}
                    size="medium"
                    checked={agreements[item.key]}
                    onChange={next => handleToggleItem(item.key, next)}
                  />
                  <button
                    type="button"
                    className="signup-agreement-screen__detail-link"
                    aria-label={`${item.label} 상세 보기`}
                  >
                    <ChevronRight size={16} strokeWidth={2.2} />
                  </button>
                </li>
              ))}
            </ul>
          </form>
        </div>

        <footer className="signup-agreement-screen__footer">
          <Button label="동의하고 가입 계속" size="large" variant="primary" disabled={!isRequiredChecked} />
          <p>필수 3개 항목 동의 완료 후 다음 단계로 이동합니다.</p>
        </footer>
      </div>
    </section>
  );
}
