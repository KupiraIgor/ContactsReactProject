import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ children, className = '', tag = 'div' }) => {
  const CustomTag = tag;

  return (
    <CustomTag className={`font-medium text-xl ${className}`}>
      {children}
    </CustomTag>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string.isRequired,
};

export default Title;
