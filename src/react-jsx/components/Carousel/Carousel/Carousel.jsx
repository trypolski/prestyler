import React, { createContext, useContext, useMemo, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const CarouselContext = createContext();

export default function Carousel({
  children,
  interval = 5000,
  controls = true,
  indicators = true,
  fade = false,
  wrap = true,
  pause = 'hover',
  className = '',
  ...props
}) {
  const [indexes, setIndexes] = useState({ prevIndex: null, activeIndex: 0 });
  const { activeIndex } = indexes;
  const count = React.Children.count(children);
  const timerRef = useRef();

  // Auto-slide logic
  useEffect(() => {
    if (interval && count > 1) {
      timerRef.current = setInterval(() => {
        setIndexes({
          prevIndex: activeIndex,
          activeIndex: (activeIndex + 1) % count,
        });
      }, interval);
      return () => clearInterval(timerRef.current);
    }
  }, [interval, count]);

  // Pause on hover
  const handleMouseEnter = () => {
    if (pause === 'hover') clearInterval(timerRef.current);
  };
  const handleMouseLeave = () => {
    if (pause === 'hover' && interval && count > 1) {
      timerRef.current = setInterval(() => {
        setIndexes({
          prevIndex: activeIndex,
          activeIndex: (activeIndex + 1) % count,
        });
      }, interval);
    }
  };

  // Navigation
  const goTo = (idx) => setIndexes({ prevIndex: activeIndex, activeIndex: idx });
  const handlePrev = () =>
    setIndexes({
      prevIndex: activeIndex,
      activeIndex: activeIndex === 0 ? (wrap ? count - 1 : 0) : activeIndex - 1,
    });
  const handleNext = () =>
    setIndexes({
      prevIndex: activeIndex,
      activeIndex: activeIndex === count - 1 ? (wrap ? 0 : activeIndex) : activeIndex + 1,
    });

  const contextValue = useMemo(
    () => ({
      activeIndex,
      prevIndex: indexes.prevIndex,
    }),
    [activeIndex]
  );

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        className={`bs-carousel bs-slide${fade ? ' bs-carousel-fade' : ''} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {indicators && (
          <div className="bs-carousel-indicators">
            {React.Children.map(children, (_, idx) => (
              <button
                type="button"
                className={idx === activeIndex ? 'bs-active' : ''}
                aria-current={idx === activeIndex}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        )}

        <div className="bs-carousel-inner">{children}</div>

        {controls && count > 1 && (
          <>
            <button
              type="button"
              className="bs-carousel-control-prev"
              onClick={handlePrev}
              aria-label="Previous"
            >
              <span className="bs-carousel-control-prev-icon" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="bs-carousel-control-next"
              onClick={handleNext}
              aria-label="Next"
            >
              <span className="bs-carousel-control-next-icon" aria-hidden="true" />
            </button>
          </>
        )}
      </div>
    </CarouselContext.Provider>
  );
}

Carousel.propTypes = {
  children: PropTypes.node.isRequired,
  interval: PropTypes.number,
  controls: PropTypes.bool,
  indicators: PropTypes.bool,
  fade: PropTypes.bool,
  wrap: PropTypes.bool,
  pause: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['hover'])]),
  className: PropTypes.string,
};

export const useCarousel = () => useContext(CarouselContext);
