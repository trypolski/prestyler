import React from 'react';
import { DROPDOWN_CLASSES } from '../constants';
import { usePrestylerClassBuilder } from '../../../hooks/usePrestylerPrefix';

export default function DropdownDivider(props) {
  const { prestylerFullClassName, ...restProps } = usePrestylerClassBuilder(
    DROPDOWN_CLASSES.dropdownDivider,
    props
  );
  return <hr {...restProps} className={prestylerFullClassName} />;
}
