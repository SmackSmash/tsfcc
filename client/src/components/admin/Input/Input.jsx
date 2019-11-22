import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({ type, name, value, onChange }) => {
  return (
    <input className="input" name={name} type={type || 'text'} onChange={onChange} value={value} />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
