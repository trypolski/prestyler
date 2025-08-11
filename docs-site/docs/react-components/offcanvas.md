---
sidebar_position: 16
---

# Offcanvas

The Prestyler Offcanvas suite provides a flexible, accessible sliding panel with a backdrop and body scroll locking. It includes subcomponents for a standard header, title, and body, and supports controlled open/close with transition phases.

---

## Offcanvas

The main offcanvas container. Controlled via the `show` prop. It renders a backdrop when visible and locks body scrolling unless explicitly disabled.

| Prop                   | Type                                           | Default  | Description                                                                                                       |
|------------------------|------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------|
| `show`                 | `bool`                                         | `false`  | Controls visibility. When `true`, renders the panel and the backdrop.                                            |
| `breakpoint`           | `'' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'`  | `''`     | Adds responsive class (e.g., `offcanvas-sm`, `offcanvas-lg`). `''` uses base `offcanvas`.                         |
| `placement`            | `'start' \| 'end' \| 'top' \| 'bottom'`        | `'start'`| Slide-in placement.                                                                                               |
| `enableBodyScroll`     | `bool`                                         | `false`  | When `false` and `show` is `true`, body scroll is locked.                                                         |
| `closeOnBackdropClick` | `bool`                                         | `true`   | If `true`, clicking the backdrop calls `onRequestClose`.                                                          |
| `onRequestClose`       | `func`                                         | —        | Callback fired to request closing (e.g., on backdrop click). Parent should set `show` to `false`.                 |
| `useBsClasses`         | `bool`                                         | `true`   | If `false`, disables Bootstrap-like classes for both the panel and the backdrop.                                  |
| `className`            | `string`                                       | —        | Additional custom classes for the offcanvas container.                                                             |
| `...rest`              | any                                            | —        | Passed to the root offcanvas element.                                                                             |

Behavior:
- Controlled component: parent owns `show`. The component requests closing via `onRequestClose`.
- Transition phases: when opening adds `showing` then switches to `show` after transition end; when closing adds `hiding` and removes `show` after transition end.
- Backdrop is rendered while open (and during closing animation), and can close the panel if `closeOnBackdropClick` is `true`.

---

## OffcanvasHeader

Container for header content, typically holds `OffcanvasTitle` and a close button.

| Prop           | Type     | Default | Description                         |
|----------------|----------|---------|-------------------------------------|
| `children`     | `node`   | —       | Header content.                     |
| `className`    | `string` | —       | Additional custom classes.          |
| `useBsClasses` | `bool`   | `true`  | Disable Bootstrap-like classes.     |
| `...rest`      | any      | —       | Passed to the header element.       |

---

## OffcanvasTitle

Title element inside the header.

| Prop           | Type     | Default | Description                         |
|----------------|----------|---------|-------------------------------------|
| `tag`          | `string`  | `'h5'`    | Heading tag to use (`'h1'`–`'h6'`).                                                         |
| `children`     | `node`   | —       | Title content.                      |
| `className`    | `string` | —       | Additional custom classes.          |
| `useBsClasses` | `bool`   | `true`  | Disable Bootstrap-like classes.     |
| `...rest`      | any      | —       | Passed to the title element.        |

---

## OffcanvasBody

Scrollable body area for the panel content.

| Prop           | Type     | Default | Description                         |
|----------------|----------|---------|-------------------------------------|
| `children`     | `node`   | —       | Body content.                       |
| `className`    | `string` | —       | Additional custom classes.          |
| `useBsClasses` | `bool`   | `true`  | Disable Bootstrap-like classes.     |
| `...rest`      | any      | —       | Passed to the body element.         |

---

## Example

All components imported from the same path:

```jsx
import React from 'react';
import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasTitle,
  OffcanvasBody,
  PrimaryButton,
  SecondaryButton,
  CloseButton,
} from 'prestyler/react-jsx/';

export default function OffcanvasDocsExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ padding: 16 }}>
      <PrimaryButton onClick={() => setOpen(true)}>
        Open Offcanvas
      </PrimaryButton>

      <Offcanvas
        show={open}
        breakpoint="lg"
        placement="start"
        enableBodyScroll={false}
        closeOnBackdropClick
        onRequestClose={() => setOpen(false)}
        style={{ width: 320 }}
      >
        <OffcanvasHeader>
          <OffcanvasTitle>Menu</OffcanvasTitle>
          <CloseButton aria-label="Close" onClick={() => setOpen(false)} style={{ marginLeft: 'auto' }} />
        </OffcanvasHeader>

        <OffcanvasBody>
          <p>Put your navigation or actions here.</p>
          <div style={{ display: 'flex', gap: 8 }}>
            <SecondaryButton onClick={() => setOpen(false)}>Close</SecondaryButton>
          </div>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
}
```

---

## Notes

- Keep the component controlled: manage `show` in the parent and respond to `onRequestClose`.
- Combine `breakpoint` and `placement` to match your responsive and layout needs.
- Set `useBsClasses={false}` to disable Bootstrap-like classes for custom styling.
