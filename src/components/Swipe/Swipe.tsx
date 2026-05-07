import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import '../../assets/css/component/swipe.css';

export interface SwipeSlide {
  id: string;
  content: React.ReactNode;
  ariaLabel?: string;
}

export interface SwipeProps {
  slides: SwipeSlide[];
  options?: EmblaOptionsType;
  className?: string;
  ariaLabel?: string;
  slideSize?: string;
  slideGap?: string;
  showControls?: boolean;
  showDots?: boolean;
  prevButtonLabel?: string;
  nextButtonLabel?: string;
  onSelect?: (index: number) => void;
  onApiReady?: (api: EmblaCarouselType | null) => void;
}

export function Swipe({
  slides,
  options,
  className,
  ariaLabel = 'Swipe carousel',
  slideSize = '100%',
  slideGap = '16px',
  showControls = true,
  showDots = true,
  prevButtonLabel = 'Previous slide',
  nextButtonLabel = 'Next slide',
  onSelect,
  onApiReady,
}: SwipeProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const reactId = React.useId();
  const viewportId = `${reactId}-viewport`;
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    onApiReady?.(emblaApi ?? null);

    return () => {
      onApiReady?.(null);
    };
  }, [emblaApi, onApiReady]);

  const syncState = React.useCallback(
    (api: EmblaCarouselType) => {
      const nextIndex = api.selectedScrollSnap();

      setSelectedIndex(nextIndex);
      setScrollSnaps(api.scrollSnapList());
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
      onSelect?.(nextIndex);
    },
    [onSelect]
  );

  React.useEffect(() => {
    if (!emblaApi) {
      return;
    }

    syncState(emblaApi);
    emblaApi.on('select', syncState);
    emblaApi.on('reInit', syncState);

    return () => {
      emblaApi.off('select', syncState);
      emblaApi.off('reInit', syncState);
    };
  }, [emblaApi, syncState]);

  const handlePrev = () => {
    emblaApi?.scrollPrev();
  };

  const handleNext = () => {
    emblaApi?.scrollNext();
  };

  const handleDotClick = (index: number) => {
    emblaApi?.scrollTo(index);
  };

  const rootClassName = ['swipe', className].filter(Boolean).join(' ');
  const canNavigate = slides.length > 1;

  return (
    <section
      className={rootClassName}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      style={
        {
          '--swipe-slide-size': slideSize,
          '--swipe-slide-gap': slideGap,
        } as React.CSSProperties
      }
    >
      <div className="swipe__viewport" id={viewportId} ref={emblaRef}>
        <div className="swipe__container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="swipe__slide"
              role="group"
              aria-roledescription="slide"
              aria-label={slide.ariaLabel ?? `${index + 1} of ${slides.length}`}
            >
              <div className="swipe__slide-inner">{slide.content}</div>
            </div>
          ))}
        </div>
      </div>

      {showControls && canNavigate ? (
        <div className="swipe__controls">
          <button
            type="button"
            className="swipe__control swipe__control--prev"
            aria-controls={viewportId}
            aria-label={prevButtonLabel}
            onClick={handlePrev}
            disabled={!options?.loop && !canScrollPrev}
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            type="button"
            className="swipe__control swipe__control--next"
            aria-controls={viewportId}
            aria-label={nextButtonLabel}
            onClick={handleNext}
            disabled={!options?.loop && !canScrollNext}
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : null}

      {showDots && canNavigate ? (
        <div className="swipe__dots" role="tablist" aria-label="Choose slide">
          {scrollSnaps.map((_, index) => (
            <button
              key={`${reactId}-dot-${index}`}
              type="button"
              role="tab"
              aria-selected={selectedIndex === index}
              aria-label={`Go to slide ${index + 1}`}
              className={selectedIndex === index ? 'swipe__dot is-active' : 'swipe__dot'}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
