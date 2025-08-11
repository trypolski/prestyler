import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../common/Wrapper/Wrapper';

export default function NavbarListItem({ isActive, ...props }) {
  return (
    <Wrapper
      tag="li"
      {...props}
      wrapperClass={['page-item', isActive ? 'active' : '', props.disabled ? 'disabled' : '']}
    />
  );
}

NavbarListItem.propTypes = {
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
};
