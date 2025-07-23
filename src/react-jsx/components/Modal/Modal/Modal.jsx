import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../common/Wrapper/Wrapper';

const MODAL_SIZES = {
  '': '',
  sm: 'modal-sm',
  lg: 'modal-lg',
  xl: 'modal-xl',
};

const FULL_SCREEN_SIZES = {
  '': '',
  all: 'modal-fullscreen',
  sm: 'modal-fullscreen-sm-down',
  md: 'modal-fullscreen-md-down',
  lg: 'modal-fullscreen-lg-down',
  xl: 'modal-fullscreen-xl-down',
  xxl: 'modal-fullscreen-xxl-down',
};

export default function Modal({
  children,
  show,
  isFade,
  isScrollable,
  isCentered,
  size = '',
  fullScreenSize = '',
  wrapperProps,
  dialogProps,
  contentProps,
}) {
  const wrapperClasses = ['modal', ...(show ? ['d-block', 'show'] : []), isFade ? 'fade' : ''];
  const dialogClasses = [
    'modal-dialog',
    isScrollable ? 'modal-dialog-scrollable' : '',
    isCentered ? 'modal-dialog-centered' : '',
    MODAL_SIZES[size],
    FULL_SCREEN_SIZES[fullScreenSize],
  ];
  const contentClasses = ['modal-content'];

  return (
    <Wrapper {...wrapperProps} wrapperClass={wrapperClasses}>
      <Wrapper {...dialogProps} wrapperClass={dialogClasses}>
        <Wrapper {...contentProps} wrapperClass={contentClasses}>
          {children}
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
  isFade: PropTypes.bool,
  isScrollable: PropTypes.bool,
  isCentered: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(MODAL_SIZES)),
  fullScreenSize: PropTypes.oneOf(Object.keys(FULL_SCREEN_SIZES)),
  wrapperProps: PropTypes.object,
  dialogProps: PropTypes.object,
  contentProps: PropTypes.object,
};
