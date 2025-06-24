import React from 'react';
import PropTypes from 'prop-types';

import { usePrestylerClassBuilder } from '../../../hooks/usePrestylerPrefix';

export default function Card(props) {
  const { prestylerFullClassName, children, ...restProps } = usePrestylerClassBuilder(
    'card',
    props
  );

  return (
    <div {...restProps} className={prestylerFullClassName}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  useBsClasses: PropTypes.bool,
};
