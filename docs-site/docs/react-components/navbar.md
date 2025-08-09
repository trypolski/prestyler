---
sidebar_position: 14
---

# Navbar Components

The Prestyler Navbar suite provides composable components to build Bootstrap-style navigation bars with React. Each subcomponent focuses on a specific part of the navbar and works together via an internal context.

---

## Navbar

Provides context and the outer navbar container.

| Prop               | Type                                            | Default | Description                                                                                      |
|--------------------|--------------------------------------------------|---------|--------------------------------------------------------------------------------------------------|
| `children`         | `node`                                          | —       | Navbar content (brand, toggle, collapse, lists, links, text).                                   |
| `collapseBreakpoint` | `'' \| 'never' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | `''`    | Controls when the navbar expands (`navbar-expand-*`).                                           |
| `isDark`           | `bool`                                          | `false` | Adds `navbar-dark`.                                                                             |
| `className`        | `string`                                        | —       | Additional custom classes.                                                                      |
| `useBsClasses`     | `bool`                                          | `true`  | If `false`, disables Bootstrap-like classes (prefixing) for this wrapper.                       |
| `...rest`          | any                                             | —       | Passed to the root wrapper element.                                                             |

Notes:
- Navbar exposes context with `{ isOpen, toggleNavbar }` used by `NavbarToggle` and `NavbarCollapse`.

---

## NavbarBrand

Renders the brand as a link or plain text.

| Prop           | Type    | Default | Description                                              |
|----------------|---------|---------|----------------------------------------------------------|
| `isText`       | `bool`  | `false` | If `true`, renders a `<span>`; otherwise, an `<a>`.     |
| `className`    | `string`| —       | Additional classes.                                      |
| `useBsClasses` | `bool`  | `true`  | If `false`, disables Bootstrap-like classes.             |
| `...rest`      | any     | —       | Passed to the rendered element (`<a>` or `<span>`).      |

---

## NavbarToggle

The button that toggles the navbar collapse via context.

| Prop           | Type     | Default | Description                                                                 |
|----------------|----------|---------|-----------------------------------------------------------------------------|
| `children`     | `node`   | —       | Optional custom content; if not provided, renders the toggler icon `<span>`.|
| `className`    | `string` | —       | Additional classes for the button.                                          |
| `useBsClasses` | `bool`   | `true`  | If `false`, disables Bootstrap-like classes.                                |
| `...rest`      | any      | —       | Passed to the `<button>` element.                                           |

Behavior:
- Applies `navbar-toggler` and `collapsed` classes depending on open state.
- Sets `aria-expanded` from context and calls `toggleNavbar` on click.

---

## NavbarCollapse

The collapsible region controlled by `NavbarToggle`. Internally renders an `AccordionItem` with `isSingleCollapse` and `isNavCollapse` set to `true`, and `show` bound to the navbar context open state.

| Prop                | Type     | Default | Description                                                                                           |
|---------------------|----------|---------|-------------------------------------------------------------------------------------------------------|
| `id`                | `string` | —       | Assigned to the collapse container (forwarded to `AccordionItem`).                                    |
| `collapseClassName` | `string` | —       | Additional classes for the collapse wrapper (forwarded).                                              |
| `bodyClassName`     | `string` | —       | Additional classes for the collapse body (forwarded).                                                 |
| `useBsClasses`      | `bool`   | `true`  | If `false`, disables Bootstrap-like classes on the underlying collapse elements.                      |
| `...rest`           | any      | —       | Passed to `AccordionItem`.                                                                            |

Notes:
- `isSingleCollapse` and `isNavCollapse` are always enforced internally; do not pass them.

---

## NavbarList

A wrapper for the nav list.

| Prop           | Type    | Default | Description                                               |
|----------------|---------|---------|-----------------------------------------------------------|
| `isScrollable` | `bool`  | `false` | Adds `navbar-nav-scroll` to make the nav vertically scrollable. |
| `className`    | `string`| —       | Additional classes.                                       |
| `useBsClasses` | `bool`  | `true`  | If `false`, disables Bootstrap-like classes.              |
| `...rest`      | any     | —       | Passed to the `<ul>` element.                             |

---

## NavbarListItem

A wrapper for each nav item.

| Prop           | Type     | Default | Description                                  |
|----------------|----------|---------|----------------------------------------------|
| `className`    | `string` | —       | Additional classes.                           |
| `useBsClasses` | `bool`   | `true`  | If `false`, disables Bootstrap-like classes.  |
| `...rest`      | any      | —       | Passed to the `<li>` element.                 |

---

## NavbarLink

A link inside the navbar.

| Prop        | Type    | Default | Description                                          |
|-------------|---------|---------|------------------------------------------------------|
| `isActive`  | `bool`  | `false` | Adds `active` and `aria-current="page"`.            |
| `href`      | `string`| `'#'`   | Link target URL.                                     |
| `className` | `string`| —       | Additional classes.                                  |
| `useBsClasses` | `bool` | `true`| If `false`, disables Bootstrap-like classes.         |
| `...rest`   | any     | —       | Passed to the `<a>` element.                         |

---

## NavbarText

Inline text within the navbar.

| Prop           | Type     | Default | Description                                  |
|----------------|----------|---------|----------------------------------------------|
| `className`    | `string` | —       | Additional classes.                           |
| `useBsClasses` | `bool`   | `true`  | If `false`, disables Bootstrap-like classes.  |
| `...rest`      | any      | —       | Passed to the `<span>` element.               |

---

## Example

All components imported from the same path:

```jsx
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarList,
  NavbarListItem,
  NavbarLink,
  NavbarText,
} from 'prestyler/react-jsx/';

export default function NavbarExample() {
  return (
    <Navbar collapseBreakpoint="lg" isDark style={{ paddingInline: 16 }}>
      <NavbarBrand href="#">Prestyler</NavbarBrand>
      <NavbarToggle aria-controls="main-navbar" />
      <NavbarCollapse id="main-navbar" collapseClassName="my-collapse">
        <NavbarList isScrollable style={{ maxHeight: 200 }}>
          <NavbarListItem>
            <NavbarLink isActive href="#home">Home</NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink href="#features">Features</NavbarLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavbarLink href="#pricing">Pricing</NavbarLink>
          </NavbarListItem>
          <NavbarText>Signed in as Mark</NavbarText>
        </NavbarList>
      </NavbarCollapse>
    </Navbar>
  );
}
```

---

## Notes

- Use `NavbarToggle` and `NavbarCollapse` together; open/close state is managed by the `Navbar` context.
- Set `useBsClasses={false}` on any component to disable Bootstrap-like classes (useful for custom styling).
- `NavbarCollapse` is powered by `AccordionItem` (single, nav-aware collapse).
