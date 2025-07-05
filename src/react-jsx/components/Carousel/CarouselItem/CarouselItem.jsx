import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { useCarousel } from '../Carousel/Carousel';
import { TRANSITION_CLASSNAMES } from '../constants';

export default function CarouselItem({ itemIndex, children, className = '', ...props }) {
  const prefix = usePrestylerPrefix();
  const { activeIndex, prevIndex, direction, setIsTransitioning, transitionType } = useCarousel();
  const carouselItemRef = useRef(null);
  const [init, setInit] = useState(true);
  const isActive = itemIndex === activeIndex;
  const isPrev = itemIndex === prevIndex;
  const transitionClasses = TRANSITION_CLASSNAMES[transitionType];

  useEffect(() => {
    const carouselItemEl = carouselItemRef.current;

    if (!carouselItemEl) return;

    if (init) {
      if (isActive) {
        carouselItemEl.classList.add(`${prefix}${TRANSITION_CLASSNAMES.ACTIVE}`);
      }
      setInit(false);
      return;
    }

    if (!isActive && !isPrev) {
      return;
    }

    function transitionEndListener() {
      if (isPrev) {
        if (direction === 'FORWARD') {
          carouselItemEl.classList.remove(`${prefix}${transitionClasses.START}`);
        } else {
          carouselItemEl.classList.remove(`${prefix}${transitionClasses.END}`);
        }
        carouselItemEl.classList.remove(`${prefix}${TRANSITION_CLASSNAMES.ACTIVE}`);
      } else {
        if (direction === 'FORWARD') {
          carouselItemEl.classList.remove(
            `${prefix}${transitionClasses.NEXT}`,
            `${prefix}${transitionClasses.START}`
          );
        } else {
          carouselItemEl.classList.remove(
            `${prefix}${transitionClasses.PREV}`,
            `${prefix}${transitionClasses.END}`
          );
        }
        carouselItemEl.classList.add(`${prefix}${TRANSITION_CLASSNAMES.ACTIVE}`);
        setIsTransitioning(false);
      }
      carouselItemEl.removeEventListener('transitionend', transitionEndListener);
    }
    carouselItemEl.addEventListener('transitionend', transitionEndListener);
    if (isPrev) {
      if (direction === 'FORWARD') {
        carouselItemEl.classList.add(`${prefix}${transitionClasses.START}`);
      } else {
        carouselItemEl.classList.add(`${prefix}${transitionClasses.END}`);
      }
    }
    if (isActive) {
      setIsTransitioning(true);
      if (direction === 'FORWARD') {
        carouselItemEl.classList.add(`${prefix}${transitionClasses.NEXT}`);
        carouselItemEl.offsetHeight; // eslint-disable-line no-unused-expressions
        carouselItemEl.classList.add(`${prefix}${transitionClasses.START}`);
      } else {
        carouselItemEl.classList.add(`${prefix}${transitionClasses.PREV}`);
        carouselItemEl.offsetHeight; // eslint-disable-line no-unused-expressions
        carouselItemEl.classList.add(`${prefix}${transitionClasses.END}`);
      }
    }
  }, [isActive, isPrev]);

  return (
    <div ref={carouselItemRef} className={`${prefix}carousel-item ${className}`} {...props}>
      {children}
    </div>
  );
}

CarouselItem.propTypes = {
  itemIndex: PropTypes.number.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
