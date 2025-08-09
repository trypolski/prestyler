import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../common/Wrapper/Wrapper';

const NavbarContext = createContext();

export const COLLAPSE_BREAKPOINTS = {
  '': '',
  never: 'navbar-expand',
  sm: 'navbar-expand-sm',
  md: 'navbar-expand-md',
  lg: 'navbar-expand-lg',
  xl: 'navbar-expand-xl',
  xxl: 'navbar-expand-xxl',
};

export default function Navbar({ collapseBreakpoint = '', isDark = false, ...props }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const contextValue = useMemo(() => ({ isOpen, toggleNavbar }), [isOpen]);

  return (
    <NavbarContext.Provider value={contextValue}>
      <Wrapper
        {...props}
        wrapperClass={[
          'navbar',
          COLLAPSE_BREAKPOINTS[collapseBreakpoint],
          isDark ? 'navbar-dark' : '',
        ]}
      />
    </NavbarContext.Provider>
  );
}

export const useNavbar = () => useContext(NavbarContext);

Navbar.propTypes = {
  collapseBreakpoint: PropTypes.oneOf(Object.keys(COLLAPSE_BREAKPOINTS)),
  isDark: PropTypes.bool,
};
