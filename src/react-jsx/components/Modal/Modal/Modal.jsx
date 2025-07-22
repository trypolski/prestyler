import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../common/Wrapper/Wrapper';

export default function Modal({ children, show, isFade, wrapperProps, dialogProps, contentProps }) {
  const wrapperClasses = ['modal', ...(show ? ['d-block', 'show'] : []), isFade ? 'fade' : ''];
  const dialogClasses = ['modal-dialog'];
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
  wrapperProps: PropTypes.object,
  dialogProps: PropTypes.object,
  contentProps: PropTypes.object,
};
