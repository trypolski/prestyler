import React, { createContext, useState, useEffect, useRef, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useFloating, offset, autoPlacement } from '@floating-ui/react-dom';
import Wrapper from '../../common/Wrapper/Wrapper';
import { DROPDOWN_CLASSES } from '../constants';

const DropdownContext = createContext();

const PLACEMENTS = {
  down: DROPDOWN_CLASSES.dropdown,
  top: DROPDOWN_CLASSES.dropdownTop,
  right: DROPDOWN_CLASSES.dropdownEnd,
  left: DROPDOWN_CLASSES.dropdownStart,
};

export default function Dropdown({
  show = false,
  isDropdownToggleSplit = false,
  useFloatingUI = false,
  floatingOptions = {},
  isButtonGroup = false,
  placement = 'down',
  autoClose = true,
  ...props
}) {
  const [showDropdown, setShowDropdown] = useState(show);
  const dropdownRef = useRef(null);
  const { refs, floatingStyles } = useFloatingUI
    ? useFloating({
        open: showDropdown,
        middleware: [offset(0), autoPlacement()],
        placement: 'bottom-start',
        strategy: 'fixed',
        ...floatingOptions,
      })
    : { refs: {}, floatingStyles: {} };

  useEffect(() => {
    if (!showDropdown || !autoClose) return;

    function handleClick(event) {
      const dropdownRefCurrent = dropdownRef.current;
      if (dropdownRefCurrent && !dropdownRefCurrent.contains(event.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClick);
    // eslint-disable-next-line consistent-return
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showDropdown, autoClose]);

  const contextValue = useMemo(
    () => ({
      showDropdown,
      setShowDropdown,
      refs,
      floatingStyles,
    }),
    [showDropdown, refs, floatingStyles]
  );

  const useButtonGroupClass = isButtonGroup || isDropdownToggleSplit;

  return (
    <DropdownContext.Provider value={contextValue}>
      <Wrapper
        {...props}
        ref={dropdownRef}
        wrapperClass={[
          !useFloatingUI && PLACEMENTS[placement],
          useButtonGroupClass ? 'btn-group' : '',
        ]}
      />
    </DropdownContext.Provider>
  );
}

Dropdown.propTypes = {
  show: PropTypes.bool,
  isDropdownToggleSplit: PropTypes.bool,
  floatingOptions: PropTypes.object,
  isButtonGroup: PropTypes.bool,
  useFloatingUI: PropTypes.bool,
  placement: PropTypes.oneOf(['down', 'top', 'right', 'left']),
  autoClose: PropTypes.bool,
};

export const useDropdown = () => useContext(DropdownContext);
