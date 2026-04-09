import React from 'react';
import { ChevronLeft, CircleHelp } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { TextField } from '../../components/TextField/TextField';
import '../../assets/css/screen/find-id-screen.css';

export function FindIdScreenCase() {
  const [accountNumber] = React.useState('11059457982407');
  const [accountPassword] = React.useState('●●●●');
  const [birthDate] = React.useState('970925');

  return (
    <section className="find-id-screen" aria-label="아이디 찾기 화면">
      <div className="find-id-screen__device">
        <header className="find-id-screen__header">
          <button type="button" className="find-id-screen__back" aria-label="이전으로 이동">
            <ChevronLeft size={22} strokeWidth={2.2} />
          </button>
          <h2>아이디 찾기</h2>
          <span className="find-id-screen__header-spacer" aria-hidden="true" />
        </header>

        <div className="find-id-screen__body">
          <div className="find-id-screen__intro">
            <strong>아래 정보를 입력해 주세요</strong>
          </div>

          <form className="find-id-screen__form" onSubmit={event => event.preventDefault()}>
            <div className="find-id-screen__field">
              <label htmlFor="find-id-account-number" className="find-id-screen__label">
                계좌번호
                <CircleHelp size={16} strokeWidth={2.1} />
              </label>
              <TextField
                id="find-id-account-number"
                className="find-id-screen__textfield"
                label="계좌번호"
                value={accountNumber}
                onChange={() => {}}
              />
            </div>

            <div className="find-id-screen__field">
              <label htmlFor="find-id-account-password" className="find-id-screen__label">
                계좌비밀번호
              </label>
              <TextField
                id="find-id-account-password"
                className="find-id-screen__textfield"
                label="계좌비밀번호"
                value={accountPassword}
                onChange={() => {}}
              />
            </div>

            <div className="find-id-screen__field">
              <label htmlFor="find-id-birth-date" className="find-id-screen__label">
                생년월일
              </label>
              <TextField
                id="find-id-birth-date"
                className="find-id-screen__textfield"
                label="생년월일"
                value={birthDate}
                onChange={() => {}}
              />
            </div>
          </form>
        </div>

        <div className="find-id-screen__footer">
          <Button label="다음" size="large" variant="primary" />
          <button type="button" className="find-id-screen__link">
            계좌비밀번호 재등록
          </button>
        </div>
      </div>
    </section>
  );
}
