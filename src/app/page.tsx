import Image from 'next/image';
import Link from 'next/link';
import section2 from '../assets/images/section2-bg.jpg';
import section3 from '../assets/images/section3-bg.jpg';

export default function Home() {
  const storybookUrl =
    process.env.NEXT_PUBLIC_STORYBOOK_URL ??
    (process.env.NODE_ENV === 'production' ? '/storybook/' : 'http://localhost:6006');

  return (
    <main className="survey-main">
      <section className="survey-hero">
        <div className="inner">
          <p className="brand">Total Communication Group</p>
          <h1 className="titles">
            wylie
            <span className="highlight">퍼블리셔와 같이 협업했을 때의 장점</span>
          </h1>
          <p className="subtitle">We value your time and insights</p>
          <a href="#survey-info" className="cta">
            LET’S BEGIN!
          </a>
        </div>
      </section>
      <section id="survey-info" className="survey-info">
        <div className="inner">
          <Image src={section2} alt="" className="img" />
          <div className="texts">
            <h2>디자인과 개발을 연결하는 핵심 엔지니어</h2>
            <ol>
              <li>
                <div>
                  <p className="tit">역할 분리가 명확해져 개발 생산성 증대</p>
                  퍼블리셔는 레이아웃·스타일·반응형·접근성을 전담하고 개발자는 비즈니스 로직·상태
                  관리·API 연동에 집중하여 병렬 작업으로 전체 일정 단축되는 효과를 가져옵니다.
                </div>
              </li>
              <li>
                <div>
                  <p className="tit">UI 구조 품질이 초기부터 안정화</p>
                  시맨틱 마크업, 레이아웃 구조가 초기 설계 단계에서 정리하여 div 남발, 중첩 과다,
                  CSS 충돌 방지 가능하여 결과적으로 유지보수 비용이 줄어듭니다.
                </div>
              </li>
              <li>
                <div>
                  <p className="tit">접근성(A11y)·표준 대응 리스크 감소</p>
                  접근성과 표준 대응은 개발과 병행할수록 개발자의 집중도를 분산시키고, 핵심 로직
                  구현의 속도를 떨어뜨립니다.
                  <br />
                  우리는 접근성과 웹 표준을 개발자의 부가 업무가 아닌, 퍼블리셔의 전문 영역으로
                  봅니다.
                  <br />
                  퍼블리셔는 접근성·표준 리스크를 선제적으로 관리해 개발자의 집중도를 보호합니다.
                </div>
              </li>
              <li>
                <div>
                  <p className="tit">디자이너–개발자 간 커뮤니케이션 완충 역할</p>
                  퍼블리셔는 디자인 의도를 기술 언어로 번역하는 역할을 수행합니다.
                  <br />
                  퍼블리셔가 디자인 의도를 정확히 구현하면 개발자는 설계 의도를 오해 없이 이해하여
                  개발에 집중할 수 있습니다.
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="survey-info -storybook">
        <div className="inner">
          <div className="texts">
            <h2>
              React, Vue
              <br />
              전문 퍼블리싱
            </h2>
            해당 환경에서 UI스크립트 작업이 가능하여 개발자의 로직 영역을 침범하지 않고, UI 동작을
            완결하는 것이 가능합니다.
            <br />
            <br />
            퍼블리셔가 컴포넌트를 먼저 설계하면,
            <br />
            개발자는 UI 고민 없이 로직에만 집중할 수 있습니다.
            <br />
            <br />
            storybook으로 컴포넌트를 설계·검증하여 개발 생산성을 극대화합니다.
            <br />
            <Link target="_blank" href={storybookUrl} rel="noopener noreferrer" className="cta">
              storybook 보러가기
            </Link>
          </div>
          <Image src={section3} alt="" className="img" />
        </div>
      </section>
      <footer>ⓒ wylie. All rights reserved.</footer>
    </main>
  );
}
