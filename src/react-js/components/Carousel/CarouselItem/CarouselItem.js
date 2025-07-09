import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../../utilities/utilities';
import { useCarousel } from '../Carousel/Carousel';
import { TRANSITION_CLASSNAMES, NON_BS_DEFAULTS } from '../constants';

export default function CarouselItem({
  itemIndex,
  children,
  className = '',
  useBsClasses = true,
  ...props
}) {
  const prefix = usePrestylerPrefix();
  const { activeIndex, prevIndex, direction, setIsTransitioning } = useCarousel();
  const carouselItemRef = useRef(null);
  const [init, setInit] = useState(true);
  const isActive = itemIndex === activeIndex;
  const isPrev = itemIndex === prevIndex;

  const activeClassName =
    getFullClassName(TRANSITION_CLASSNAMES.ACTIVE, prefix, useBsClasses) || NON_BS_DEFAULTS.ACTIVE;
  const startClassName =
    getFullClassName(TRANSITION_CLASSNAMES.START, prefix, useBsClasses) || NON_BS_DEFAULTS.START;
  const endClassName =
    getFullClassName(TRANSITION_CLASSNAMES.END, prefix, useBsClasses) || NON_BS_DEFAULTS.END;
  const nextClassName =
    getFullClassName(TRANSITION_CLASSNAMES.NEXT, prefix, useBsClasses) || NON_BS_DEFAULTS.NEXT;
  const prevClassName =
    getFullClassName(TRANSITION_CLASSNAMES.PREV, prefix, useBsClasses) || NON_BS_DEFAULTS.PREV;

  useEffect(() => {
    const carouselItemEl = carouselItemRef.current;

    if (!carouselItemEl) return;

    if (init) {
      if (isActive) {
        carouselItemEl.classList.add(activeClassName);
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
          carouselItemEl.classList.remove(startClassName);
        } else {
          carouselItemEl.classList.remove(endClassName);
        }
        carouselItemEl.classList.remove(activeClassName);
      } else {
        if (direction === 'FORWARD') {
          carouselItemEl.classList.remove(nextClassName, startClassName);
        } else {
          carouselItemEl.classList.remove(prevClassName, endClassName);
        }
        carouselItemEl.classList.add(activeClassName);
        setIsTransitioning(false);
      }
      carouselItemEl.removeEventListener('transitionend', transitionEndListener);
    }
    carouselItemEl.addEventListener('transitionend', transitionEndListener);
    if (isPrev) {
      if (direction === 'FORWARD') {
        carouselItemEl.classList.add(startClassName);
      } else {
        carouselItemEl.classList.add(endClassName);
      }
    }
    if (isActive) {
      setIsTransitioning(true);
      if (direction === 'FORWARD') {
        carouselItemEl.classList.add(nextClassName);
        carouselItemEl.offsetHeight; // eslint-disable-line no-unused-expressions
        carouselItemEl.classList.add(startClassName);
      } else {
        carouselItemEl.classList.add(prevClassName);
        carouselItemEl.offsetHeight; // eslint-disable-line no-unused-expressions
        carouselItemEl.classList.add(endClassName);
      }
    }
  }, [isActive, isPrev]);

  return (
    <div
      ref={carouselItemRef}
      {...props}
      className={getFullClassName('carousel-item', prefix, useBsClasses, className)}
    >
      {children}
    </div>
  );
}

CarouselItem.propTypes = {
  itemIndex: PropTypes.number.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  useBsClasses: PropTypes.bool,
};
