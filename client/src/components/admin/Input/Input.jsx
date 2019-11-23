import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ type, name, label, value, onChange }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className="input"
        name={name}
        id={name}
        type={type || 'text'}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
