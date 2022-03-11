import React from 'react';
import ReactDOM from 'react-dom';

import BackKey from '../UI/BackKey';
import './Keyboard.css';

const Keyboard = (props) => {
    
    const keys = {
        'row1': ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        'row2': ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        'row3': ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    }

    const keyGenerator = (keyArr) => {
        return (
            keyArr.map(char => 
                <button key={char} className="letter-key btn" onClick={props.onClick}>{char}</button>                
                )
        );
    }
    
    return (
      <div className="keyboard">
        <div className="key-row">
          {keyGenerator(keys['row1'])}
        </div>
        <div className="key-row">
          {keyGenerator(keys['row2'])}
        </div>
        <div className="key-row">
          <div className="fn-key">ENTER</div>
          {keyGenerator(keys['row3'])}
          <BackKey />
        </div>
      </div>
    );
  };

export default Keyboard;