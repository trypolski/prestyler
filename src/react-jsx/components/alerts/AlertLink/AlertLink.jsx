import React from 'react';
import PropTypes from 'prop-types';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../../utilities/utilities';

export default function AlertItem({
  children,
  href = '#',
  className = '',
  useBsClasses = true,
  ...props
}) {
  const prefix = usePrestylerPrefix();
  const fullClassName = getFullClassName('alert-link', prefix, useBsClasses, className);

  return (
    <a {...props} href={href} className={fullClassName}>
      {children}
    </a>
  );
}

AlertItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  className: PropTypes.string,
  useBsClasses: PropTypes.bool,
};
