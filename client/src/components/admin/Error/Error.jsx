import React from 'react';
import './Error.scss';

const Error = ({ errorMessage }) => {
  return <p className="error">{errorMessage}</p>;
};

export default Error;
