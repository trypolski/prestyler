import React from 'react';
import Carousel from './Carousel/Carousel';
import CarouselItem from './CarouselItem/CarouselItem';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  argTypes: {
    interval: {
      control: { type: 'number', min: 0, step: 500 },
      defaultValue: 3000,
      description: 'Interval between slides in ms (0 disables auto sliding)',
    },
    controls: {
      control: 'boolean',
      defaultValue: true,
      description: 'Show previous/next controls',
    },
    indicators: {
      control: 'boolean',
      defaultValue: true,
      description: 'Show slide indicators',
    },
    fade: {
      control: 'boolean',
      defaultValue: false,
      description: 'Use fade transition',
    },
  },
};

export function BasicCarousel(args) {
  return (
    <Carousel {...args} style={{ maxWidth: 600 }}>
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
BasicCarousel.args = {
  interval: 2000,
  controls: true,
  indicators: true,
  fade: false,
};
