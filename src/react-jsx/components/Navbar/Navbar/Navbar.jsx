import React, { createContext, useState, useContext, useMemo } from 'react';
import Wrapper from '../../common/Wrapper/Wrapper';

const NavbarContext = createContext();

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const contextValue = useMemo(() => ({ isOpen, toggleNavbar }), [isOpen]);

  return (
    <NavbarContext.Provider value={contextValue}>
      <Wrapper {...props} wrapperClass="navbar" />
    </NavbarContext.Provider>
  );
}

export const useNavbar = () => useContext(NavbarContext);
