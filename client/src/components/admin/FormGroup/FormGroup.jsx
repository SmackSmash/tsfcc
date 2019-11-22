import React from 'react';
import './FormGroup.scss';

const FormGroup = props => {
  return <div className="form-group">{props.children}</div>;
};

export default FormGroup;
