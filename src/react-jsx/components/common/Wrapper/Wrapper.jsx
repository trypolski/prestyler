import React from 'react';
import PropTypes from 'prop-types';

import { usePrestylerClassBuilder } from '../../../hooks/usePrestylerPrefix';

export default function Wrapper({ tag: Tag = 'div', wrapperClass, ...props }) {
  const { prestylerFullClassName, children, ...restProps } = usePrestylerClassBuilder(
    wrapperClass,
    props
  );

  return (
    <Tag {...restProps} className={prestylerFullClassName}>
      {children}
    </Tag>
  );
}

Wrapper.propTypes = {
  tag: PropTypes.oneOf(['div', 'p', 'ul']),
  wrapperClass: PropTypes.string,
};
