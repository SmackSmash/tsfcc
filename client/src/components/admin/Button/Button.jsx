import React from 'react';
import './Button.scss';

const Button = ({ type, text }) => {
  return (
    <button className="button" type={type || 'button'}>
      {text}
    </button>
  );
};

export default Button;
