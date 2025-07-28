import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactModal from 'react-modal';
import { usePrestylerPrefix } from '../../../hooks/usePrestylerPrefix';
import { getFullClassName } from '../../../utilities/utilities';
import Wrapper from '../../common/Wrapper/Wrapper';

export const MODAL_SIZES = {
  '': '',
  sm: 'modal-sm',
  lg: 'modal-lg',
  xl: 'modal-xl',
};

export const FULL_SCREEN_SIZES = {
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
  show = false,
  isFade = false,
  isScrollable = false,
  isCentered = false,
  size = '',
  fullScreenSize = '',
  useReactModal = true,
  wrapperProps = {},
  dialogProps = {},
  contentProps = {},
  onRequestClose,
  ...rest
}) {
  const prefix = usePrestylerPrefix();
  const wrapperClasses = ['modal', ...(show ? ['d-block', 'show'] : []), isFade ? 'fade' : ''];
  const dialogClasses = [
    'modal-dialog',
    isScrollable ? 'modal-dialog-scrollable' : '',
    isCentered ? 'modal-dialog-centered' : '',
    MODAL_SIZES[size],
    FULL_SCREEN_SIZES[fullScreenSize],
  ];
  const contentClasses = ['modal-content'];

  const fullWrapperClasses = getFullClassName(
    wrapperClasses,
    prefix,
    rest.useBsClasses || true,
    wrapperProps.className || ''
  );
  const fullDialogClasses = getFullClassName(
    dialogClasses,
    prefix,
    rest.useBsClasses || true,
    dialogProps.className || ''
  );

  if (useReactModal) {
    return (
      <ReactModal
        isOpen={show}
        onRequestClose={onRequestClose}
        className={fullDialogClasses}
        overlayClassName={fullWrapperClasses}
        ariaHideApp={false}
        {...rest}
      >
        <Wrapper {...contentProps} wrapperClass={contentClasses}>
          {children}
        </Wrapper>
      </ReactModal>
    );
  }
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
  useReactModal: PropTypes.bool,
  wrapperProps: PropTypes.object,
  dialogProps: PropTypes.object,
  contentProps: PropTypes.object,
  onRequestClose: PropTypes.func,
};
