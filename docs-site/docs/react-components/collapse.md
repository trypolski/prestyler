---
sidebar_position: 10
---

# Collapse

The Prestyler `Collapse` component provides a flexible, Bootstrap-style collapse/expand animation for any content. It is a simplified wrapper around `AccordionItem`, using only the logic and markup needed for a single collapsible region. This means there is no header, button, or accordion logic—just the collapse animation and content.

---

## How It Works

Internally, `Collapse` renders an `AccordionItem` with the `isSingleCollapse` prop set to `true`. This disables all accordion-specific features and ensures only the collapse logic and markup are used.

---

## Props

| Prop         | Type      | Default   | Description                                                                                 |
|--------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `show`       | `bool`    | `false`   | Controls whether the collapse content is shown (`true`) or hidden (`false`).                |
| `horizontal` | `bool`    | `false`   | If `true`, enables horizontal collapse (width animation instead of height).                 |
| `bodyWidth`  | `string`  | —         | Used with `horizontal`. Sets the width of the collapse body when expanded (e.g. `"300px"`). |
| `className`  | `string`  | —         | Additional custom CSS classes for the collapse container.                                   |
| `children`   | `node`    | —         | The content to show/hide inside the collapse.                                               |
| ...rest      |           |           | Any other props are passed to the underlying element.                                       |

---

## Usage

### Basic Example

```jsx
import { Collapse } from 'prestyler/react/jsx/';

function Example() {
  const [show, setShow] = React.useState(false);

  return (
    <div>
      <button onClick={() => setShow((s) => !s)}>
        {show ? 'Hide' : 'Show'} Content
      </button>
      <Collapse show={show}>
        <div>
          <strong>This is collapsible content.</strong>
          <p>You can put any HTML or React elements here.</p>
        </div>
      </Collapse>
    </div>
  );
}
```
### Horizontal 

```jsx
<Collapse show={show} horizontal bodyWidth="300px">
  <div>
    <strong>This is horizontal collapse content.</strong>
    <p>It animates width instead of height.</p>
  </div>
</Collapse>
```

## Notes

 - The `show` prop is required to control the visibility of the collapse content.
 - When `horizontal` is `true`, you should provide a `bodyWidth` (e.g. "300px") for correct animation.
 - All props are passed to the underlying `AccordionItem` with `isSingleCollapse` enabled, so only collapse-related logic and markup are rendered.
 - No header, button, or accordion context is present in this component.
 - For accessibility, you may add aria-* attributes as needed to the content inside Collapse.
