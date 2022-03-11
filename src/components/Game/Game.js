import React from 'react';
import ReactDOM from 'react-dom';

import Board from "./Board";
import Keyboard from "./Keyboard";

import './Game.css';

const Game = (props) => {
    // Declare state here
    // row 1 = ['g','u','e','s','s']

    const sampleBoardState = {
      'boardState': ['guess', '', '', '', ''],
      'evaluations': [['absent', 'absent', 'absent', 'absent', 'absent',]],
      'gameStatus': "IN_PROGRESS",
      'hardMode': false,
      'solution': "month"
    }

    const handleKeys = (e) => console.log(e.target.innerHTML);

    return (
      <div className="main">
        <div className="game">
          <Board gameState={sampleBoardState}/>
          <Keyboard onClick={handleKeys}/>
        </div>
      </div>
    );
  };

export default Game;