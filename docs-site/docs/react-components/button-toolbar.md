---
sidebar_position: 7
---

# ButtonToolbar

The Prestyler `ButtonToolbar` component provides a flexible container for grouping sets of button groups or buttons together on a single line, following Bootstrap's toolbar pattern.

---

## ButtonToolbar Component

### Props

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | One or more `ButtonGroup` components or buttons to be grouped in the toolbar.               |
| `className`    | `string`  | —         | Additional custom CSS classes for the toolbar container.                                    |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes with the configured prefix.                       |
| ...rest        |           |           | Any other props are passed to the underlying `<div>` element.                               |

---

## Examples

### Basic Button Toolbar

```jsx
import { ButtonToolbar, ButtonGroup, PrimaryButton, SecondaryButton } from 'prestyler/react/jsx/';

<ButtonToolbar>
  <ButtonGroup>
    <PrimaryButton>Primary</PrimaryButton>
    <SecondaryButton>Secondary</SecondaryButton>
  </ButtonGroup>
  <ButtonGroup>
    <PrimaryButton>Another</PrimaryButton>
  </ButtonGroup>
</ButtonToolbar>
```

### Toolbar with Custom Class and Props

```jsx
<ButtonToolbar className="my-toolbar" id="main-toolbar">
  <ButtonGroup>
    <PrimaryButton>Custom</PrimaryButton>
    <SecondaryButton>Props</SecondaryButton>
  </ButtonGroup>
</ButtonToolbar>
```

### Toolbar Without Bootstrap Classes

```jsx
<ButtonToolbar useBsClasses={false}>
  <ButtonGroup>
    <PrimaryButton>Plain</PrimaryButton>
    <SecondaryButton>Toolbar</SecondaryButton>
  </ButtonGroup>
</ButtonToolbar>
```

---

## Notes

- The `ButtonToolbar` component renders a `<div>` with `role="toolbar"` for accessibility.
- Use `ButtonGroup` components as children to organize buttons into logical groups.
- The `useBsClasses` prop allows you to disable Bootstrap-style classes if you want to use only your custom styles.
- You can pass any additional props (such as `id`, `data-*`, or `style`) to the
