import React from 'react';
import { usePrestylerClassBuilder } from '../../../hooks/usePrestylerPrefix';

export default function NavbarText(props) {
  const { prestylerFullClassName, children, ...restProps } = usePrestylerClassBuilder(
    'navbar-text',
    props
  );

  return (
    <span {...restProps} className={prestylerFullClassName}>
      {children}
    </span>
  );
}
