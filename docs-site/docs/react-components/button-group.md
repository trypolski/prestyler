---
sidebar_position: 6
---

# ButtonGroup

The Prestyler `ButtonGroup` component provides a flexible way to group multiple buttons together, supporting horizontal, vertical, large, and small button groups with Bootstrap-like styling.

---

## ButtonGroup Component

### Props

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | One or more button components to be grouped.                                                |
| `className`    | `string`  | —         | Additional custom CSS classes for the group container.                                      |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes with the configured prefix.                       |
| `isLarge`      | `bool`    | `false`   | If `true`, applies the large button group style.                                            |
| `isSmall`      | `bool`    | `false`   | If `true`, applies the small button group style.                                            |
| `isVertical`   | `bool`    | `false`   | If `true`, arranges the buttons vertically.                                                 |
| ...rest        |           |           | Any other props are passed to the underlying `<div>` element.                               |

---

## Examples

### Basic Button Group

```jsx
import { ButtonGroup, PrimaryButton, SecondaryButton, SuccessButton } from 'prestyler/react/jsx/';

<ButtonGroup>
  <PrimaryButton>Primary</PrimaryButton>
  <SecondaryButton>Secondary</SecondaryButton>
  <SuccessButton>Success</SuccessButton>
</ButtonGroup>
```

### Large Button Group

```jsx
<ButtonGroup isLarge>
  <PrimaryButton>Large Primary</PrimaryButton>
  <SecondaryButton>Large Secondary</SecondaryButton>
</ButtonGroup>
```

### Small Button Group

```jsx
<ButtonGroup isSmall>
  <PrimaryButton>Small Primary</PrimaryButton>
  <SecondaryButton>Small Secondary</SecondaryButton>
</ButtonGroup>
```

### Vertical Button Group

```jsx
<ButtonGroup isVertical>
  <PrimaryButton>Vertical Primary</PrimaryButton>
  <SecondaryButton>Vertical Secondary</SecondaryButton>
</ButtonGroup>
```

### Custom Class and Props

```jsx
<ButtonGroup className="my-custom-group" id="main-group">
  <PrimaryButton>Custom</PrimaryButton>
  <SecondaryButton>Props</SecondaryButton>
</ButtonGroup>
```

### Without Bootstrap Classes

```jsx
<ButtonGroup useBsClasses={false}>
  <PrimaryButton>Plain</PrimaryButton>
  <SecondaryButton>Group</SecondaryButton>
</ButtonGroup>
```

---

## Notes

- The `ButtonGroup` component renders a `<div>` with `role="group"` for accessibility.
- By default, the group is horizontal. Use `isVertical` for a vertical stack.
- Only one of `isLarge` or `isSmall` should be used at a time.
- The `useBsClasses` prop allows you to disable Bootstrap-style classes if you want to use only your custom styles.
- You can pass any additional props (such as `id`, `data-*`, or `style`) to the group container.