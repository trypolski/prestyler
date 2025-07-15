import React from 'react';
import Wrapper from '../../common/Wrapper/Wrapper';
import { DROPDOWN_CLASSES } from '../constants';
import { useDropdown } from '../Dropdown/Dropdown';

export default function DropdownMenu(props) {
  const { showDropdown, refs, floatingStyles } = useDropdown();
  return (
    <Wrapper
      {...props}
      tag="ul"
      wrapperClass={[
        DROPDOWN_CLASSES.dropdownMenu,
        showDropdown ? DROPDOWN_CLASSES.dropdownShow : '',
      ]}
      ref={refs.setFloating}
      style={floatingStyles}
    />
  );
}
