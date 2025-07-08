import React from 'react';
import { render, screen, fireEvent, within, act } from '@testing-library/react';
import Carousel from './Carousel';
import CarouselItem from '../CarouselItem/CarouselItem';
import CarouselItemCaption from '../CarouselItemCaption/CarouselItemCaption';

const CUSTOM_CLASSES = {
  className: 'custom-carousel',
  indicatorsClassName: 'custom-indicators',
  innerClassName: 'custom-inner',
  controlsPrevClassName: 'custom-control-prev',
  controlsPrevIconClassName: 'custom-control-prev-icon',
  controlsNextClassName: 'custom-control-next',
  controlsNextIconClassName: 'custom-control-next-icon',
};

function endTransitions(items) {
  items.forEach((item) => {
    fireEvent.transitionEnd(item);
  });
}

jest.useFakeTimers();

describe('Carousel', () => {
  it('renders with default props values, classes, and children', () => {
    render(
      <Carousel data-testid="carousel-root" {...CUSTOM_CLASSES}>
        <CarouselItem itemIndex={0} data-testid="carousel-item-0">
          <p>Slide 1</p>
          <CarouselItemCaption data-testid="caption">Caption Content</CarouselItemCaption>
        </CarouselItem>
        <CarouselItem itemIndex={1} data-testid="carousel-item-1">
          Slide 2
        </CarouselItem>
      </Carousel>
    );
    // Wrapper
    const carouselWrapper = screen.getByTestId('carousel-root');
    expect(carouselWrapper).toBeInTheDocument();
    const carouselWrapperClasses = carouselWrapper.className.split(' ');
    expect(carouselWrapperClasses).toContain(`${PREFIX}carousel`);
    expect(carouselWrapperClasses).toContain(`${PREFIX}slide`);
    expect(carouselWrapperClasses).not.toContain(`${PREFIX}carousel-fade`);
    expect(carouselWrapperClasses).toContain(CUSTOM_CLASSES.className);
    // Indicators
    const indicatorsWrapper = carouselWrapper.querySelector(`.${PREFIX}carousel-indicators`);
    expect(indicatorsWrapper).toBeInTheDocument();
    expect(indicatorsWrapper).toHaveClass(CUSTOM_CLASSES.indicatorsClassName);
    const indicators = indicatorsWrapper.querySelectorAll('button');
    expect(indicators).toHaveLength(2);
    const firstIndicator = indicators[0];
    expect(firstIndicator).toHaveAttribute('aria-label', 'Slide 1');
    expect(firstIndicator).toHaveClass(`${PREFIX}active`);
    expect(indicators[1]).toHaveAttribute('aria-label', 'Slide 2');
    // Inner
    const innerWrapper = carouselWrapper.querySelector(`.${PREFIX}carousel-inner`);
    expect(innerWrapper).toBeInTheDocument();
    expect(innerWrapper).toHaveClass(CUSTOM_CLASSES.innerClassName);
    const items = innerWrapper.querySelectorAll(`.${PREFIX}carousel-item`);
    expect(items).toHaveLength(2);
    const firstItem = items[0];
    expect(firstItem).toHaveClass(`${PREFIX}active`);
    expect(firstItem).toHaveTextContent('Slide 1');
    expect(within(firstItem).getByTestId('caption')).toHaveTextContent('Caption Content');
    const secondItem = items[1];
    expect(secondItem).not.toHaveClass(`${PREFIX}active`);
    expect(secondItem).toHaveTextContent('Slide 2');
    // Controls
    const controlsPrev = carouselWrapper.querySelector(`.${PREFIX}carousel-control-prev`);
    expect(controlsPrev).toBeInTheDocument();
    expect(controlsPrev).toHaveClass(CUSTOM_CLASSES.controlsPrevClassName);
    expect(controlsPrev).toHaveAttribute('aria-label', 'Previous');
    const controlsPrevIcon = controlsPrev.querySelector(`.${PREFIX}carousel-control-prev-icon`);
    expect(controlsPrevIcon).toBeInTheDocument();
    expect(controlsPrevIcon).toHaveClass(CUSTOM_CLASSES.controlsPrevIconClassName);
    const controlsNext = carouselWrapper.querySelector(`.${PREFIX}carousel-control-next`);
    expect(controlsNext).toBeInTheDocument();
    expect(controlsNext).toHaveClass(CUSTOM_CLASSES.controlsNextClassName);
    expect(controlsNext).toHaveAttribute('aria-label', 'Next');
    const controlsNextIcon = controlsNext.querySelector(`.${PREFIX}carousel-control-next-icon`);
    expect(controlsNextIcon).toBeInTheDocument();
    expect(controlsNextIcon).toHaveClass(CUSTOM_CLASSES.controlsNextIconClassName);

    act(() => {
      jest.advanceTimersByTime(2000);
    });
    // During transition
    expect(firstItem).toHaveClass(`${PREFIX}active`, `${PREFIX}carousel-item-start`);
    expect(secondItem).not.toHaveClass(`${PREFIX}active`);
    expect(secondItem).toHaveClass(`${PREFIX}carousel-item-start`, `${PREFIX}carousel-item-next`);
    endTransitions([firstItem, secondItem]);
    // After transition
    expect(firstItem).not.toHaveClass(`${PREFIX}active`);
    expect(firstItem).not.toHaveClass(`${PREFIX}carousel-item-start`);
    expect(secondItem).toHaveClass(`${PREFIX}active`);
    expect(secondItem).not.toHaveClass(`${PREFIX}carousel-item-start`);
    expect(secondItem).not.toHaveClass(`${PREFIX}carousel-item-next`);
    // Should not move slide on hover
    fireEvent.mouseEnter(carouselWrapper);
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    endTransitions([firstItem, secondItem]);
    expect(firstItem).not.toHaveClass(`${PREFIX}active`);
    expect(secondItem).toHaveClass(`${PREFIX}active`);
    // Click on back control
    fireEvent.click(controlsPrev);
    // During back transition
    expect(firstItem).not.toHaveClass(`${PREFIX}active`);
    expect(firstItem).toHaveClass(`${PREFIX}carousel-item-prev`, `${PREFIX}carousel-item-end`);
    expect(secondItem).toHaveClass(`${PREFIX}active`, `${PREFIX}carousel-item-end`);
    endTransitions([firstItem, secondItem]);
    // After back transition
    expect(firstItem).toHaveClass(`${PREFIX}active`);
    expect(firstItem).not.toHaveClass(`${PREFIX}carousel-item-prev`);
    expect(firstItem).not.toHaveClass(`${PREFIX}carousel-item-end`);
    expect(secondItem).not.toHaveClass(`${PREFIX}active`);
    expect(secondItem).not.toHaveClass(`${PREFIX}carousel-item-end`);
  });

  it('should not auto-slide before action', () => {
    render(
      <Carousel autoPlayAfterClick data-testid="carousel-root">
        <CarouselItem itemIndex={0} data-testid="slide-0">
          Slide 1
        </CarouselItem>
        <CarouselItem itemIndex={1} data-testid="slide-1">
          Slide 2
        </CarouselItem>
        <CarouselItem itemIndex={2} data-testid="slide-2">
          Slide 3
        </CarouselItem>
      </Carousel>
    );
    const carouselWrapper = screen.getByTestId('carousel-root');
    const controlsNext = carouselWrapper.querySelector(`.${PREFIX}carousel-control-next`);
    const firstSlide = screen.getByTestId('slide-0');
    const secondSlide = screen.getByTestId('slide-1');
    const thirdSlide = screen.getByTestId('slide-2');
    // Slide 0 should be active initially
    expect(firstSlide).toHaveClass(`${PREFIX}active`);
    expect(secondSlide).not.toHaveClass(`${PREFIX}active`);
    expect(thirdSlide).not.toHaveClass(`${PREFIX}active`);
    // After 2000ms, should not move to next slide
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    endTransitions([firstSlide, secondSlide, thirdSlide]);
    expect(firstSlide).toHaveClass(`${PREFIX}active`);
    expect(secondSlide).not.toHaveClass(`${PREFIX}active`);
    expect(thirdSlide).not.toHaveClass(`${PREFIX}active`);
    // Click on next control
    fireEvent.click(controlsNext);
    endTransitions([firstSlide, secondSlide, thirdSlide]);
    expect(firstSlide).not.toHaveClass(`${PREFIX}active`);
    expect(secondSlide).toHaveClass(`${PREFIX}active`);
    expect(thirdSlide).not.toHaveClass(`${PREFIX}active`);
    // After action and 2000ms, should move to next slide automatically
    act(() => {
      jest.advanceTimersByTime(2000);
    });
    endTransitions([firstSlide, secondSlide, thirdSlide]);
    expect(firstSlide).not.toHaveClass(`${PREFIX}active`);
    expect(secondSlide).not.toHaveClass(`${PREFIX}active`);
    expect(thirdSlide).toHaveClass(`${PREFIX}active`);
  });

  it('should change slide on indicator click', () => {
    render(
      <Carousel data-testid="carousel-root">
        <CarouselItem itemIndex={0} data-testid="slide-0">
          Slide 1
        </CarouselItem>
        <CarouselItem itemIndex={1} data-testid="slide-1">
          Slide 2
        </CarouselItem>
        <CarouselItem itemIndex={2} data-testid="slide-2">
          Slide 3
        </CarouselItem>
      </Carousel>
    );

    const carouselWrapper = screen.getByTestId('carousel-root');
    const indicatorsWrapper = carouselWrapper.querySelector(`.${PREFIX}carousel-indicators`);
    const indicators = indicatorsWrapper.querySelectorAll('button');
    const firstSlide = screen.getByTestId('slide-0');
    const secondSlide = screen.getByTestId('slide-1');
    const thirdSlide = screen.getByTestId('slide-2');

    expect(firstSlide).toHaveClass(`${PREFIX}active`);
    expect(secondSlide).not.toHaveClass(`${PREFIX}active`);
    expect(thirdSlide).not.toHaveClass(`${PREFIX}active`);

    fireEvent.click(indicators[2]);
    endTransitions([firstSlide, secondSlide, thirdSlide]);
    expect(firstSlide).not.toHaveClass(`${PREFIX}active`);
    expect(secondSlide).not.toHaveClass(`${PREFIX}active`);
    expect(thirdSlide).toHaveClass(`${PREFIX}active`);
  });

  it('renders with fade class when fade prop is true', () => {
    render(
      <Carousel interval={null} fade data-testid="carousel-root">
        <CarouselItem itemIndex={0}>Slide 1</CarouselItem>
        <CarouselItem itemIndex={1}>Slide 2</CarouselItem>
      </Carousel>
    );
    expect(screen.getByTestId('carousel-root')).toHaveClass(`${PREFIX}carousel-fade`);
  });

  it('disables controls when only one child', () => {
    render(
      <Carousel interval={null} controls>
        <CarouselItem itemIndex={0}>Slide 1</CarouselItem>
      </Carousel>
    );
    expect(screen.queryByRole('button', { name: /Previous/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /Next/i })).not.toBeInTheDocument();
  });

  // it('handles touch events when touch is true', () => {
  //   render(
  //     <Carousel interval={null} touch data-testid="carousel-root">
  //       <CarouselItem itemIndex={0}>Slide 1</CarouselItem>
  //       <CarouselItem itemIndex={1}>Slide 2</CarouselItem>
  //     </Carousel>
  //   );
  //   const root = screen.getByTestId('carousel-root');
  //   fireEvent.touchStart(root, { touches: [{ clientX: 100 }] });
  //   fireEvent.touchEnd(root, { changedTouches: [{ clientX: 10 }] });
  //   // No error should occur, and carousel should respond to swipe
  // });

  // it('does not use Bootstrap classes when useBsClasses is false', () => {
  //   render(
  //     <Carousel interval={null} useBsClasses={false} data-testid="carousel-root">
  //       <CarouselItem itemIndex={0} data-testid="carousel-item-0">
  //         Slide 1
  //       </CarouselItem>
  //     </Carousel>
  //   );
  //   const root = screen.getByTestId('carousel-root');
  //   expect(root.className).not.toMatch(/carousel/);
  //   expect(root.className).not.toMatch(/slide/);
  //   const item = screen.getByTestId('carousel-item-0');
  //   expect(item.className).not.toMatch(/carousel-item/);
  // });
});
