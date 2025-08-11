import React from 'react';
import PropTypes from 'prop-types';
import { usePrestylerClassBuilder } from '../../../hooks/usePrestylerPrefix';

export default function PaginationLink(props) {
  const { prestylerFullClassName, children, ...restProps } = usePrestylerClassBuilder(
    ['page-link', props.disabled ? 'disabled' : ''],
    props
  );

  if (props.disabled) {
    return (
      <span {...restProps} className={prestylerFullClassName}>
        {children}
      </span>
    );
  }

  return (
    <a {...restProps} className={prestylerFullClassName}>
      {children}
    </a>
  );
}

PaginationLink.propTypes = {
  disabled: PropTypes.bool,
};
