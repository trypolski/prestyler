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
  pauseOnHover = true,
  className = '',
  defaultDirection = DIRECTIONS.FORWARD,
  ...props
}) {
  const prefix = usePrestylerPrefix();
  const [childrenData, setChildrenData] = useState({ childrenProps: [], childrenCount: 0 });
  const [slidesData, setSlidesData] = useState({
    prevIndex: null,
    activeIndex: 0,
    direction: DIRECTIONS.FORWARD,
  });
  const { childrenCount, childrenProps } = childrenData;
  const { activeIndex, prevIndex, direction } = slidesData;
  const isPaused = useRef(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setChildrenData({
      childrenProps: React.Children.map(children, (childrenElement) => {
        if (!React.isValidElement(childrenElement)) return {};
        return childrenElement.props;
      }),
      childrenCount: React.Children.count(children),
    });
  }, [children]);

  function setSlide(moveBack, moveToIndex) {
    if (moveToIndex === activeIndex) return;
    let nextDirection = defaultDirection;
    let nextActiveIndex = (activeIndex + 1) % childrenCount;
    if (moveBack) {
      nextDirection =
        defaultDirection === DIRECTIONS.FORWARD ? DIRECTIONS.BACK : DIRECTIONS.FORWARD;
      nextActiveIndex = activeIndex === 0 ? childrenCount - 1 : activeIndex - 1;
    }
    if (moveToIndex !== undefined) {
      nextDirection = moveToIndex < activeIndex ? DIRECTIONS.BACK : DIRECTIONS.FORWARD;
      nextActiveIndex = moveToIndex;
    }
    setSlidesData({
      direction: nextDirection,
      prevIndex: activeIndex,
      activeIndex: nextActiveIndex,
    });
  }

  useEffect(() => {
    if (!interval || childrenCount <= 1) return;
    const timer = setInterval(() => {
      if (!isPaused.current) {
        setSlide();
      }
    }, interval);
    return () => clearInterval(timer); // eslint-disable-line consistent-return
  }, [interval, childrenCount, activeIndex]);

  function handleMouseHover(isHovered) {
    if (pauseOnHover) isPaused.current = isHovered;
  }

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
        onMouseEnter={() => handleMouseHover(true)}
        onMouseLeave={() => handleMouseHover(false)}
        {...props}
      >
        {indicators && childrenCount > 0 && (
          <div className={`${prefix}carousel-indicators`}>
            {React.Children.map(children, (_, idx) => {
              const childrenProp = childrenProps[idx];
              const ariaLabel = childrenProp['aria-label'] || `Slide ${idx + 1}`;
              const isActiveIndicator = idx === activeIndex;
              return (
                <button
                  type="button"
                  className={isActiveIndicator ? `${prefix}active` : ''}
                  data-bs-target="#carouselExampleIndicators"
                  aria-current={isActiveIndicator}
                  aria-label={ariaLabel}
                  onClick={() => setSlide(false, idx)}
                  disabled={isTransitioning}
                />
              );
            })}
          </div>
        )}

        <div className={`${prefix}carousel-inner`}>{children}</div>

        {controls && childrenCount > 1 && (
          <>
            <button
              type="button"
              className={`${prefix}carousel-control-prev`}
              onClick={() => setSlide(true)}
              aria-label="Previous"
              disabled={isTransitioning}
            >
              <span className={`${prefix}carousel-control-prev-icon`} aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`${prefix}carousel-control-next`}
              onClick={() => setSlide()}
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
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
  defaultDirection: PropTypes.oneOf(Object.values(DIRECTIONS)),
};

export const useCarousel = () => useContext(CarouselContext);
