import React from 'react';
import Wrapper from '../../common/Wrapper/Wrapper';
import { DROPDOWN_CLASSES } from '../constants';

export default function DropdownMenu(props) {
  return <Wrapper {...props} tag="ul" wrapperClass={DROPDOWN_CLASSES.dropdownMenu} />;
}
