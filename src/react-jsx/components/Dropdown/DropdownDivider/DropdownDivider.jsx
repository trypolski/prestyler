import React from 'react';
import { DROPDOWN_CLASSES } from '../constants';

export default function DropdownDivider(props) {
  return <hr {...props} className={DROPDOWN_CLASSES.dropdownDivider} />;
}
