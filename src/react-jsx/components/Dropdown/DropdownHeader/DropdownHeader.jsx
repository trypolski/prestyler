import React from 'react';
import Header from '../../common/Header/Header';
import { DROPDOWN_CLASSES } from '../constants';

export default function DropdownHeader(props) {
  return <Header {...props} headerClass={DROPDOWN_CLASSES.dropdownHeader} />;
}
