import React from 'react';
import PropTypes from 'prop-types';

import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../../utilities/utilities';
import { CARD_CLASSES } from '../constants';

export default function CardImage({
  className = '',
  useBsClasses = true,
  src,
  isBottom = false,
  alt = '',
  ...props
}) {
  const prefix = usePrestylerPrefix();
  const fullClassName = getFullClassName(
    isBottom ? CARD_CLASSES.cardImgBottom : CARD_CLASSES.cardImgTop,
    prefix,
    useBsClasses,
    className
  );

  return <img {...props} src={src} className={fullClassName} alt={alt} />;
}

CardImage.propTypes = {
  className: PropTypes.string,
  useBsClasses: PropTypes.bool,
  src: PropTypes.string,
  isBottom: PropTypes.bool,
  alt: PropTypes.string,
};
