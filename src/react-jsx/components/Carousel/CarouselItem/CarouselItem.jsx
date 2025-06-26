import React from 'react';
import PropTypes from 'prop-types';
import { useCarousel } from '../Carousel/Carousel';

export default function CarouselItem({ itemIndex, children, className = '', ...props }) {
  const { activeIndex, prevIndex } = useCarousel();
  const isActive = itemIndex === activeIndex;
  const isPrev = itemIndex === prevIndex;
  const showActive = isActive || isPrev;
  const transitionClass = isActive ? 'bs-carousel-item-start' : isPrev ? 'bs-carousel-item-start' : '';
  return (
    <div
      onTransitionEnd={() => console.log('Transition finished!', itemIndex)}
      className={`bs-carousel-item${showActive ? ' bs-active' : ''} ${transitionClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

CarouselItem.propTypes = {
  itemIndex: PropTypes.number.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};
