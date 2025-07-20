import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../common/Wrapper/Wrapper';
import { DROPDOWN_CLASSES, DROPDOWN_ALIGNMENT_CLASSES } from '../constants';
import { useDropdown } from '../Dropdown/Dropdown';

export default function DropdownMenu({ alignment = '', ...props }) {
  const { showDropdown, refs, floatingStyles } = useDropdown();
  return (
    <Wrapper
      {...props}
      tag="ul"
      wrapperClass={[
        DROPDOWN_CLASSES.dropdownMenu,
        showDropdown ? DROPDOWN_CLASSES.dropdownShow : '',
        ...(Array.isArray(alignment)
          ? alignment.map((align) => DROPDOWN_ALIGNMENT_CLASSES[align])
          : [DROPDOWN_ALIGNMENT_CLASSES[alignment]]),
      ]}
      ref={refs.setFloating}
      style={floatingStyles}
      data-bs-popper
    />
  );
}

DropdownMenu.propTypes = {
  alignment: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(DROPDOWN_ALIGNMENT_CLASSES)),
    PropTypes.arrayOf(PropTypes.oneOf(Object.keys(DROPDOWN_ALIGNMENT_CLASSES))),
  ]),
};
