import React from 'react';
import PropTypes from 'prop-types';
import ButtonBaseComponent from '../ButtonBaseComponent/ButtonBaseComponent';
import { BUTTON_CLASSES, BUTTON_SIZES } from '../constants';

export default function Button({
  variant = 'default',
  isLarge,
  isSmall,
  isOutlined,
  isToggleable,
  isActive,
  isDropdownToggle = false,
  isDropdownToggleSplit = false,
  show = false,
  ...props
}) {
  let bsClasses = ['btn'];
  if (variant !== 'default') {
    bsClasses.push(BUTTON_CLASSES[variant]);
  }

  const isCloseButton = variant === 'close';
  if (isLarge) bsClasses.push(BUTTON_SIZES.large);
  if (isSmall) bsClasses.push(BUTTON_SIZES.small);
  if (!isCloseButton) {
    if (isOutlined) bsClasses = bsClasses.map((cls) => cls.replace('btn-', 'btn-outline-'));
    if (isToggleable && isActive) bsClasses.push('active');
  }
  if (isDropdownToggle) {
    bsClasses.push(BUTTON_CLASSES.dropdownToggle);
    if (show) {
      bsClasses.push(BUTTON_CLASSES.dropdownShow);
    }
    if (isDropdownToggleSplit) {
      bsClasses.push(BUTTON_CLASSES.dropdownToggleSplit);
    }
  }

  const closeButtonProps = isCloseButton
    ? {
        'aria-label': props['aria-label'] || 'Close',
        children: null,
      }
    : {};

  return (
    <ButtonBaseComponent
      {...props}
      {...(isToggleable && !isCloseButton
        ? { 'data-bs-toggle': 'button', 'aria-pressed': isActive }
        : {})}
      {...closeButtonProps}
      bsClasses={bsClasses.join(' ')}
    />
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['default', ...Object.keys(BUTTON_CLASSES)]),
  isLarge: PropTypes.bool,
  isSmall: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isToggleable: PropTypes.bool,
  isActive: PropTypes.bool,
  'aria-label': PropTypes.string,
  isDropdownToggle: PropTypes.bool,
  isDropdownToggleSplit: PropTypes.bool,
  show: PropTypes.bool,
};
