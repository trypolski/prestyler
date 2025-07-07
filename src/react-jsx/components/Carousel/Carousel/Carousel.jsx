import React, { createContext, useContext, useMemo, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../../utilities/utilities';
import { DIRECTIONS } from '../constants';

const CarouselContext = createContext();

export default function Carousel({
  children,
  interval = 2000,
  controls = true,
  indicators = true,
  fade = false,
  pauseOnHover = true,
  autoPlayAfterClick = false,
  className = '',
  indicatorsClassName = '',
  innerClassName = '',
  controlsPrevClassName = '',
  controlsPrevIconClassName = '',
  controlsNextClassName = '',
  controlsNextIconClassName = '',
  defaultDirection = DIRECTIONS.FORWARD,
  touch = true,
  useBsClasses = true,
  ...props
}) {
  const prefix = usePrestylerPrefix();
  const [childrenData, setChildrenData] = useState({ childrenProps: [], childrenCount: 0 });
  const [slidesData, setSlidesData] = useState({
    prevIndex: null,
    activeIndex: 0,
    direction: DIRECTIONS.FORWARD,
  });
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { childrenCount, childrenProps } = childrenData;
  const { activeIndex, prevIndex, direction } = slidesData;
  const isPaused = useRef(false);
  const onlyPlayAfterClick = useRef(autoPlayAfterClick);
  const touchStartX = useRef(null);

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
    if (onlyPlayAfterClick.current) {
      onlyPlayAfterClick.current = false;
    }
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
      if (!isPaused.current && !onlyPlayAfterClick.current) {
        setSlide();
      }
    }, childrenProps[activeIndex].interval || interval);
    return () => clearInterval(timer); // eslint-disable-line consistent-return
  }, [interval, childrenCount, activeIndex]);

  function handleMouseHover(isHovered) {
    if (pauseOnHover) isPaused.current = isHovered;
  }

  function handleTouchStart(e) {
    if (!touch) return;
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (!touch || touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        setSlide(true);
      } else {
        setSlide(false);
      }
    }
    touchStartX.current = null;
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

  const carouselFullClassName = getFullClassName(
    ['carousel', 'slide', fade ? 'carousel-fade' : ''],
    prefix,
    useBsClasses,
    className
  );

  const innerFullClassName = getFullClassName(
    'carousel-inner',
    prefix,
    useBsClasses,
    innerClassName
  );

  return (
    <CarouselContext.Provider value={contextValue}>
      <div
        className={carouselFullClassName}
        onMouseEnter={() => handleMouseHover(true)}
        onMouseLeave={() => handleMouseHover(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        {...props}
      >
        {indicators && childrenCount > 0 && (
          <div
            className={getFullClassName(
              'carousel-indicators',
              prefix,
              useBsClasses,
              indicatorsClassName
            )}
          >
            {React.Children.map(children, (_, idx) => {
              const childrenProp = childrenProps[idx];
              const ariaLabel = childrenProp['aria-label'] || `Slide ${idx + 1}`;
              const isActiveIndicator = idx === activeIndex;
              return (
                <button
                  type="button"
                  className={
                    isActiveIndicator ? getFullClassName('active', prefix, useBsClasses) : ''
                  }
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

        <div className={innerFullClassName}>{children}</div>

        {controls && childrenCount > 1 && (
          <>
            <button
              type="button"
              className={getFullClassName(
                'carousel-control-prev',
                prefix,
                useBsClasses,
                controlsPrevClassName
              )}
              onClick={() => setSlide(true)}
              aria-label="Previous"
              disabled={isTransitioning}
            >
              <span
                className={getFullClassName(
                  'carousel-control-prev-icon',
                  prefix,
                  useBsClasses,
                  controlsPrevIconClassName
                )}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className={getFullClassName(
                'carousel-control-next',
                prefix,
                useBsClasses,
                controlsNextClassName
              )}
              onClick={() => setSlide()}
              aria-label="Next"
              disabled={isTransitioning}
            >
              <span
                className={getFullClassName(
                  'carousel-control-next-icon',
                  prefix,
                  useBsClasses,
                  controlsNextIconClassName
                )}
                aria-hidden="true"
              />
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
  autoPlayAfterClick: PropTypes.bool,
  touch: PropTypes.bool,
  className: PropTypes.string,
  indicatorsClassName: PropTypes.string,
  innerClassName: PropTypes.string,
  controlsPrevClassName: PropTypes.string,
  controlsPrevIconClassName: PropTypes.string,
  controlsNextClassName: PropTypes.string,
  controlsNextIconClassName: PropTypes.string,
  useBsClasses: PropTypes.bool,
  defaultDirection: PropTypes.oneOf(Object.values(DIRECTIONS)),
};

export const useCarousel = () => useContext(CarouselContext);
