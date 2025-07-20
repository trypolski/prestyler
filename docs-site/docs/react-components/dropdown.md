---
sidebar_position: 11
---

# Dropdown Components

The Prestyler Dropdown system provides a flexible, accessible, and customizable dropdown menu solution.
You can use these components together to build dropdowns that match Bootstrap’s look and feel, but with full React control and optional support for [@floating-ui/react-dom](https://floating-ui.com/docs/react-dom) for advanced positioning.

---

## Dropdown

The main wrapper and context provider for dropdowns.  
All other dropdown components must be used as children of `Dropdown`.

### Props

| Prop                   | Type      | Default      | Description                                                                                                   |
|------------------------|-----------|--------------|---------------------------------------------------------------------------------------------------------------|
| `show`                 | `bool`    | `false`      | Controls whether the dropdown is open.                                                                        |
| `isDropdownToggleSplit`| `bool`    | `false`      | If `true`, enables split button group styling.                                                                |
| `useFloatingUI`        | `bool`    | `false`      | If `true`, enables positioning with [@floating-ui/react-dom](https://floating-ui.com/docs/react-dom).         |
| `floatingOptions`      | `object`  | `{}`         | Options passed to [`useFloating`](https://floating-ui.com/docs/useFloating) from [@floating-ui/react-dom](https://www.npmjs.com/package/@floating-ui/react-dom). See [GitHub](https://github.com/floating-ui/floating-ui). |
| `isButtonGroup`        | `bool`    | `false`      | Adds Bootstrap button group styling.                                                                          |
| `placement`            | `string`  | `'down'`     | Controls dropdown direction: `'down'`, `'top'`, `'right'`, `'left'`.                                          |
| `autoClose`            | `bool`    | `true`       | If `true`, closes dropdown on outside click.                                                                  |
| `children`             | `node`    | —            | Dropdown content (should include `DropdownToggle` and `DropdownMenu`).                                        |
| ...props               |           |              | Any other props are passed to the wrapper element.                                                            |

---

## DropdownToggle

The button or element that toggles the dropdown.  
You can use any existing Button component (e.g., `PrimaryButton`, `SecondaryButton`) via the `buttonComponent` prop.

### Props

| Prop                | Type      | Default   | Description                                                                 |
|---------------------|-----------|-----------|-----------------------------------------------------------------------------|
| `buttonComponent`   | `element` | —         | The Button component to use (e.g., `PrimaryButton`).                        |
| `show`              | `bool`    | —         | Controls toggle open state (overrides context).                             |
| `disableHookToggle` | `bool`    | `false`   | If `true`, disables internal toggle logic (useful for controlled toggles).  |
| `onClick`           | `func`    | —         | Click handler for the toggle button. This will be called additionally to hook toggle function|
| ...props            |           |           | Any other props are passed to the button component.                         |

---

## DropdownMenu

The menu container for dropdown items.  
Supports alignment and works with both context and floating-ui positioning.

### Props

| Prop        | Type                        | Default | Description                                                                                   |
|-------------|-----------------------------|---------|-----------------------------------------------------------------------------------------------|
| `alignment` | `string` or `array`         | `''`    | Controls menu alignment. Accepts positioning for differenr viewports ('sm-start','sm-end', 'md-start', 'md-end', 'lg-start', 'lg-end', 'xl-start', 'xl-end', 'xxl-start', 'xxl-end').   |
| `children`  | `node`                      | —       | The dropdown items, dividers, or headers.                                                     |
| ...props    |                             |         | Any other props are passed to the menu wrapper.                                               |

---

## DropdownItem

A single item in the dropdown menu.  
Can render as a button, link, text, or plain element.

### Props

| Prop               | Type      | Default   | Description                                                                                      |
|--------------------|-----------|-----------|--------------------------------------------------------------------------------------------------|
| `children`         | `node`    | —         | Content of the item.                                                                             |
| `useBsClasses`     | `bool`    | `true`    | If `false`, disables Bootstrap class prefixing.                                                  |
| `listItemClassName`| `string`  | —         | Additional classes for the `<li>` wrapper.                                                       |
| `className`        | `string`  | —         | Additional classes for the item element.                                                         |
| `href`             | `string`  | `'#'`     | Link URL (used if `isLink` is `true`).                                                           |
| `listItemProps`    | `object`  | `{}`      | Additional props for the `<li>` wrapper.                                                         |
| `isButton`         | `bool`    | `false`   | Renders as a `<button>`.                                                                         |
| `isText`           | `bool`    | `false`   | Renders as a `<span>` with text styling.                                                         |
| `isLink`           | `bool`    | `false`   | Renders as an `<a>` link.                                                                        |
| `isActive`         | `bool`    | `false`   | Adds active styling.                                                                             |
| `disabled`         | `bool`    | `false`   | Adds disabled styling/attributes.                                                                |
| ...props           |           |           | Any other props are passed to the rendered element.                                              |

---

## DropdownDivider

A horizontal divider for separating dropdown items.

### Props

| Prop            | Type      | Default | Description                                 |
|-----------------|-----------|---------|---------------------------------------------|
| `useBsClasses`  | `bool`    | `true`  | If `false`, disables Bootstrap class prefix. |
| `className`     | `string`  | —       | Additional classes for the divider.          |
| ...props        |           |         | Any other props for the `<hr>` element.      |

---

## DropdownHeader

A header for grouping dropdown items.

### Props

| Prop            | Type      | Default | Description                                 |
|-----------------|-----------|---------|---------------------------------------------|
| `tag`           | `string`  | `'h5'`  | The HTML tag to use for the header.          |
| `useBsClasses`  | `bool`    | `true`  | If `false`, disables Bootstrap class prefix. |
| `className`     | `string`  | —       | Additional classes for the header.           |
| ...props        |           |         | Any other props for the header element.      |

---

## Usage Example

```jsx
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  DropdownDivider,
  DropdownHeader,
  PrimaryButton
} from 'prestyler/react/jsx/';

<Dropdown>
  <DropdownToggle buttonComponent={PrimaryButton}>
    Dropdown
  </DropdownToggle>
  <DropdownMenu alignment="sm-end">
    <DropdownHeader>Header</DropdownHeader>
    <DropdownItem isLink href="https://example.com">Link</DropdownItem>
    <DropdownItem isButton>Button</DropdownItem>
    <DropdownDivider />
    <DropdownItem isText>Text Only</DropdownItem>
  </DropdownMenu>
</Dropdown>
```

## Notes
 - For advanced positioning, set `useFloatingUI` to true and pass options via `floatingOptions`. See `@floating-ui/react-dom` docs.
 - You can use any Button component (e.g., `PrimaryButton`, `SecondaryButton`) for `DropdownToggle` via the `buttonComponent` prop.
 - All dropdown components must be used within a Dropdown context.
