---
sidebar_position: 15
---

# Nav

The Prestyler `Nav` component is a flexible wrapper for building Bootstrap-style navigations. It can render as a semantic `<nav>`, `<ul>`, or `<ol>` container and is intended to wrap items such as `NavbarListItem` (for list semantics) and `NavbarLink` (for links).

Use `Nav` to quickly switch between tabbed, pill, or underlined styles, and to control fill/justified behavior. You can also disable Bootstrap-like classes with `useBsClasses` for custom styling.

---

## Props

| Prop         | Type                         | Default | Description                                                                                     |
|--------------|------------------------------|---------|-------------------------------------------------------------------------------------------------|
| `children`   | `node`                       | —       | Nav content, typically `NavbarListItem` and/or `NavbarLink`.                                   |
| `tag`        | `'nav' \| 'ul' \| 'ol'`      | `'nav'` | Which HTML tag to render as the container.                                                      |
| `asTabs`     | `bool`                       | `false` | Applies tabbed style (`nav-tabs`).                                                              |
| `asPills`    | `bool`                       | `false` | Applies pill style (`nav-pills`).                                                               |
| `asUnderline`| `bool`                       | `false` | Applies underline style (`nav-underline`).                                                      |
| `fill`       | `bool`                       | `false` | Distributes nav items to fill all available width (`nav-fill`).                                 |
| `justify`    | `bool`                       | `false` | Makes nav items of equal width and justified (`nav-justified`).                                 |
| `className`  | `string`                     | —       | Additional custom classes for the container.                                                    |
| `useBsClasses` | `bool`                     | `true`  | If `false`, disables Bootstrap-like classes (uses only your custom `className`).                |
| `...rest`    | any                          | —       | Any other props are passed to the underlying element.                                           |

Notes:
- When `tag` is `'ul'` or `'ol'`, prefer wrapping links with `NavbarListItem` to preserve correct list semantics.
- `Nav` can act as a simple wrapper over `NavbarListItem` and `NavbarLink`.

---

## Example

```jsx
import React from 'react';
import { Nav, NavbarListItem, NavbarLink } from 'prestyler/react-jsx/';

export default function NavExample() {
  return (
    <>
      <Nav asUnderline style={{ marginBottom: 16 }}>
        <NavbarLink isActive href="#overview">Overview</NavbarLink>
        <NavbarLink href="#docs">Docs</NavbarLink>
        <NavbarLink href="#contact" className="disabled" aria-disabled="true" onClick={(e) => e.preventDefault()}>
          Disabled
        </NavbarLink>
      </Nav>

      <Nav tag="ul" asTabs fill>
        <NavbarListItem>
          <NavbarLink isActive href="#tab-1">Tab 1</NavbarLink>
        </NavbarListItem>
        <NavbarListItem>
          <NavbarLink href="#tab-2">Tab 2</NavbarLink>
        </NavbarListItem>
        <NavbarListItem>
          <NavbarLink href="#tab-3">Tab 3</NavbarLink>
        </NavbarListItem>
      </Nav>
    </>
  );
}
```

---

## Notes

- Combine `asTabs` or `asPills` with `fill` or `justify` to control layout behavior.
- Set `useBsClasses={false}` if you need full control over styling without Bootstrap-like classes.
- `Nav` works well as a wrapper for `NavbarListItem` and `NavbarLink`, enabling semantic and styled navigation structures.
