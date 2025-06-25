import React from 'react';
import PropTypes from 'prop-types';

import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../../utilities/utilities';
import { CARD_CLASSES } from '../constants';

export default function CardLink({
  className = '',
  useBsClasses = true,
  children,
  href = '#',
  ...props
}) {
  const prefix = usePrestylerPrefix();
  const fullClassName = getFullClassName(CARD_CLASSES.cardLink, prefix, useBsClasses, className);

  return (
    <a {...props} href={href} className={fullClassName}>
      {children}
    </a>
  );
}

CardLink.propTypes = {
  className: PropTypes.string,
  useBsClasses: PropTypes.bool,
  href: PropTypes.string,
  children: PropTypes.node,
};
