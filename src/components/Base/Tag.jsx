import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ children }) => {
  return (
    <div className="bg-grey-3 inline-flex justify-center items-center px-3 min-h-5 rounded text-xs font-medium text-[13px]">
      {children}
    </div>
  );
};

Tag.propTypes = {
  children: PropTypes.node,
};

export default Tag;
