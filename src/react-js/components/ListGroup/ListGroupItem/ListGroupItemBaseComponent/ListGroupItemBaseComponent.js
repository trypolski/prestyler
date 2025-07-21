import React from 'react';
import PropTypes from 'prop-types';
import { usePrestylerClassBuilder } from '../../../../hooks/usePrestylerPrefix';
import { LIST_GROUP_CLASSES, LIST_GROUP_ITEM_VARIANTS } from '../../constants';

export default function ListGroupItem({
  isActive = false,
  isLink = false,
  isButton = false,
  isHorizontalEqualWidth = false,
  variant = '',
  ...props
}) {
  const isLinkOrButton = isLink || isButton;
  const listItemClass = LIST_GROUP_CLASSES.listGroupItem;
  const { prestylerFullClassName, children, ...restProps } = usePrestylerClassBuilder(
    [
      listItemClass,
      variant ? `${listItemClass}-${variant}` : '',
      isActive ? LIST_GROUP_CLASSES.listGroupItemActive : '',
      isLinkOrButton ? LIST_GROUP_CLASSES.listGroupItemAction : '',
      isLinkOrButton && props.disabled ? LIST_GROUP_CLASSES.listGroupItemDisabled : '',
      isHorizontalEqualWidth ? LIST_GROUP_CLASSES.listGroupItemHorizontalEqualWidth : '',
    ],
    props
  );

  if (isActive) {
    restProps['aria-current'] = 'true';
  }

  if (props.disabled) {
    restProps['aria-disabled'] = 'true';
  }

  if (isLink) {
    return (
      <a {...restProps} className={prestylerFullClassName}>
        {children}
      </a>
    );
  }

  if (isButton) {
    return (
      <button type="button" {...restProps} className={prestylerFullClassName}>
        {children}
      </button>
    );
  }

  return (
    <li {...restProps} className={prestylerFullClassName}>
      {children}
    </li>
  );
}

ListGroupItem.propTypes = {
  isActive: PropTypes.bool,
  isLink: PropTypes.bool,
  isButton: PropTypes.bool,
  disabled: PropTypes.bool,
  isHorizontalEqualWidth: PropTypes.bool,
  variant: PropTypes.oneOf(Object.values(LIST_GROUP_ITEM_VARIANTS)),
};
