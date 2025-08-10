import React, { useState, useEffect } from 'react';
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
  useBsClasses = true,
  ...props
}) {
  useLockBodyScroll(!enableBodyScroll && show);
  const [phase, setPhase] = useState('idle');
  const [renderShow, setRenderShow] = useState(show);

  useEffect(() => {
    if (show && !renderShow) {
      setPhase('showing');
    } else if (!show && renderShow) {
      setPhase('hiding');
    } else {
      setPhase('idle');
    }
  }, [show, renderShow]);

  const handleBackdropClick = () => {
    if (closeOnBackdropClick && onRequestClose) onRequestClose();
  };

  const handleTransitionEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    if (phase === 'showing') {
      setRenderShow(true);
      setPhase('idle');
    } else if (phase === 'hiding') {
      setRenderShow(false);
      setPhase('idle');
    }
  };

  return (
    <>
      {show && (
        <Wrapper
          onClick={handleBackdropClick}
          wrapperClass={['offcanvas-backdrop', 'show']}
          useBsClasses={useBsClasses}
        />
      )}
      <Wrapper
        {...props}
        useBsClasses={useBsClasses}
        onTransitionEnd={handleTransitionEnd}
        wrapperClass={[
          'offcanvas',
          renderShow ? 'show' : '',
          phase === 'showing' ? 'showing' : '',
          phase === 'hiding' ? 'hiding' : '',
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
  useBsClasses: PropTypes.bool,
};
