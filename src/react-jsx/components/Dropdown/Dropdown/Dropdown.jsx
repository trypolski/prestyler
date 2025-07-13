import React from 'react';
import Wrapper from '../../common/Wrapper/Wrapper';
import { DROPDOWN_CLASSES } from '../constants';

export default function Dropdown(props) {
  return <Wrapper {...props} wrapperClass={DROPDOWN_CLASSES.dropdown} />;
}
