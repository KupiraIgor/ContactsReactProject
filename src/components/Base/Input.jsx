import React, { useId } from 'react';
import PropTypes from 'prop-types';

const Input = ({ className = '', label, onChange, onBlur, value }) => {
  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="w-full text-xs pl-1.5 mb-1.5 block">
        {label}
      </label>
      <input
        type="text"
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className="h-12 p-3 border border-grey rounded-lg w-full focus:outline-none focus:border-black"
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
