---
sidebar_position: 12
---

# ListGroup Components

The Prestyler ListGroup components provide a flexible, accessible, and customizable way to display lists of content with Bootstrap styles.
As all other components, list groups support `useBsClasses` boolean props to remove Bootrstrap classes and always can be customize using `className` and own CSS classes.
It is composed of the following components:

---

## ListGroup

The main wrapper for a list group.  
All `ListGroupItem` components should be used as children of `ListGroup`.

### Props

| Prop                | Type      | Default | Description                                                                                   |
|---------------------|-----------|---------|-----------------------------------------------------------------------------------------------|
| `isFlush`           | `bool`    | `false` | Removes some borders and rounded corners for a flush appearance.                              |
| `isNumbered`        | `bool`    | `false` | Renders the list group as a numbered list (`<ol>`).                                           |
| `isHorizontal`      | `bool`    | `false` | Displays the list group horizontally.                                                         |
| `horizontalViewport`| `string`  | `''`    | Responsive horizontal breakpoints: `sm`, `md`, `lg`, `xl`, `xxl`.                             |
| `children`          | `node`    | —       | List group items.                                                                             |
| ...props            |           |         | Any other props are passed to the wrapper element.                                            |

---

## ListGroupItem

The `ListGroupItem` component is the base for all item variants.  
You can use the base component directly or use one of the color variants for convenience.

### Variants

- `ListGroupItem` (default)
- `PrimaryListGroupItem`
- `SecondaryListGroupItem`
- `SuccessListGroupItem`
- `DangerListGroupItem`
- `WarningListGroupItem`
- `InfoListGroupItem`
- `LightListGroupItem`
- `DarkListGroupItem`

All variants accept the same props as the base component, with the `variant` prop pre-set.
By default `ListGroupItem` renders as `<li>` element, but can be changed to button or link if needed.

### Props

| Prop                   | Type      | Default   | Description                                                                                      |
|------------------------|-----------|-----------|--------------------------------------------------------------------------------------------------|
| `isActive`             | `bool`    | `false`   | Adds active styling and `aria-current="true"`.                                                   |
| `isLink`               | `bool`    | `false`   | Renders as an `<a>` element.                                                                     |
| `isButton`             | `bool`    | `false`   | Renders as a `<button>` element.                                                                 |
| `disabled`             | `bool`    | `false`   | Adds disabled styling and `aria-disabled="true"`.                                                |
| `isHorizontalEqualWidth`| `bool`   | `false`   | Makes horizontal items equal width.                                                              |
| `variant`              | `string`  | `''`      | Sets the color variant (e.g., `'primary'`, `'danger'`).                                          |
| `children`             | `node`    | —         | Content of the item.                                                                             |
| ...props               |           |           | Any other props are passed to the rendered element.                                              |

---

## Usage Example

```jsx
import {
  ListGroup,
  ListGroupItem,
  PrimaryListGroupItem,
  SecondaryListGroupItem,
  SuccessListGroupItem,
  DangerListGroupItem,
  WarningListGroupItem,
  InfoListGroupItem,
  LightListGroupItem,
  DarkListGroupItem,
} from 'prestyler/react/jsx/';

// Basic usage with all variants
<ListGroup>
  <ListGroupItem>Default Item</ListGroupItem>
  <PrimaryListGroupItem>Primary Item</PrimaryListGroupItem>
  <SecondaryListGroupItem>Secondary Item</SecondaryListGroupItem>
  <SuccessListGroupItem>Success Item</SuccessListGroupItem>
  <DangerListGroupItem>Danger Item</DangerListGroupItem>
  <WarningListGroupItem>Warning Item</WarningListGroupItem>
  <InfoListGroupItem>Info Item</InfoListGroupItem>
  <LightListGroupItem>Light Item</LightListGroupItem>
  <DarkListGroupItem>Dark Item</DarkListGroupItem>
</ListGroup>

// Numbered, flush, and horizontal examples
<ListGroup isNumbered isFlush isHorizontal horizontalViewport="md">
  <ListGroupItem>Item 1</ListGroupItem>
  <ListGroupItem>Item 2</ListGroupItem>
  <ListGroupItem>Item 3</ListGroupItem>
</ListGroup>

// ListGroupItem as link, button, and text
<ListGroup>
  <ListGroupItem isLink href="https://example.com">Link Item</ListGroupItem>
  <ListGroupItem isButton>Button Item</ListGroupItem>
  <ListGroupItem>Plain Text Item</ListGroupItem>
</ListGroup>
```
