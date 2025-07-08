import React from 'react';
import { render, screen } from '@testing-library/react';
import CarouselItemCaption from './CarouselItemCaption';

describe('CarouselItemCaption', () => {
  it('renders with default class and children', () => {
    render(
      <CarouselItemCaption className="custom-class" data-testid="my-carousel-caption-item">
        Carousel Caption Content
      </CarouselItemCaption>
    );
    const div = screen.getByText('Carousel Caption Content').closest('div');
    expect(div).toBeInTheDocument();
    expect(div).toHaveClass(`${PREFIX}carousel-caption`);
    expect(div).toHaveClass(`${PREFIX}d-none`);
    expect(div).toHaveClass(`${PREFIX}d-md-block`);
    expect(div).toHaveClass('custom-class');
    expect(div).toHaveAttribute('data-testid', 'my-carousel-caption-item');
  });

  it('does not prefix class when useBsClasses is false', () => {
    render(
      <CarouselItemCaption useBsClasses={false}>Carousel Caption Content</CarouselItemCaption>
    );
    const div = screen.getByText('Carousel Caption Content').closest('div');
    expect(div).not.toHaveClass('carousel-caption');
    expect(div).not.toHaveClass(`${PREFIX}carousel-caption`);
  });
});
