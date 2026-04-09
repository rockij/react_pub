import React from 'react';
import { ChevronDown, CircleHelp } from 'lucide-react';
import { Button } from '../../components/Button/Button';
import { TextField } from '../../components/TextField/TextField';
import '../../assets/css/screen/id-login-screen.css';

export function IdLoginScreenCase() {
  const [userId, setUserId] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <section className="id-login-screen" aria-label="아이디 로그인 화면">
      <div className="id-login-screen__device">
        <div className="id-login-screen__body">
          <header className="id-login-screen__header">
            <h2>아이디</h2>
            <p>로그인 정보를 입력해 주세요.</p>
          </header>

          <form className="id-login-screen__form" onSubmit={event => event.preventDefault()}>
            <TextField
              id="id-login-user-id"
              className="id-login-screen__textfield"
              label="아이디"
              value={userId}
              onChange={setUserId}
              placeholder="아이디"
            />
            <TextField
              id="id-login-password"
              className="id-login-screen__textfield"
              label="비밀번호"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="비밀번호"
            />
          </form>

          <div className="id-login-screen__assist-links" aria-label="계정 찾기 링크">
            <button type="button" className="id-login-screen__text-link">
              아이디 찾기
            </button>
            <span className="id-login-screen__divider" aria-hidden="true" />
            <button type="button" className="id-login-screen__text-link">
              비밀번호 다시 설정
            </button>
          </div>

          <button type="button" className="id-login-screen__guide">
            <span>아이디 로그인 이용안내</span>
            <CircleHelp size={15} strokeWidth={2} />
          </button>
        </div>

        <footer className="id-login-screen__footer">
          <Button label="로그인" size="large" variant="primary" />
          <button type="button" className="id-login-screen__alt-login">
            <span>다른 방법으로 로그인</span>
            <ChevronDown size={18} strokeWidth={2.2} />
          </button>
        </footer>
      </div>
    </section>
  );
}
