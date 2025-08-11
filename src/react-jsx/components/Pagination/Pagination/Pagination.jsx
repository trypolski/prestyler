import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../../common/Wrapper/Wrapper';

export default function Pagination({ isLarge = false, isSmall = false, ...props }) {
  const paginationClasses = [
    'pagination',
    isSmall ? 'pagination-sm' : '',
    isLarge ? 'pagination-lg' : '',
  ];
  return <Wrapper tag="ul" {...props} wrapperClass={paginationClasses} />;
}

Pagination.propTypes = {
  isLarge: PropTypes.bool,
  isSmall: PropTypes.bool,
};
