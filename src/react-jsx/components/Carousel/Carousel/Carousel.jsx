import React, { createContext, useContext, useMemo, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { DIRECTIONS } from '../constants';

const CarouselContext = createContext();

export default function Carousel({
  children,
  interval = 2000,
  controls = true,
  indicators = true,
  fade = false,
  wrap = true,
  pause = 'hover',
  className = '',
  ...props
}) {
  const prefix = usePrestylerPrefix();
  const [slidesData, setSlidesData] = useState({
    prevIndex: null,
    activeIndex: 0,
    direction: DIRECTIONS.FORWARD,
  });
  const { activeIndex, prevIndex, direction } = slidesData;
  const count = React.Children.count(children);
  const isPaused = useRef(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Set up interval once on mount
  useEffect(() => {
    if (!interval || count <= 1) return;
    const timer = setInterval(() => {
      if (!isPaused.current) {
        setSlidesData((prev) => ({
          direction: DIRECTIONS.FORWARD,
          prevIndex: prev.activeIndex,
          activeIndex: prev.activeIndex + 1 >= count ? 0 : prev.activeIndex + 1,
        }));
      }
    }, interval);
    return () => clearInterval(timer);
  }, [interval, count]);

  // Pause on hover
  const handleMouseEnter = () => {
    if (pause === 'hover') isPaused.current = true;
  };
  const handleMouseLeave = () => {
    if (pause === 'hover') isPaused.current = false;
  };

  // Navigation
  const goTo = (idx) => setSlidesData({ prevIndex: activeIndex, activeIndex: idx });
  const handlePrev = () =>
    setSlidesData({
      direction: DIRECTIONS.BACK,
      prevIndex: activeIndex,
      activeIndex: activeIndex - 1 < 0 ? count - 1 : activeIndex - 1,
    });
  const handleNext = () =>
    setSlidesData({
      direction: DIRECTIONS.FORWARD,
      prevIndex: activeIndex,
      activeIndex: activeIndex + 1 >= count ? 0 : activeIndex + 1,
    });

  const contextValue = useMemo(
    () => ({
      activeIndex,
      prevIndex,
      direction,
      setIsTransitioning,
    }),
    [activeIndex, prevIndex, direction]
  );

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        className={`${prefix}carousel ${prefix}slide ${fade ? `${prefix}carousel-fade` : ''} ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {indicators && (
          <div className={`${prefix}carousel-indicators`}>
            {React.Children.map(children, (_, idx) => (
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                className={idx === activeIndex ? `${prefix}active` : ''}
                aria-current={idx === activeIndex}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        )}

        <div className={`${prefix}carousel-inner`}>{children}</div>

        {controls && count > 1 && (
          <>
            <button
              type="button"
              className={`${prefix}carousel-control-prev`}
              onClick={handlePrev}
              aria-label="Previous"
              disabled={isTransitioning}
            >
              <span className={`${prefix}carousel-control-prev-icon`} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`${prefix}carousel-control-next`}
              onClick={handleNext}
              aria-label="Next"
              disabled={isTransitioning}
            >
              <span className={`${prefix}carousel-control-next-icon`} aria-hidden="true" />
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
