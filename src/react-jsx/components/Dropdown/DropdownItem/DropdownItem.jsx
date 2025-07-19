import React from 'react';
import PropTypes from 'prop-types';
import { DROPDOWN_CLASSES } from '../constants';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../../utilities/utilities';

export default function DropdownItem({
  listItemClassName,
  linkClassName,
  children,
  useBsClasses = true,
  href = '#',
  listItemProps = {},
  isButton = false,
  isText = false,
  isLink = false,
  isActive = false,
  ...props
}) {
  const prefix = usePrestylerPrefix();

  const listItemFullClassName = getFullClassName('', prefix, useBsClasses, listItemClassName);
  const itemFullClassName = getFullClassName(
    [
      isText ? DROPDOWN_CLASSES.dropdownItemText : DROPDOWN_CLASSES.dropdownItem,
      isActive ? 'active' : '',
    ],
    prefix,
    useBsClasses,
    linkClassName
  );

  function renderItem() {
    if (isButton) {
      return (
        <button type="button" {...props} className={itemFullClassName}>
          {children}
        </button>
      );
    }
    if (isText) {
      return (
        <span {...props} className={itemFullClassName}>
          {children}
        </span>
      );
    }
    if (isLink) {
      return (
        <a {...props} className={itemFullClassName} href={href}>
          {children}
        </a>
      );
    }
    return children;
  }

  return (
    <li {...listItemProps} className={listItemFullClassName}>
      {renderItem()}
    </li>
  );
}

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  useBsClasses: PropTypes.bool,
  listItemClassName: PropTypes.string,
  linkClassName: PropTypes.string,
  href: PropTypes.string,
  listItemProps: PropTypes.object,
  isButton: PropTypes.bool,
  isText: PropTypes.bool,
  isLink: PropTypes.bool,
  isActive: PropTypes.bool,
};
