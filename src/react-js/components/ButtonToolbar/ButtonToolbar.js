import React from 'react';
import PropTypes from 'prop-types';

import { usePrestylerPrefix } from '../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../utilities/utilities';

export default function ButtonToolbar({ className, children, useBsClasses = true, ...props }) {
  const prefix = usePrestylerPrefix();
  const fullClassName = getFullClassName('btn-toolbar', prefix, useBsClasses, className);

  return (
    <div {...props} role="toolbar" className={fullClassName}>
      {children}
    </div>
  );
}

ButtonToolbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  useBsClasses: PropTypes.bool,
};
