import React from 'react';

import Row from '../UI/Row';
import './Board.css';

const Board = (props) => {
  const wordArr = props.attempts;
  const globalState = props.status;

  const renderBoard = (arr) =>
    arr.map((el, i) => {
      let rowState;

      if (globalState[i]) {
        rowState = globalState[i];
      } else {
        rowState = new Array(5).fill('');
      }

      return (
        <Row
          word={arr[i]}
          key={i}
          id={`row-${i}`}
          codle={props.codle}
          status={rowState}
          turn={props.turn}
        />
      );
    });

  return <div className='game-board'>{renderBoard(wordArr)}</div>;
};

export default Board;
