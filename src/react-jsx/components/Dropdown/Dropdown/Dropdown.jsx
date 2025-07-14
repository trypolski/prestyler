import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
// import { useFloating } from '@floating-ui/react-dom';
import Wrapper from '../../common/Wrapper/Wrapper';
import { DROPDOWN_CLASSES } from '../constants';

const DropdownContext = createContext();

export default function Dropdown({ show = false, isDropdownToggleSplit = false, ...props }) {
  const [showDropdown, setShowDropdown] = useState(show);
  const contextValue = useMemo(() => ({ showDropdown, setShowDropdown }), [showDropdown]);

  return (
    <DropdownContext.Provider value={contextValue}>
      <Wrapper
        {...props}
        wrapperClass={[DROPDOWN_CLASSES.dropdown, isDropdownToggleSplit ? 'btn-group' : '']}
      />
    </DropdownContext.Provider>
  );
}

Dropdown.propTypes = {
  show: PropTypes.bool,
  isDropdownToggleSplit: PropTypes.bool,
};

export const useDropdown = () => useContext(DropdownContext);
