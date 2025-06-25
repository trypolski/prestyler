import React from 'react';
import PropTypes from 'prop-types';

import { usePrestylerClassBuilder } from '../../hooks/usePrestylerPrefix';

export default function ButtonToolbar(props) {
  const { prestylerFullClassName, children, ...restProps } = usePrestylerClassBuilder(
    'btn-toolbar',
    props
  );
  return (
    <div {...restProps} role="toolbar" className={prestylerFullClassName}>
      {children}
    </div>
  );
}

ButtonToolbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  useBsClasses: PropTypes.bool,
};
