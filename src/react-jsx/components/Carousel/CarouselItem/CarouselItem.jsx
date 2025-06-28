import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { useCarousel } from '../Carousel/Carousel';

export default function CarouselItem({ itemIndex, children, className = '', ...props }) {
  const prefix = usePrestylerPrefix();
  const { activeIndex, prevIndex, direction, setIsTransitioning } = useCarousel();
  const carouselItemRef = useRef(null);
  const [init, setInit] = useState(true);
  const isActive = itemIndex === activeIndex;
  const isPrev = itemIndex === prevIndex;

  useEffect(() => {
    const carouselItemEl = carouselItemRef.current;

    if (!carouselItemEl) return;

    if (init) {
      if (isActive) {
        carouselItemEl.classList.add(`${prefix}active`);
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
          carouselItemEl.classList.remove(`${prefix}carousel-item-start`);
        } else {
          carouselItemEl.classList.remove(`${prefix}carousel-item-end`);
        }
        carouselItemEl.classList.remove(`${prefix}active`);
      } else {
        if (direction === 'FORWARD') {
          carouselItemEl.classList.remove(
            `${prefix}carousel-item-next`,
            `${prefix}carousel-item-start`
          );
        } else {
          carouselItemEl.classList.remove(
            `${prefix}carousel-item-prev`,
            `${prefix}carousel-item-end`
          );
        }
        carouselItemEl.classList.add(`${prefix}active`);
        setIsTransitioning(false);
      }
      carouselItemEl.removeEventListener('transitionend', transitionEndListener);
    }
    carouselItemEl.addEventListener('transitionend', transitionEndListener);
    if (isPrev) {
      if (direction === 'FORWARD') {
        carouselItemEl.classList.add(`${prefix}carousel-item-start`);
      } else {
        carouselItemEl.classList.add(`${prefix}carousel-item-end`);
      }
    }
    if (isActive) {
      setIsTransitioning(true);
      if (direction === 'FORWARD') {
        carouselItemEl.classList.add(`${prefix}carousel-item-next`);
        carouselItemEl.offsetHeight; // eslint-disable-line no-unused-expressions
        carouselItemEl.classList.add(`${prefix}carousel-item-start`);
      } else {
        carouselItemEl.classList.add(`${prefix}carousel-item-prev`);
        carouselItemEl.offsetHeight; // eslint-disable-line no-unused-expressions
        carouselItemEl.classList.add(`${prefix}carousel-item-end`);
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
