import React, { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useFloating, offset } from '@floating-ui/react-dom';
import Wrapper from '../../common/Wrapper/Wrapper';
import { DROPDOWN_CLASSES } from '../constants';

const DropdownContext = createContext();

export default function Dropdown({
  show = false,
  isDropdownToggleSplit = false,
  floatingOptions = {},
  ...props
}) {
  const [showDropdown, setShowDropdown] = useState(show);
  const { refs, floatingStyles } = useFloating({
    open: showDropdown,
    middleware: [offset(0)],
    placement: 'bottom-start',
    strategy: 'fixed',
    ...floatingOptions,
  });

  const contextValue = useMemo(
    () => ({
      showDropdown,
      setShowDropdown,
      refs,
      floatingStyles,
    }),
    [showDropdown, refs, floatingStyles]
  );

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
  floatingOptions: PropTypes.object,
};

export const useDropdown = () => useContext(DropdownContext);
