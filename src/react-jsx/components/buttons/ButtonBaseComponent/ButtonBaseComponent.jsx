import React from 'react';
import PropTypes from 'prop-types';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';

export default function ButtonBaseComponent({
  children,
  className = '',
  useBsClasses = true,
  bsClasses = '',
  isLink = false,
  ...restProps
}) {
  const prefix = usePrestylerPrefix();
  const prefixedBsClasses = bsClasses
    ? bsClasses
        .split(' ')
        .map((bsClass) => `${prefix}${bsClass}`)
        .join(' ')
    : '';
  const fullClassName = `${useBsClasses ? prefixedBsClasses : ''} ${className}`.trim();

  return isLink ? (
    <a className={fullClassName} role="button" {...restProps}>
      {children}
    </a>
  ) : (
    <button className={fullClassName} type="button" {...restProps}>
      {children}
    </button>
  );
}

ButtonBaseComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  useBsClasses: PropTypes.bool,
  bsClasses: PropTypes.string,
  isLink: PropTypes.bool,
};
