import React from 'react';
import Carousel from './Carousel/Carousel';
import CarouselItem from './CarouselItem/CarouselItem';

export default {
  title: 'Components/Carousel',
  component: Carousel,
};

export function BasicCarousel() {
  return (
    <Carousel interval={3000} controls indicators fade={false} style={{ maxWidth: 600 }}>
      <CarouselItem itemIndex={0} aria-label="First slide">
        <img
          src="/slide-1.png"
          className="d-block w-100"
          alt="First slide"
          style={{ width: '100%', height: 300, objectFit: 'cover' }}
        />
      </CarouselItem>
      <CarouselItem itemIndex={1}>
        <img
          src="/slide-2.png"
          className="d-block w-100"
          alt="Second slide"
          style={{ width: '100%', height: 300, objectFit: 'cover' }}
        />
      </CarouselItem>
      <CarouselItem itemIndex={2}>
        <img
          src="/slide-3.png"
          className="d-block w-100"
          alt="Third slide"
          style={{ width: '100%', height: 300, objectFit: 'cover' }}
        />
      </CarouselItem>
    </Carousel>
  );
}
