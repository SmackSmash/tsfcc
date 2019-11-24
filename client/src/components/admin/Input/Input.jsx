import React from 'react';
import PropTypes from 'prop-types';
import Error from '../Error/Error';
import './Input.scss';

const Input = ({ type, name, label, value, onChange, onBlur, error, errorMessage }) => {
  return (
    <div className="admin-input">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        className={`input${error ? ' error' : ''}`}
        name={name}
        id={name}
        type={type || 'text'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? <Error errorMessage={errorMessage} /> : null}
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired
};

export default Input;
