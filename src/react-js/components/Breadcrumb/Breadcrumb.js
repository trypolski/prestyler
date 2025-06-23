import React from 'react';
import PropTypes from 'prop-types';
import { usePrestylerPrefix } from '../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../utilities/utilities';

export default function Breadcrumb({
  children,
  className = '',
  useBsClasses = true,
  navProps = { 'aria-label': 'Breadcrumb' },
  listProps = {},
}) {
  const prefix = usePrestylerPrefix();
  const fullClassName = getFullClassName('breadcrumb', prefix, useBsClasses, className);

  return (
    <nav {...navProps}>
      <ol {...listProps} className={fullClassName}>
        {children}
      </ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  useBsClasses: PropTypes.bool,
  navProps: PropTypes.object,
  listProps: PropTypes.object,
};
