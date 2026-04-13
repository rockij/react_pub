import React from 'react';
import { ChevronLeft, ChevronRight, Pause } from 'lucide-react';
import { Swipe } from '../../components/Swipe/Swipe';
import '../../assets/css/screen/first-trade-saving-screen.css';

const promotionSlides = [
  {
    id: 'first-trade-slide-1',
    eyebrow: 'Daldal Hana Savings',
    title: 'Savings for first-time customers!',
    accent: 'mint',
  },
  {
    id: 'first-trade-slide-2',
    eyebrow: 'Lucky Event',
    title: 'Grab your bonus-rate coupon',
    accent: 'sky',
  },
  {
    id: 'first-trade-slide-3',
    eyebrow: 'Welcome Offer',
    title: 'Check benefits for new customers',
    accent: 'peach',
  },
  {
    id: 'first-trade-slide-4',
    eyebrow: 'First Trade Exclusive',
    title: 'Monthly sweet rewards',
    accent: 'lavender',
  },
] as const;

export function FirstTradeSavingScreenCase() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [swipeApi, setSwipeApi] = React.useState<{
    scrollPrev: () => void;
    scrollNext: () => void;
  } | null>(null);

  return (
    <section className="first-trade-saving-screen" aria-label="First trade savings promotion banner">
      <div className="first-trade-saving-screen__device">
        <Swipe
          ariaLabel="Savings promotion swipe"
          className="first-trade-saving-screen__carousel"
          slides={promotionSlides.map(slide => ({
            id: slide.id,
            content: (
              <article
                className={`first-trade-saving-screen__slide first-trade-saving-screen__slide--${slide.accent}`}
              >
                <div className="first-trade-saving-screen__copy">
                  <p>{slide.eyebrow}</p>
                  <h3>{slide.title}</h3>
                </div>

                <div className="first-trade-saving-screen__cake" aria-hidden="true">
                  <span className="first-trade-saving-screen__plate" />
                  <span className="first-trade-saving-screen__cake-body" />
                  <span className="first-trade-saving-screen__cream-dot first-trade-saving-screen__cream-dot--1" />
                  <span className="first-trade-saving-screen__cream-dot first-trade-saving-screen__cream-dot--2" />
                  <span className="first-trade-saving-screen__cream-dot first-trade-saving-screen__cream-dot--3" />
                  <span className="first-trade-saving-screen__cherry first-trade-saving-screen__cherry--1" />
                  <span className="first-trade-saving-screen__cherry first-trade-saving-screen__cherry--2" />
                  <span className="first-trade-saving-screen__cherry first-trade-saving-screen__cherry--3" />
                  <span className="first-trade-saving-screen__candle" />
                </div>
              </article>
            ),
          }))}
          slideGap="0px"
          showControls={false}
          showDots={false}
          options={{ align: 'start', containScroll: 'trimSnaps', loop: true }}
          onSelect={setSelectedIndex}
          onApiReady={api => {
            if (!api) {
              setSwipeApi(null);
              return;
            }

            setSwipeApi({
              scrollPrev: () => api.scrollPrev(),
              scrollNext: () => api.scrollNext(),
            });
          }}
        />

        <div className="first-trade-saving-screen__pager" aria-label="Banner pager controls">
          <div className="first-trade-saving-screen__pager-main">
            <button type="button" aria-label="Previous banner" onClick={() => swipeApi?.scrollPrev()}>
              <ChevronLeft size={15} />
            </button>
            <span>
              {selectedIndex + 1} / {promotionSlides.length}
            </span>
            <button type="button" aria-label="Next banner" onClick={() => swipeApi?.scrollNext()}>
              <ChevronRight size={15} />
            </button>
          </div>

          <button type="button" className="first-trade-saving-screen__pause" aria-label="Pause autoplay">
            <Pause size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}

