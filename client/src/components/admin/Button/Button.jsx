import React from 'react';
import './Button.scss';

const Button = ({ type, text, disabled }) => {
  return (
    <button className="button" disabled={disabled} type={type || 'button'}>
      {text}
    </button>
  );
};

export default Button;
