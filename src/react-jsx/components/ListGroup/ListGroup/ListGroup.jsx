import React from 'react';
import PropTypes from 'prop-types';
import { usePrestylerClassBuilder } from '../../../hooks/usePrestylerPrefix';
import { LIST_GROUP_CLASSES } from '../constants';

export default function ListGroup({
  isFlush,
  isNumbered,
  isHorizontal,
  horizontalViewport = '',
  ...props
}) {
  const { prestylerFullClassName, children, ...restProps } = usePrestylerClassBuilder(
    [
      LIST_GROUP_CLASSES.listGroup,
      isFlush ? LIST_GROUP_CLASSES.listGroupFlush : '',
      isNumbered ? LIST_GROUP_CLASSES.listGroupNumbered : '',
      isHorizontal
        ? `${LIST_GROUP_CLASSES.listGroupHorizontal}${horizontalViewport ? `-${horizontalViewport}` : ''}`
        : '',
    ],
    props
  );

  if (isNumbered) {
    return (
      <ol {...restProps} className={prestylerFullClassName}>
        {children}
      </ol>
    );
  }

  return (
    <ul {...restProps} className={prestylerFullClassName}>
      {children}
    </ul>
  );
}

ListGroup.propTypes = {
  isFlush: PropTypes.bool,
  isNumbered: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  horizontalViewport: PropTypes.string,
};
