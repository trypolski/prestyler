import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../common/Wrapper/Wrapper';

export default function Nav({
  tag = 'nav',
  asTabs = false,
  asPills = false,
  asUnderline = false,
  fill = false,
  justify = false,
  children,
  ...props
}) {
  return (
    <Wrapper
      {...props}
      tag={tag}
      wrapperClass={[
        'nav',
        asTabs ? 'nav-tabs' : '',
        asPills ? 'nav-pills' : '',
        asUnderline ? 'nav-underline' : '',
        fill ? 'nav-fill' : '',
        justify ? 'nav-justified' : '',
      ]}
    >
      {children}
    </Wrapper>
  );
}

Nav.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.oneOf(['nav', 'ul', 'ol']),
  asTabs: PropTypes.bool,
  asPills: PropTypes.bool,
  asUnderline: PropTypes.bool,
  fill: PropTypes.bool,
  justify: PropTypes.bool,
};
