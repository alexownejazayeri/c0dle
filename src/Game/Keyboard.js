import React, { useState, useEffect } from 'react';
import { getAllAttemptedChars, keyGenerator } from '../modules/keyboard-mgmt';

import BackKey from '../@Components/UI/Buttons/BackKey';
import EnterKey from '../@Components/UI/EnterKey';
import './Keyboard.css';

const Keyboard = (props) => {
  const [attemptedChars, setAttemptedChars] = useState([]);

  const keys = {
    row1: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    row2: ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    row3: ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  };

  const history = props.globalState;
  const attemptArr = getAllAttemptedChars(history);

  attemptArr.forEach((el) => {
    if (!attemptedChars.includes(el)) {
      setAttemptedChars([...attemptedChars, el]);
    }
  });

  useEffect(() => {
    window.addEventListener('keydown', props.onKeyDown);
    return () => window.removeEventListener('keydown', props.onKeyDown);
  });

  return (
    <div className="keyboard" role="application" aria-label="keyboard">
      <div className="key-row">{keyGenerator(keys['row1'], attemptArr, props.onClick, history)}</div>
      <div className="key-row">{keyGenerator(keys['row2'], attemptArr, props.onClick, history)}</div>
      <div className="key-row">
        <EnterKey onClick={props.onClick} />
        {keyGenerator(keys['row3'], attemptArr, props.onClick, history)}
        <BackKey onClick={props.onClick} />
      </div>
    </div>
  );
};

export default Keyboard;
