---
sidebar_position: 4
---

# Breadcrumb

The Prestyler Breadcrumb components provide accessible, customizable breadcrumb navigation for your application. The `Breadcrumb` component acts as a container, while `BreadcrumbItem` represents each step in the navigation path.

---

## Breadcrumb Component

### Props

| Prop           | Type      | Default                        | Description                                                                                 |
|----------------|-----------|--------------------------------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —                              | One or more `BreadcrumbItem` components.                                                    |
| `className`    | `string`  | `''`                           | Additional custom CSS classes for the `<ol>` element.                                       |
| `useBsClasses` | `bool`    | `true`                         | If `true`, applies Bootstrap-like classes with the configured prefix.                       |
| `navProps`     | `object`  | `{ 'aria-label': 'Breadcrumb' }`| Props to pass to the `<nav>` element (e.g., custom `aria-label`, `data-*`, etc.).           |
| `listProps`    | `object`  | `{}`                           | Props to pass to the `<ol>` element (e.g., `id`, `data-*`, etc.).                          |

---

## BreadcrumbItem Component

### Props

| Prop           | Type      | Default      | Description                                                                                 |
|----------------|-----------|--------------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —            | Content of the breadcrumb item (text or element).                                           |
| `className`    | `string`  | `''`         | Additional custom CSS classes for the `<li>` element.                                       |
| `url`          | `string`  | `'#'`        | The URL for the breadcrumb link. Ignored if `isActive` is `true`.                           |
| `isActive`     | `bool`    | `false`      | If `true`, renders the item as the current page (no link, adds `aria-current="page"`).      |
| `useBsClasses` | `bool`    | `true`       | If `true`, applies Bootstrap-like classes with the configured prefix.                       |
| `urlProps`     | `object`  | `{}`         | Additional props for the `<a>` element (e.g., `target`, `rel`, `data-*`).                   |
| `itemProps`    | `object`  | `{}`         | Additional props for the `<li>` element (e.g., `id`, `data-*`).                             |

---

## Examples

### Basic Breadcrumb

```jsx
import { Breadcrumb, BreadcrumbItem } from 'prestyler/react/jsx';

<Breadcrumb>
  <BreadcrumbItem url="/">Home</BreadcrumbItem>
  <BreadcrumbItem url="/library">Library</BreadcrumbItem>
  <BreadcrumbItem url="/date" isActive>Data</BreadcrumbItem>
</Breadcrumb>
```

### Breadcrumb with Custom Classes and Props

```jsx
<Breadcrumb
  className="my-breadcrumb"
  navProps={{ 'aria-label': 'Custom Breadcrumb', id: 'main-nav' }}
  listProps={{ id: 'main-list', 'data-testid': 'breadcrumb-list' }}
>
  <BreadcrumbItem
    url="/"
    className="custom-li"
    itemProps={{ id: 'home-li', 'data-testid': 'home-item' }}
    urlProps={{ target: '_blank', rel: 'noopener' }}
  >
    Home
  </BreadcrumbItem>
  <BreadcrumbItem url="/" isActive className="current-page">
    Current
  </BreadcrumbItem>
</Breadcrumb>
```

### Breadcrumb Without Bootstrap Classes

```jsx
<Breadcrumb useBsClasses={false}>
  <BreadcrumbItem useBsClasses={false} url="/">Home</BreadcrumbItem>
  <BreadcrumbItem useBsClasses={false} isActive>Current</BreadcrumbItem>
</Breadcrumb>
```

---

## Notes

- The `Breadcrumb` component renders a `<nav>` with an `<ol>` list. The default `aria-label` is `"Breadcrumb"`, but you can override it via `navProps`.
- Each `BreadcrumbItem` renders as an `<li>`. If `isActive` is `false`, it renders an `<a>` link; if `true`, it renders only the children and adds `aria-current="page"` and the `active` class.
- You can pass additional props to the `<nav>`, `<ol>`, `<li>`, and `<a>` elements using `navProps`, `listProps`, `itemProps`, and `urlProps` respectively.
- The `useBsClasses` prop allows you to enable or disable Bootstrap-style classes and prefixing for both components.

---