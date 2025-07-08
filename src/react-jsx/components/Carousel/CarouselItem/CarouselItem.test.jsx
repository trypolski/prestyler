import React from 'react';
import { render, screen, within } from '@testing-library/react';
import Carousel from '../Carousel/Carousel';
import CarouselItem from './CarouselItem';
import { NON_BS_DEFAULTS } from '../constants';

describe('CarouselItem (integration with Carousel)', () => {
  it('renders with default class and children', () => {
    render(
      <Carousel interval={null}>
        <CarouselItem itemIndex={0} className="custom-class" data-testid="carousel-item-0">
          Slide 1
        </CarouselItem>
        <CarouselItem itemIndex={1} data-testid="carousel-item-1" aria-label="slide">
          <span data-testid="child-span">Slide 2 Child Content</span>
        </CarouselItem>
      </Carousel>
    );
    const firstItem = screen.getByTestId('carousel-item-0');
    const firstItemClasses = firstItem.className.split(' ');
    expect(firstItem).toBeInTheDocument();
    expect(firstItem).toHaveTextContent('Slide 1');
    expect(firstItemClasses).toContain(`${PREFIX}carousel-item`);
    expect(firstItemClasses).toContain(`${PREFIX}active`);
    expect(firstItemClasses).toContain('custom-class');
    const secondItem = screen.getByTestId('carousel-item-1');
    expect(secondItem).toBeInTheDocument();
    expect(secondItem).toHaveAttribute('aria-label', 'slide');
    const secondItemClasses = secondItem.className.split(' ');
    expect(secondItemClasses).toContain(`${PREFIX}carousel-item`);
    expect(secondItemClasses).not.toContain(`${PREFIX}active`);
    expect(within(secondItem).getByTestId('child-span')).toHaveTextContent('Slide 2 Child Content');
  });

  it('does not use Bootstrap class when useBsClasses is false', () => {
    render(
      <Carousel interval={null}>
        <CarouselItem itemIndex={0} useBsClasses={false} data-testid="carousel-item-0">
          Slide 1
        </CarouselItem>
      </Carousel>
    );
    const firstItem = screen.getByTestId('carousel-item-0');
    const firstItemClasses = firstItem.className.split(' ');
    expect(firstItemClasses).not.toContain('carousel-item');
    expect(firstItemClasses).not.toContain('active');
    expect(firstItemClasses).not.toContain(`${PREFIX}carousel-item`);
    expect(firstItemClasses).not.toContain(`${PREFIX}active`);
    expect(firstItemClasses).toContain(NON_BS_DEFAULTS.ACTIVE);
  });
});
