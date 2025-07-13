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
  ...props
}) {
  const prefix = usePrestylerPrefix();

  const listItemFullClassName = getFullClassName('', prefix, useBsClasses, listItemClassName);
  const linkFullClassName = getFullClassName(
    DROPDOWN_CLASSES.dropdownItem,
    prefix,
    useBsClasses,
    linkClassName
  );

  return (
    <li {...listItemProps} className={listItemFullClassName}>
      <a {...props} className={linkFullClassName} href={href}>
        {children}
      </a>
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
};
