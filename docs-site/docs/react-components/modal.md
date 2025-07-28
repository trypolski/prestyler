---
sidebar_position: 13
---

# Modal Components

The Prestyler Modal system provides a flexible, accessible, and customizable modal dialog solution.  
You can use these components together to build modals that match Bootstrap’s look and feel, with full React control and optional support for [react-modal](https://github.com/reactjs/react-modal) for accessibility and logic.

---

## Modal

The main wrapper for modals.  
You can use `Modal` as a pure Bootstrap-styled component (no logic, just markup and classes), or enable modal logic and accessibility by setting `useReactModal` to `true` (default).

- **If `useReactModal` is `false`**:  
  The modal is rendered as plain JSX with Bootstrap classes. You control visibility and logic yourself.
- **If `useReactModal` is `true`**:  
  The modal uses the [react-modal](https://github.com/reactjs/react-modal) library for accessibility, focus trap, keyboard, and backdrop logic.  
  All additional props (except `wrapperProps`, which is ignored) are passed directly to the underlying `react-modal` component.

### Props

| Prop             | Type      | Default   | Description                                                                                      |
|------------------|-----------|-----------|--------------------------------------------------------------------------------------------------|
| `show`           | `bool`    | `false`   | Controls whether the modal is open.                                                              |
| `children`       | `node`    | —         | Modal content (should include `ModalHeader`, `ModalBody`, `ModalFooter`, etc.).                  |
| `isFade`         | `bool`    | `false`   | Adds the Bootstrap `fade` class for transitions.                                                 |
| `isScrollable`   | `bool`    | `false`   | Adds the Bootstrap `modal-dialog-scrollable` class.                                              |
| `isCentered`     | `bool`    | `false`   | Adds the Bootstrap `modal-dialog-centered` class.                                                |
| `size`           | `string`  | `''`      | Sets modal size: `''`, `'sm'`, `'lg'`, `'xl'`.                                                   |
| `fullScreenSize` | `string`  | `''`      | Sets modal fullscreen breakpoint: `''`, `'all'`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'`.        |
| `useReactModal`  | `bool`    | `true`    | If `true`, uses [react-modal](https://github.com/reactjs/react-modal) for logic and accessibility.|
| `wrapperProps`   | `object`  | `{}`      | Props for the modal wrapper (ignored if `useReactModal` is `true`).                              |
| `dialogProps`    | `object`  | `{}`      | Props for the modal dialog element.                                                              |
| `contentProps`   | `object`  | `{}`      | Props for the modal content element.                                                             |
| `onRequestClose` | `func`    | —         | Called when the modal requests to be closed (only with `useReactModal`).                         |
| ...rest          |           |           | Any other props are passed to the main modal element (or to `react-modal` if enabled).           |

---

## ModalHeader

The header section of the modal.  
Usually contains a `ModalTitle` and a close button.

### Props

| Prop            | Type      | Default | Description                                 |
|-----------------|-----------|---------|---------------------------------------------|
| `children`      | `node`    | —       | Content of the header (e.g., `ModalTitle`). |
| `useBsClasses`  | `bool`    | `true`  | If `false`, disables Bootstrap class prefix. |
| `className`     | `string`  | —       | Additional classes for the header.           |
| ...props        |           |         | Any other props for the header element.      |

---

## ModalTitle

The title of the modal, usually placed inside `ModalHeader`.

### Props

| Prop            | Type      | Default | Description                                 |
|-----------------|-----------|---------|---------------------------------------------|
| `children`      | `node`    | —       | Title text or content.                      |
| `tag`           | `string`  | `'h5'`  | The HTML tag to use for the title.           |
| `useBsClasses`  | `bool`    | `true`  | If `false`, disables Bootstrap class prefix. |
| `className`     | `string`  | —       | Additional classes for the title.            |
| ...props        |           |         | Any other props for the title element.       |

---

## ModalBody

The main content area of the modal.

### Props

| Prop            | Type      | Default | Description                                 |
|-----------------|-----------|---------|---------------------------------------------|
| `children`      | `node`    | —       | Modal body content.                         |
| `useBsClasses`  | `bool`    | `true`  | If `false`, disables Bootstrap class prefix. |
| `className`     | `string`  | —       | Additional classes for the body.             |
| ...props        |           |         | Any other props for the body element.        |

---

## ModalFooter

The footer section of the modal, typically used for action buttons.

### Props

| Prop            | Type      | Default | Description                                 |
|-----------------|-----------|---------|---------------------------------------------|
| `children`      | `node`    | —       | Modal footer content.                       |
| `useBsClasses`  | `bool`    | `true`  | If `false`, disables Bootstrap class prefix. |
| `className`     | `string`  | —       | Additional classes for the footer.           |
| ...props        |           |         | Any other props for the footer element.      |

---

## Usage Example

```jsx
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  ModalFooter,
  PrimaryButton,
  SecondaryButton,
  CloseButton,
} from 'prestyler/react/jsx/';

function ExampleModal({ open, onClose }) {
  return (
    <Modal show={open} onRequestClose={onClose} isCentered size="lg">
      <ModalHeader>
        <ModalTitle>Modal Title</ModalTitle>
        <CloseButton aria-label="Close" onClick={onClose} style={{ marginLeft: 'auto' }} />
      </ModalHeader>
      <ModalBody>
        <p>
          This is the <strong>ModalBody</strong> content.
          You can put any content here, including forms, text, or other components.
        </p>
      </ModalBody>
      <ModalFooter>
        <SecondaryButton onClick={onClose}>Close</SecondaryButton>
        <PrimaryButton onClick={onClose}>Save changes</PrimaryButton>
      </ModalFooter>
    </Modal>
  );
}
```

---

## Notes

- **Logic:** By default, `Modal` uses [react-modal](https://github.com/reactjs/react-modal) for accessibility, focus trap, keyboard, and backdrop logic.  
  Set `useReactModal={false}` to use only Bootstrap classes and handle logic yourself.
- **Props:** When `useReactModal` is `true`, `wrapperProps` is ignored and all other props are passed to the underlying `react-modal` component.
- **Structure:** Use `ModalHeader`, `ModalTitle`, `ModalBody`, and `ModalFooter` for a complete modal layout.
- **Styling:** All components support disabling Bootstrap class prefixing via the `useBsClasses` prop.
---