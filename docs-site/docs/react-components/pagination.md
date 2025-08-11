---
sidebar_position: 17
---

# Pagination

The Prestyler Pagination suite provides flexible, accessible pagination controls with Bootstrap-like styling. It includes a main container, item wrapper, and link component for building paginated navigation.

---

## Pagination

The main pagination container, rendered as a `<ul>` by default.

| Prop         | Type    | Default | Description                                                        |
|--------------|---------|---------|--------------------------------------------------------------------|
| `isLarge`    | `bool`  | `false` | Adds large size class (`pagination-lg`).                           |
| `isSmall`    | `bool`  | `false` | Adds small size class (`pagination-sm`).                           |
| `className`  | `string`| —       | Additional custom classes for the container.                       |
| `useBsClasses` | `bool` | `true` | If `false`, disables Bootstrap-like classes.                       |
| `...rest`    | any     | —       | Passed to the root `<ul>` element.                                 |

---

## PaginationItem

A wrapper for each pagination item, rendered as a `<li>`.

| Prop         | Type    | Default | Description                                                        |
|--------------|---------|---------|--------------------------------------------------------------------|
| `isActive`   | `bool`  | `false` | Adds active class (`page-item active`).                            |
| `disabled`   | `bool`  | `false` | Adds disabled class (`page-item disabled`).                        |
| `className`  | `string`| —       | Additional custom classes for the item.                            |
| `useBsClasses` | `bool` | `true` | If `false`, disables Bootstrap-like classes.                       |
| `...rest`    | any     | —       | Passed to the `<li>` element.                                      |

---

## PaginationLink

A link or span inside a pagination item.

| Prop         | Type    | Default | Description                                                        |
|--------------|---------|---------|--------------------------------------------------------------------|
| `disabled`   | `bool`  | `false` | Renders as `<span>` with disabled class if true, otherwise as `<a>`.|
| `className`  | `string`| —       | Additional custom classes for the link.                            |
| `useBsClasses` | `bool` | `true` | If `false`, disables Bootstrap-like classes.                       |
| `...rest`    | any     | —       | Passed to the `<a>` or `<span>` element.                           |

---

## Example

All components imported from the same path:

```jsx
import React, { useState } from 'react';
import {
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'prestyler/react-jsx/';

export default function PaginationDocsExample() {
  const [page, setPage] = useState(2);
  const numPages = 5;

  const goTo = (p) => (e) => {
    e.preventDefault();
    setPage(Math.max(1, Math.min(numPages, p)));
  };

  return (
    <Pagination isLarge>
      <PaginationItem disabled={page === 1}>
        <PaginationLink href="#" aria-label="Previous" disabled={page === 1} onClick={goTo(page - 1)}>
          ‹ Prev
        </PaginationLink>
      </PaginationItem>
      {Array.from({ length: numPages }, (_, i) => (
        <PaginationItem key={i + 1} isActive={page === i + 1}>
          <PaginationLink href="#" aria-current={page === i + 1 ? 'page' : undefined} onClick={goTo(i + 1)}>
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ))}
      <PaginationItem disabled={page === numPages}>
        <PaginationLink href="#" aria-label="Next" disabled={page === numPages} onClick={goTo(page + 1)}>
          Next ›
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
}
```

---

## Notes

- Use `isLarge` or `isSmall` on `Pagination` for sizing.
- Use `isActive` and `disabled` on `PaginationItem` for state.
- Use `disabled` on `PaginationLink` to render as a non-interactive span.
- Set `useBsClasses={false}` on any component to disable Bootstrap-like classes for custom styling.
