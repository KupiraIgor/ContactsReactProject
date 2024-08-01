import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className = '', type = 'default' }) => {
  return (
    <button
      className={`w-full min-h-11 py-2 px-6 font-medium border border-grey rounded hover:bg-grey-2 ease-in duration-150 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
