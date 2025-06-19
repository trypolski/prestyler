---
sidebar_position: 1
---

# Accordion

The Prestyler Accordion components provide a flexible, accessible way to display collapsible content panels. The Accordion is composed of an `Accordion` container and one or more `AccordionItem` components as children.

---

## Accordion Component

### Props

| Prop              | Type                | Default     | Description                                                                                   |
|-------------------|---------------------|-------------|-----------------------------------------------------------------------------------------------|
| `children`        | `node`              | —           | AccordionItem components to render inside the accordion.                                      |
| `allowMultiple`   | `bool`              | `false`     | If `true`, allows multiple items to be open at once. If `false`, only one item can be open.   |
| `className`       | `string`            | `''`        | Additional custom CSS classes for the accordion container.                                    |
| `useBsClasses`    | `bool`              | `true`      | If `true`, applies Bootstrap-like classes with the configured prefix.                         |
| `defaultOpenItems`| `array`             | `[]`        | Array of item IDs that should be open by default.                                             |
| ...rest           |                     |             | Any other props are passed to the root `<div>` of the accordion.                              |

---

## AccordionItem Component

### Props

| Prop              | Type                                      | Default                        | Description                                                                                   |
|-------------------|-------------------------------------------|--------------------------------|-----------------------------------------------------------------------------------------------|
| `id`              | `string` or `number`                      | — (required)                   | Unique identifier for the item.                                                                |
| `title`           | `string`                                  | `''`                           | Title text for the accordion item header.                                                      |
| `children`        | `node`                                    | —                              | Content to display inside the accordion item body.                                             |
| `itemClassName`   | `string`                                  | `''`                           | Custom CSS classes for the outer item container.                                               |
| `titleClassName`  | `string`                                  | `''`                           | Custom CSS classes for the header/title container.                                             |
| `buttonClassName` | `string`                                  | `''`                           | Custom CSS classes for the toggle button.                                                      |
| `collapseClassName`| `string`                                 | `''`                           | Custom CSS classes for the collapsible content container.                                      |
| `bodyClassName`   | `string`                                  | `''`                           | Custom CSS classes for the body/content container.                                             |
| `itemTestId`      | `string`                                  | `accordion-item-{id}`          | Test ID for the item container.                                                                |
| `titleTestId`     | `string`                                  | `accordion-item-title-{id}`    | Test ID for the title container.                                                               |
| `buttonTestId`    | `string`                                  | `accordion-item-button-{id}`   | Test ID for the toggle button.                                                                 |
| `collapseTestId`  | `string`                                  | `accordion-item-collapse-{id}` | Test ID for the collapsible content container.                                                 |
| `bodyTestId`      | `string`                                  | `accordion-item-body-{id}`     | Test ID for the body/content container.                                                        |
| `useBsClasses`    | `bool`                                    | `true`                         | If `true`, applies Bootstrap-like classes with the configured prefix.                          |
| `onClick`         | `function(e, id)`                         | `() => {}`                     | Callback fired when the item header is clicked.                                                |

---

## Examples

### Basic Accordion

```jsx
import Accordion from 'prestyler/react/jsx/';
import AccordionItem from 'prestyler/react/jsx/';

<Accordion>
  <AccordionItem id="item1" title="Section 1">
    Content for section 1.
  </AccordionItem>
  <AccordionItem id="item2" title="Section 2">
    Content for section 2.
  </AccordionItem>
</Accordion>
```

### Allow Multiple Open Items

```jsx
<Accordion allowMultiple>
  <AccordionItem id="a" title="First">
    First content.
  </AccordionItem>
  <AccordionItem id="b" title="Second">
    Second content.
  </AccordionItem>
</Accordion>
```

### Custom Classes and Default Open

```jsx
<Accordion className="my-accordion" defaultOpenItems={['b']}>
  <AccordionItem
    id="a"
    title="Custom A"
    itemClassName="custom-item"
    titleClassName="custom-title"
    buttonClassName="custom-btn"
    collapseClassName="custom-collapse"
    bodyClassName="custom-body"
  >
    Custom content A.
  </AccordionItem>
  <AccordionItem id="b" title="Custom B">
    Custom content B.
  </AccordionItem>
</Accordion>
```

### Without Bootstrap Classes

```jsx
<Accordion useBsClasses={false}>
  <AccordionItem id="x" title="No Bootstrap">
    This item does not use Bootstrap classes.
  </AccordionItem>
</Accordion>
```

---

## Notes

- The `Accordion` component manages open/close state and provides context to its children.
- The `AccordionItem` component handles its own open/close animation and accessibility.
- Use the `onClick` prop on `AccordionItem` to handle custom click logic.
- All className props allow you to add custom styles to any part of the
