import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../common/Wrapper/Wrapper';

export default function NavbarList({ isScrollable = false, ...props }) {
  return (
    <Wrapper
      {...props}
      tag="ul"
      wrapperClass={['navbar-nav', isScrollable ? 'navbar-nav-scroll' : '']}
    />
  );
}

NavbarList.propTypes = {
  isScrollable: PropTypes.bool,
};
