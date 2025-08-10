import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../common/Wrapper/Wrapper';
import useLockBodyScroll from '../../../hooks/useLockBodyScroll';

export const OFFCANVAS_PLACEMENTS = {
  start: 'offcanvas-start',
  end: 'offcanvas-end',
  top: 'offcanvas-top',
  bottom: 'offcanvas-bottom',
};

export const OFFCANVAS_BREAKPOINTS = {
  '': 'offcanvas',
  sm: 'offcanvas-sm',
  md: 'offcanvas-md',
  lg: 'offcanvas-lg',
  xl: 'offcanvas-xl',
  xxl: 'offcanvas-xxl',
};

export default function Offcanvas({
  show = false,
  breakpoint = '',
  placement = 'start',
  enableBodyScroll = false,
  closeOnBackdropClick = true,
  onRequestClose,
  ...props
}) {
  useLockBodyScroll(!enableBodyScroll && show);

  const handleBackdropClick = () => {
    if (closeOnBackdropClick && onRequestClose) onRequestClose();
  };

  return (
    <>
      {show && (
        <Wrapper onClick={handleBackdropClick} wrapperClass={['offcanvas-backdrop', 'show']} />
      )}
      <Wrapper
        {...props}
        wrapperClass={[
          'offcanvas',
          show ? 'show' : '',
          OFFCANVAS_BREAKPOINTS[breakpoint],
          OFFCANVAS_PLACEMENTS[placement],
        ]}
      />
    </>
  );
}

Offcanvas.propTypes = {
  show: PropTypes.bool,
  breakpoint: PropTypes.oneOf(Object.keys(OFFCANVAS_BREAKPOINTS)),
  placement: PropTypes.oneOf(Object.keys(OFFCANVAS_PLACEMENTS)),
  enableBodyScroll: PropTypes.bool,
  closeOnBackdropClick: PropTypes.bool,
  onRequestClose: PropTypes.func,
};
