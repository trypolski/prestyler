import React from 'react';
import PropTypes from 'prop-types';
import { useDropdown } from '../Dropdown/Dropdown';

export default function DropdownToggle({
  buttonComponent: ButtonComponent = null,
  show: showProp,
  disableHookToggle = false,
  ...props
}) {
  const { showDropdown, setShowDropdown } = useDropdown();
  const showValue = typeof showProp === 'boolean' ? showProp : showDropdown;

  if (!ButtonComponent) return null;

  return (
    <ButtonComponent
      {...props}
      show={showValue}
      onClick={(e) => {
        if (props.onClick) props.onClick(e);
        if (!disableHookToggle) setShowDropdown((prev) => !prev);
      }}
      isDropdownToggle
    />
  );
}

DropdownToggle.propTypes = {
  buttonComponent: PropTypes.node,
  show: PropTypes.bool,
  onClick: PropTypes.func,
  disableHookToggle: PropTypes.bool,
};
