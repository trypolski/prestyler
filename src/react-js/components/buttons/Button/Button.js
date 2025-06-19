import React from 'react';
import PropTypes from 'prop-types';
import ButtonBaseComponent from '../ButtonBaseComponent/ButtonBaseComponent';
import { BUTTON_CLASSES, BUTTON_SIZES } from '../constants';

export default function Button({ variant = 'default', isLarge, isSmall, isOutlined, ...props }) {
  let bsClasses = ['btn'];
  if (variant !== 'default') {
    bsClasses.push(BUTTON_CLASSES[variant]);
  }
  if (isOutlined) bsClasses = bsClasses.map((cls) => cls.replace('btn-', 'btn-outline-'));
  if (isLarge) bsClasses.push(BUTTON_SIZES.large);
  if (isSmall) bsClasses.push(BUTTON_SIZES.small);

  return <ButtonBaseComponent {...props} bsClasses={bsClasses.join(' ')} />;
}

Button.propTypes = {
  variant: PropTypes.oneOf(['default', ...Object.keys(BUTTON_CLASSES)]),
  isLarge: PropTypes.bool,
  isSmall: PropTypes.bool,
  isOutlined: PropTypes.bool,
};
