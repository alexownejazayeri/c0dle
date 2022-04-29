import React from 'react';
import './EnterKey.css';

const EnterKey = (props) => (
  <div className="enter-key">
    <button id="enter-key" className="btn-enter" onClick={props.onClick}>
      ENTER
    </button>
  </div>
);

export default EnterKey;
