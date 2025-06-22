---
sidebar_position: 3
---

# Badges

The Prestyler Badges components provide a set of styled badge elements for labeling, highlighting, or indicating status in your UI. Each badge type is a React component that wraps a base badge and applies a Bootstrap-like style variant.

## Badge Types

You can use the following badge components:

| Component         | Description                        |
|-------------------|------------------------------------|
| `BadgePrimary`    | Primary badge                      |
| `BadgeSecondary`  | Secondary badge                    |
| `BadgeSuccess`    | Success badge                      |
| `BadgeDanger`     | Danger/error badge                 |
| `BadgeWarning`    | Warning badge                      |
| `BadgeInfo`       | Informational badge                |
| `BadgeLight`      | Light background badge             |
| `BadgeDark`       | Dark background badge              |

All of these components accept the same props as the base `Badge` component, with the `variant` prop set automatically.

---

## Props

| Prop             | Type      | Default         | Description                                                                                 |
|------------------|-----------|-----------------|---------------------------------------------------------------------------------------------|
| `id`             | `string`  | `''`            | The id attribute for the badge element.                                                     |
| `variant`        | `string`  | `''`            | Badge style variant. Automatically set by each specific badge component.                    |
| `children`       | `node`    | —               | Content of the badge.                                                                       |
| `className`      | `string`  | —               | Additional custom CSS classes.                                                              |
| `useBsClasses`   | `bool`    | `true`          | If `true`, applies Bootstrap-like classes with the configured prefix.                       |
| `isRounded`      | `bool`    | `false`         | If `true`, applies the `rounded-pill` class for pill-shaped badges.                         |
| `isAbsolute`     | `bool`    | `false`         | If `true`, positions the badge absolutely (for overlays, etc.).                             |
| `isIndicator`    | `bool`    | `false`         | If `true`, renders the badge as a visually hidden indicator (for notification dots, etc.).  |
| `indicatorLabel` | `string`  | `'New alerts'`  | Accessible label for indicator badges (used with `isIndicator`).                            |
| ...rest          |           |                 | Any other props are passed to the underlying `<span>` element.                              |

---

## Examples

### Primary Badge

```jsx
import { BadgePrimary } from 'prestyler/react/jsx';

<BadgePrimary>Primary</BadgePrimary>
```

### Rounded Success Badge

```jsx
import { BadgeSuccess } from 'prestyler/react/jsx';

<BadgeSuccess isRounded>Success</BadgeSuccess>
```

### Absolute Positioned Warning Badge

```jsx
import { BadgeWarning } from 'prestyler/react/jsx';

<div style={{ position: 'relative', display: 'inline-block' }}>
  Notifications
  <BadgeWarning isAbsolute style={{ fontSize: 10 }}>3</BadgeWarning>
</div>
```

### Indicator Badge

```jsx
import { BadgeDanger } from 'prestyler/react/jsx';

<div style={{ position: 'relative', display: 'inline-block' }}>
  Inbox
  <BadgeDanger isIndicator indicatorLabel="3 new messages" />
</div>
```

### Custom Class and Props

```jsx
<BadgeInfo className="my-custom-badge" id="info-badge">
  Info
</BadgeInfo>
```

---

## Notes

- All badges use a prefix for Bootstrap classes, which can be configured in your project.
- The `isRounded` prop gives the badge a pill shape.
- The `isAbsolute` and `isIndicator` props are useful for notification dots or overlays.
- The `indicatorLabel` prop is important for accessibility when using `isIndicator`.
- The `useBsClasses` prop allows you to disable Bootstrap-style classes if you want to use only your custom styles.

---