import React from 'react';
import PropTypes from 'prop-types';
import { usePrestylerClassBuilder } from '../../../hooks/usePrestylerPrefix';

export default function NavbarLink({ isActive = false, ...props }) {
  const { prestylerFullClassName, children, ...restProps } = usePrestylerClassBuilder(
    ['nav-link', isActive ? 'active' : ''],
    props
  );

  if (isActive) {
    restProps['aria-current'] = 'page';
  }

  return (
    <a {...restProps} className={prestylerFullClassName}>
      {children}
    </a>
  );
}

NavbarLink.propTypes = {
  isActive: PropTypes.bool,
};
