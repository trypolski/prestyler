import React from 'react';
import PropTypes from 'prop-types';

import { usePrestylerPrefix } from '../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../utilities/utilities';
import { BUTTON_GROUP_SIZES } from './constants';

export default function ButtonGroup({
  className,
  children,
  useBsClasses = true,
  isLarge = false,
  isSmall = false,
  isVertical = false,
  ...props
}) {
  const prefix = usePrestylerPrefix();
  const defaultClasses = [isVertical ? 'btn-group-vertical' : 'btn-group'];
  if (isLarge) {
    defaultClasses.push(BUTTON_GROUP_SIZES.large);
  } else if (isSmall) {
    defaultClasses.push(BUTTON_GROUP_SIZES.small);
  }
  const fullClassName = getFullClassName(defaultClasses, prefix, useBsClasses, className);

  return (
    <div {...props} role="group" className={fullClassName}>
      {children}
    </div>
  );
}

ButtonGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  useBsClasses: PropTypes.bool,
  isLarge: PropTypes.bool,
  isSmall: PropTypes.bool,
  isVertical: PropTypes.bool,
};
