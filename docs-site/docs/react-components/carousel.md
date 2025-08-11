---
sidebar_position: 9
---

# Carousel

The Prestyler Carousel suite provides flexible, composable components for building Bootstrap-style carousels. Each subcomponent is designed for a specific carousel section, allowing you to compose interactive, accessible carousels with ease.

---

## Carousel

A wrapper for the carousel container and logic.

| Prop                        | Type      | Default     | Description                                                                                      |
|-----------------------------|-----------|-------------|--------------------------------------------------------------------------------------------------|
| `children`                  | `node`    | —           | Carousel content, usually `CarouselItem` components.                                             |
| `interval`                  | `number`  | `2000`      | Interval between slides in ms. Set to `0` or `null` to disable auto sliding.                     |
| `controls`                  | `bool`    | `true`      | Show previous/next navigation controls.                                                          |
| `indicators`                | `bool`    | `true`      | Show slide indicators.                                                                           |
| `fade`                      | `bool`    | `false`     | Use fade transition instead of sliding.                                                          |
| `pauseOnHover`              | `bool`    | `true`      | Pause auto sliding when mouse is over the carousel.                                              |
| `autoPlayAfterClick`        | `bool`    | `false`     | Automatically resume sliding only after first clicking on a slide or indicator.                  |
| `className`                 | `string`  | —           | Additional custom CSS classes for the carousel container.                                        |
| `indicatorsClassName`       | `string`  | —           | Additional custom CSS classes for the indicators container.                                      |
| `innerClassName`            | `string`  | —           | Additional custom CSS classes for the inner slides container.                                    |
| `controlsPrevClassName`     | `string`  | —           | Additional custom CSS classes for the previous control button.                                   |
| `controlsPrevIconClassName` | `string`  | —           | Additional custom CSS classes for the previous control icon.                                     |
| `controlsNextClassName`     | `string`  | —           | Additional custom CSS classes for the next control button.                                       |
| `controlsNextIconClassName` | `string`  | —           | Additional custom CSS classes for the next control icon.                                         |
| `defaultDirection`          | `string`  | `'FORWARD'` | Default slide direction. Use `DIRECTIONS.FORWARD` or `DIRECTIONS.BACK`.                          |
| `touch`                     | `bool`    | `true`      | Enable touch gestures for slide navigation (swiping on mobile).                                  |
| `useBsClasses`              | `bool`    | `true`      | If `true`, applies Bootstrap-like classes with the configured prefix.                            |
| `id`                        | `string`  | —           | Optional id for the carousel container.                                                          |
| ...rest                     |           |             | Any other props are passed to the underlying element.                                            |

---

## CarouselItem

A wrapper for each carousel slide.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `itemIndex`    | `number`  | —         | The index of this slide (required, must be unique among siblings).                          |
| `children`     | `node`    | —         | Slide content, usually an image and/or caption.                                             |
| `className`    | `string`  | —         | Additional custom CSS classes for the slide.                                                |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes with the configured prefix.                       |
| ...rest        |           |           | Any other props are passed to the underlying element.                                       |

---

## CarouselItemCaption

A wrapper for slide captions, styled and positioned according to Bootstrap conventions.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | Caption content (text, headings, etc.).                                                     |
| ...rest        |           |           | Any other props are passed to the underlying element.                                       |

---

## Examples

### Basic Carousel

```jsx
import { Carousel, CarouselItem, CarouselItemCaption } from 'prestyler/react/jsx/';

<Carousel>
  <CarouselItem itemIndex={0}>
    <img src="/slide-1.png" alt="First slide" />
    <CarouselItemCaption>
      <h5>First Slide</h5>
      <p>Description for the first slide.</p>
    </CarouselItemCaption>
  </CarouselItem>
  <CarouselItem itemIndex={1}>
    <img src="/slide-2.png" alt="Second slide" />
    <CarouselItemCaption>
      <h5>Second Slide</h5>
      <p>Description for the second slide.</p>
    </CarouselItemCaption>
  </CarouselItem>
</Carousel>
```

### Carousel with Per-Item Intervals

```jsx
<Carousel interval={2000}>
  <CarouselItem itemIndex={0}>
    <img src="/slide-1.png" alt="First slide" />
    <CarouselItemCaption>
      <h5>First Slide</h5>
      <p>Interval: default (2000ms)</p>
    </CarouselItemCaption>
  </CarouselItem>
  <CarouselItem itemIndex={1} interval={5000}>
    <img src="/slide-2.png" alt="Second slide" />
    <CarouselItemCaption>
      <h5>Second Slide</h5>
      <p>Interval: 5000ms</p>
    </CarouselItemCaption>
  </CarouselItem>
  <CarouselItem itemIndex={2} interval={1000}>
    <img src="/slide-3.png" alt="Third slide" />
    <CarouselItemCaption>
      <h5>Third Slide</h5>
      <p>Interval: 1000ms</p>
    </CarouselItemCaption>
  </CarouselItem>
</Carousel>
```

---

## Notes

- All components accept `className` and `useBsClasses` for styling flexibility.
- CarouselItem's `itemIndex` must be unique and correspond to its order in the carousel.
- Use the `interval` prop on `Carousel` to control auto-sliding globally, or pass an `interval` prop to individual `CarouselItem` components to override per-slide.
