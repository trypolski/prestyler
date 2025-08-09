import React from 'react';
import PropTypes from 'prop-types';
import { useNavbar } from '../Navbar/Navbar';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../../utilities/utilities';

export default function NavbarToggle({ children, useBsClasses = true, className = '', ...props }) {
  const { isOpen, toggleNavbar } = useNavbar();
  const prefix = usePrestylerPrefix();
  const fullTogglerClassName = getFullClassName(
    ['navbar-toggler', isOpen ? '' : 'collapsed'],
    prefix,
    useBsClasses,
    className
  );

  const fullTogglerIconClassName = getFullClassName('navbar-toggler-icon', prefix, useBsClasses);

  return (
    <button
      aria-controls="navbarSupportedContent"
      aria-label="Toggle navigation"
      {...props}
      className={fullTogglerClassName}
      type="button"
      aria-expanded={isOpen}
      onClick={toggleNavbar}
    >
      {children || <span className={fullTogglerIconClassName} />}
    </button>
  );
}

NavbarToggle.propTypes = {
  children: PropTypes.node,
  useBsClasses: PropTypes.bool,
  className: PropTypes.string,
};
