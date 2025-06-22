import React from 'react';
import PropTypes from 'prop-types';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { BADGE_CLASSES } from '../constants';
import { getFullClassName } from '../../../utilities/utilities';

export default function Badge({
  id = '',
  variant = '',
  children,
  className,
  useBsClasses = true,
  isRounded = false,
  isAbsolute = false,
  isIndicator = false,
  indicatorLabel = 'New alerts',
  ...props
}) {
  const prefix = usePrestylerPrefix();

  let bsClasses = ['badge'];
  if (variant) {
    bsClasses.push(BADGE_CLASSES[variant]);
  }
  if (isRounded) {
    bsClasses.push('rounded-pill');
  }
  if (isAbsolute || isIndicator) {
    bsClasses = bsClasses.concat(['position-absolute', 'top-0', 'start-100', 'translate-middle']);
  }
  if (isIndicator) {
    bsClasses = bsClasses.concat(['border', 'border-light', 'rounded-circle', 'p-2']);
  }

  const fullClassName = getFullClassName(bsClasses, prefix, useBsClasses, className);
  return (
    <span {...props} className={fullClassName} data-testid={`badge-wrapper${`-${id}`}`} id={id}>
      {isIndicator ? (
        <span className={`${prefix}visually-hidden`} data-testid={`badge-indicator${`-${id}`}`}>
          {indicatorLabel}
        </span>
      ) : (
        children
      )}
    </span>
  );
}

Badge.propTypes = {
  id: PropTypes.string,
  variant: PropTypes.oneOf(['', ...Object.keys(BADGE_CLASSES)]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  useBsClasses: PropTypes.bool,
  isRounded: PropTypes.bool,
  isAbsolute: PropTypes.bool,
  isIndicator: PropTypes.bool,
  indicatorLabel: PropTypes.string,
};
