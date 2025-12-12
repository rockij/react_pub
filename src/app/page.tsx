export default function Home() {
  const storybookUrl =
    process.env.NEXT_PUBLIC_STORYBOOK_URL ??
    (process.env.NODE_ENV === 'production' ? '/storybook/' : 'http://localhost:6006');

  return (
    <main className="survey-main">
      {/* Hero 섹션 */}
      <section className="section section--hero">
        <div className="section__inner hero">
          <div className="hero__bg">
            <img src="images/hero-photo.jpg" alt="People working together" />
          </div>

          <div className="hero__content">
            <div className="hero__badge-pill">
              <span className="pill pill--outline">Let’s begin!</span>
            </div>

            <div className="hero__eyebrow">Lovinstein Inc.</div>

            <h1 className="hero__title">
              <span>Lead</span>
              <br />
              <span>Generation Survey</span>
            </h1>

            <div className="hero__subtitle">We value your time and insights</div>
          </div>
        </div>
      </section>

      {/* Intro / 구조 / 안내 섹션 */}
      <section className="section section--info">
        <div className="section__inner info-grid">
          {/* Intro */}
          <article className="info-block">
            <div className="info-block__icon-circle">
              <span className="info-block__step-number">01</span>
            </div>
            <header className="info-block__header">
              <p className="info-block__eyebrow">Introduction</p>
              <p className="info-block__text">
                Feedback is integral to our growth. We are dedicated to understanding your needs and
                providing you with the best products.
              </p>
            </header>
          </article>

          {/* Structure */}
          <article className="info-block">
            <div className="info-block__icon-circle">
              <span className="info-block__step-number">02</span>
            </div>
            <header className="info-block__header">
              <p className="info-block__eyebrow">Structure</p>
              <p className="info-block__text">
                This survey is comprised of multiple-choice questions. It will take a maximum of ten
                minutes to complete.
              </p>
            </header>
          </article>

          {/* Reminders */}
          <article className="info-block">
            <div className="info-block__icon-circle">
              <span className="info-block__step-number">03</span>
            </div>
            <header className="info-block__header">
              <p className="info-block__eyebrow">Reminders</p>
              <p className="info-block__text">
                Please complete this within 72 hours. You are allowed to retake it anytime within
                that period. After that, you will get a confirmation of receipt from our team.
              </p>
            </header>
          </article>

          {/* 큰 타이틀 “Before we start” */}
          <div className="info-intro">
            <h2 className="info-intro__title">Before we start</h2>
            <hr className="info-intro__divider" />
          </div>
        </div>
      </section>

      {/* Section 1 : Starting out */}
      <section className="section section--section1">
        <div className="section__inner section-intro">
          <p className="section-intro__eyebrow">Section 1</p>
          <h2 className="section-intro__title">Starting out</h2>

          <button className="pill pill--solid section-intro__cta" type="button">
            START
          </button>

          <div className="section-intro__image">
            <img src="images/section1-illustration.png" alt="" />
          </div>
        </div>
      </section>

      {/* Question 1 */}
      <section className="section section--question section--question1">
        <div className="section__inner question">
          <header className="question__header">
            <p className="question__eyebrow">Question # 1</p>
            <h2 className="question__title">
              What is the primary reason you’re interested in our services?
            </h2>
          </header>

          <div className="question__widget">
            <iframe src="canva-embed/q1.html" title="Question 1 poll" loading="lazy"></iframe>
          </div>

          <aside className="question-tip">
            <div className="question-tip__body">
              <strong>Canva tip: </strong>
              Select the poll or quiz to customize it, or go to the <strong>Elements</strong> tab
              for more options!
            </div>
          </aside>

          <button className="pill pill--solid question__next" type="button">
            NEXT
          </button>
        </div>
      </section>

      {/* Question 2 */}
      <section className="section section--question section--question2">
        <div className="section__inner question">
          <header className="question__header">
            <p className="question__eyebrow">Question # 2</p>
            <h2 className="question__title">How did you hear about our company?</h2>
          </header>

          <div className="question__widget">
            <iframe src="canva-embed/q2.html" title="Question 2 poll" loading="lazy"></iframe>
          </div>

          <button className="pill pill--solid question__next" type="button">
            NEXT
          </button>
        </div>
      </section>

      {/* Section 2 : Your purchases */}
      <section className="section section--section2">
        <div className="section__inner section-intro">
          <p className="section-intro__eyebrow">Section 2</p>
          <h2 className="section-intro__title">Your purchases</h2>

          <button className="pill pill--solid section-intro__cta" type="button">
            START
          </button>

          <div className="section-intro__image">
            <img src="images/section2-illustration.png" alt="" />
          </div>
        </div>
      </section>

      {/* Question 3 */}
      <section className="section section--question section--question3">
        <div className="section__inner question">
          <header className="question__header">
            <p className="question__eyebrow">Question # 3</p>
            <h2 className="question__title">
              Which feature of our product is most important to you?
            </h2>
          </header>

          <div className="question__widget">
            <iframe src="canva-embed/q3.html" title="Question 3 poll" loading="lazy"></iframe>
          </div>

          <button className="pill pill--solid question__next" type="button">
            NEXT
          </button>
        </div>
      </section>

      {/* Question 4 */}
      <section className="section section--question section--question4">
        <div className="section__inner question">
          <header className="question__header">
            <p className="question__eyebrow">Question # 4</p>
            <h2 className="question__title">
              What budget range have you allocated for your purchase?
            </h2>
          </header>

          <div className="question__widget">
            <iframe src="canva-embed/q4.html" title="Question 4 poll" loading="lazy"></iframe>
          </div>

          <button className="pill pill--solid question__next" type="button">
            NEXT
          </button>
        </div>
      </section>

      {/* Question 5 + Finish 섹션 */}
      <section className="section section--question section--question5">
        <div className="section__inner question">
          <header className="question__header">
            <p className="question__eyebrow">Question # 5</p>
            <h2 className="question__title">
              How soon are you planning to make a purchase decision?
            </h2>
          </header>

          <div className="question__widget">
            <iframe src="canva-embed/q5.html" title="Question 5 poll" loading="lazy"></iframe>
          </div>

          <button className="pill pill--solid question__next" type="button">
            FINISH
          </button>
        </div>
      </section>

      {/* Get in touch / 마무리 */}
      <section className="section section--final">
        <div className="section__inner final">
          <p className="final__eyebrow">GET IN TOUCH</p>
          <h2 className="final__title">We appreciate your participation</h2>
          <p className="final__text">
            If there’s anything else you wish to share with our team, please email{' '}
            <a href="mailto:hello@reallygreatsite.com">hello@reallygreatsite.com</a>.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="survey-footer">
        <div className="survey-footer__inner">
          <button type="button" className="footer-link">
            약관 및 지원
          </button>
          <button type="button" className="footer-link">
            개인정보 처리방침
          </button>

          <a
            href="https://www.canva.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-pill footer-pill--primary"
            aria-label="Design made with Canva"
          >
            <span className="footer-pill__bg"></span>
            <span className="footer-pill__label">
              Made with <span className="footer-pill__logo">Canva</span>
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}
