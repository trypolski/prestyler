import React from 'react';
import PropTypes from 'prop-types';
import { usePrestylerPrefix } from '../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../utilities/utilities';

export default function BreadcrumbItem({
  children,
  className = '',
  url = '#',
  isActive = false,
  useBsClasses = true,
  urlProps = {},
  itemProps = {},
}) {
  const prefix = usePrestylerPrefix();
  const listItemClasses = ['breadcrumb-item'];
  if (isActive) {
    listItemClasses.push('active');
  }
  const fullClassName = getFullClassName(listItemClasses, prefix, useBsClasses, className);

  return (
    <li {...itemProps} className={fullClassName} {...(isActive ? { 'aria-current': 'page' } : {})}>
      {isActive ? (
        children
      ) : (
        <a {...urlProps} href={url}>
          {children}
        </a>
      )}
    </li>
  );
}

BreadcrumbItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  url: PropTypes.string,
  urlProps: PropTypes.object,
  isActive: PropTypes.bool,
  useBsClasses: PropTypes.bool,
  itemProps: PropTypes.object,
};
