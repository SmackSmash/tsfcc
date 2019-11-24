import React from 'react';
import './CardHeader.scss';

const CardHeader = props => {
  return (
    <div className="card-header">
      <h3>{props.children}</h3>
    </div>
  );
};

export default CardHeader;
