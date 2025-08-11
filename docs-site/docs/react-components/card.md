---
sidebar_position: 8
---

# Card

The Prestyler Card suite provides flexible, composable components for building Bootstrap-style cards. Each subcomponent is designed for a specific card section, allowing you to compose complex card layouts with ease.

---

## Card

A wrapper for the card container.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | Card content, usually other card components.                                                |
| `className`    | `string`  | —         | Additional custom CSS classes for the card.                                                 |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes with the configured prefix.                       |
| ...rest        |           |           | Any other props are passed to the underlying element.                                       |

---

## CardHeader

A wrapper for the card header section.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | Header content.                                                                             |
| `className`    | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes.                                                  |
| ...rest        |           |           | Any other props are passed to the underlying element.                                       |

---

## CardImage

Displays an image at the top or bottom of the card.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `src`          | `string`  | —         | Image source URL.                                                                           |
| `alt`          | `string`  | `''`      | Image alt text.                                                                             |
| `isBottom`     | `bool`    | `false`   | If `true`, image is placed at the bottom (`card-img-bottom`); otherwise, at the top.        |
| `className`    | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes.                                                  |
| ...rest        |           |           | Any other props are passed to the `<img>` element.                                          |

---

## CardBody

A wrapper for the card body section.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | Body content.                                                                               |
| `className`    | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes.                                                  |
| ...rest        |           |           | Any other props are passed to the underlying element.                                       |

---

## CardTitle

A wrapper for the card title, rendered as a heading.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | Title content.                                                                              |
| `tag`          | `string`  | `'h5'`    | Heading tag to use (`'h1'`–`'h6'`).                                                         |
| `className`    | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes.                                                  |
| ...rest        |           |           | Any other props are passed to the heading element.                                          |

---

## CardSubtitle

A wrapper for the card subtitle, rendered as a heading.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | Subtitle content.                                                                           |
| `tag`          | `string`  | `'h6'`    | Heading tag to use (`'h1'`–`'h6'`).                                                         |
| `className`    | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes.                                                  |
| ...rest        |           |           | Any other props are passed to the heading element.                                          |

---

## CardText

A wrapper for card text content.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | Text content.                                                                               |
| `className`    | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes.                                                  |
| ...rest        |           |           | Any other props are passed to the underlying element.                                       |

---

## CardLink

A styled link for use in cards.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | Link content.                                                                               |
| `href`         | `string`  | `'#'`     | Link URL.                                                                                   |
| `className`    | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes.                                                  |
| ...rest        |           |           | Any other props are passed to the `<a>` element.                                            |

---

## CardFooter

A wrapper for the card footer section.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | Footer content.                                                                             |
| `className`    | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes.                                                  |
| ...rest        |           |           | Any other props are passed to the underlying element.                                       |

---

## CardImageOverlay

A wrapper for overlaying content on a card image.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | Overlay content (usually `CardTitle`, `CardText`, etc.).                                    |
| `className`    | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes.                                                  |
| ...rest        |           |           | Any other props are passed to the underlying element.                                       |

---

## CardGroup

A wrapper for grouping multiple cards together.

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | One or more `Card` components.                                                              |
| `className`    | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes.                                                  |
| ...rest        |           |           | Any other props are passed to the underlying element.                                       |

---

## Examples

### Full Card Example

```jsx
import {
  Card,
  CardHeader,
  CardImage,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink,
  CardFooter,
  CardImageOverlay,
  CardGroup
} from 'prestyler/react/jsx/';

<Card style={{ width: 260 }}>
  <CardHeader>Header: Header text</CardHeader>
  <CardImage src="/card-image-placeholder.png" alt="Card image" />
  <CardBody>
    <CardTitle tag="h5">Card Title</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">
      Card Subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </CardText>
    <CardLink href="#">Card Link</CardLink>
    <CardLink href="#">Another Link</CardLink>
  </CardBody>
  <CardFooter>Footer: 2 days ago</CardFooter>
</Card>
```

### Card with Image Overlay

```jsx
<Card className="bg-dark text-white" style={{ width: 320 }}>
  <CardImage src="/card-image-placeholder.png" alt="Card image" />
  <CardImageOverlay>
    <CardTitle tag="h5">Card Title</CardTitle>
    <CardText>
      This is a wider card with supporting text below as a natural lead-in to additional content.
    </CardText>
  </CardImageOverlay>
</Card>
```

### Card Group Example

```jsx
<CardGroup>
  <Card>
    <CardImage src="/card-image-placeholder.png" alt="Card image 1" />
    <CardBody>
      <CardTitle tag="h5">Card 1</CardTitle>
      <CardText>
        This is a card in a group. It contains supporting text as a natural lead-in to content.
      </CardText>
    </CardBody>
  </Card>
  <Card>
    <CardImage src="/card-image-placeholder.png" alt="Card image 2" />
    <CardBody>
      <CardTitle tag="h5">Card 2</CardTitle>
      <CardText>This is another card in the group. It also contains supporting text.</CardText>
    </CardBody>
  </Card>
  <Card>
    <CardImage src="/card-image-placeholder.png" alt="Card image 3" />
    <CardBody>
      <CardTitle tag="h5">Card 3</CardTitle>
      <CardText>And this is a third card in the group.</CardText>
    </CardBody>
  </Card>
</CardGroup>
```

---

## Notes

- All components accept `className` and `useBsClasses` for styling flexibility.
- Use the `tag` prop on `CardTitle` and `CardSubtitle` to control heading level for accessibility.
- Card subcomponents are designed to be composed together for maximum flexibility.
