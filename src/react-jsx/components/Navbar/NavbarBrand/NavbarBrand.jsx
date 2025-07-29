import React from 'react';
import PropTypes from 'prop-types';
import { usePrestylerClassBuilder } from '../../../hooks/usePrestylerPrefix';

export default function NavbarBrand({ isText, ...props }) {
  const { prestylerFullClassName, children, ...restProps } = usePrestylerClassBuilder(
    'navbar-brand',
    props
  );
  if (isText) {
    return (
      <span {...restProps} className={prestylerFullClassName}>
        {children}
      </span>
    );
  }
  return (
    <a {...restProps} className={prestylerFullClassName}>
      {children}
    </a>
  );
}

NavbarBrand.propTypes = {
  isText: PropTypes.bool,
};
