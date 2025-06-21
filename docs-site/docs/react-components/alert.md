---
sidebar_position: 2
---

# Alerts

The Prestyler Alert components provide a set of flexible, styled alert messages for your application. Each alert type is a React component that wraps a base alert and applies a Bootstrap style variant.

## Alert Types

You can use the following alert components:

| Component         | Description                        |
|-------------------|------------------------------------|
| `AlertPrimary`    | Primary alert                      |
| `AlertSecondary`  | Secondary alert                    |
| `AlertSuccess`    | Success alert                      |
| `AlertDanger`     | Danger/error alert                 |
| `AlertWarning`    | Warning alert                      |
| `AlertInfo`       | Informational alert                |
| `AlertLight`      | Light background alert             |
| `AlertDark`       | Dark background alert              |

All of these components accept the same props as the base `Alert` component, with the `variant` prop set automatically.

---

## Props

### Alert

| Prop               | Type      | Default   | Description                                                                                 |
|--------------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`         | `node`    | —         | Content of the alert.                                                                       |
| `variant`          | `string`  | `''`      | Alert style variant. Automatically set by each specific alert component.                    |
| `className`        | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses`     | `bool`    | `true`    | If `true`, applies Bootstrap classes with the configured prefix.                       |
| `isToggleable`     | `bool`    | `false`   | If `true`, enables fade and close button support.                                           |
| `show`            | `bool`    | —         | If `true` and `isToggleable`, shows the alert with fade animation.                          |
| `showCloseButton`  | `bool`    | —         | If `true` and `isToggleable`, renders a close button.                                       |
| `closeButtonLabel` | `string`  | —         | Custom label for the close button (for accessibility).                                      |
| `onClose`          | `func`    | `() => {}`| Callback fired when the close button is clicked.                                            |
| ...rest            |           |           | Any other props are passed to the underlying `<div>` element.                               |

### AlertLink

| Prop           | Type      | Default   | Description                                                                                 |
|----------------|-----------|-----------|---------------------------------------------------------------------------------------------|
| `children`     | `node`    | —         | Content of the link.                                                                        |
| `href`         | `string`  | `'#'`     | The URL for the link.                                                                       |
| `className`    | `string`  | —         | Additional custom CSS classes.                                                              |
| `useBsClasses` | `bool`    | `true`    | If `true`, applies Bootstrap-like classes with the configured prefix.                       |
| ...rest        |           |           | Any other props are passed to the underlying `<a>` element.                                 |

---

## Examples

### Primary Alert

```jsx
import { AlertPrimary } from 'prestyler/react/jsx';

<AlertPrimary>
  This is a primary alert—check it out!
</AlertPrimary>
```

### Dismissible (Toggleable) Alert

```jsx
import React, { useState } from 'react';
import { AlertSuccess } from 'prestyler/react/jsx';

export default function DismissibleAlertExample() {
  const [show, setShow] = useState(true);
  return (
    <AlertSuccess
      isToggleable
      show={show}
      showCloseButton
      onClose={() => setShow(false)}
    >
      This is a success alert with a close button!
    </AlertSuccess>
  );
}
```

### Alert with AlertLink

```jsx
import { AlertInfo, AlertLink } from 'prestyler/react/jsx';

<AlertInfo>
  For more info, visit our <AlertLink href="https://example.com">documentation</AlertLink>.
</AlertInfo>
```

### Custom Class and Props

```jsx
<AlertWarning className="my-custom-alert" id="custom-alert">
  Custom warning alert!
</AlertWarning>
```

---

## Notes

- All alerts use a prefix for Bootstrap classes, which can be configured in your project.
- The `isToggleable` prop enables fade and close button support, similar to Bootstrap's dismissible alerts.
- The `AlertLink` component is designed to be used inside alerts for styled links.
- The `useBsClasses` prop allows you to disable Bootstrap-style classes if you want to use only your
