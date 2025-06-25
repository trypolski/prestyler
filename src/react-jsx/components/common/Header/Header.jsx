import React from 'react';
import PropTypes from 'prop-types';

import { usePrestylerClassBuilder } from '../../../hooks/usePrestylerPrefix';

export default function Header({ tag: Tag = 'h5', headerClass, ...props }) {
  const { prestylerFullClassName, children, ...restProps } = usePrestylerClassBuilder(
    headerClass,
    props
  );

  return (
    <Tag {...restProps} className={prestylerFullClassName}>
      {children}
    </Tag>
  );
}

Header.propTypes = {
  tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  headerClass: PropTypes.string,
};
