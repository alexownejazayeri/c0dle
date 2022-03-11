import React from 'react';
import ReactDOM from 'react-dom';

import './Card.css';

const Card = (props) => {
    return (
      <div className="card">
        {props.children}
      </div>
    );
  };

export default Card;