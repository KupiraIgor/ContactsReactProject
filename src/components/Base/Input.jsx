import React, { useId } from 'react';
import PropTypes from 'prop-types';

const Input = ({
  className = '',
  label,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
  type = 'text',
}) => {
  const id = useId();
  return (
    <div className={className}>
      <label htmlFor={id} className="w-full text-xs pl-1.5 mb-1.5 block">
        {label}
      </label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        className={`h-12 text-xs p-3 border rounded-lg w-full focus:outline-none outline-none ease-in duration-100 ${error ? 'border-red focus:border-red hover:border-red' : 'border-grey focus:border-black hover:border-black'}`}
      />
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.any,
};

export default Input;
