import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import Board from "./Board";
import Keyboard from "./Keyboard";

import "./Game.css";

const Game = (props) => {
  
  const sampleBoardState = {
    rowState: [],
    boardState: ["guess", "", "", "", "", ""],
    evaluations: [["absent", "absent", "absent", "absent", "absent"]],
    gameStatus: "IN_PROGRESS",
    hardMode: false,
    solution: "month",
  };

  const clickHandler = (e) => {
    console.log(e.target.innerHTML);
  }

  const keyPressHandler = (e) => {
    console.log("I'm getting pressed!");
  }

  return (
    <div className="main">
      <div className="game">
        <Board />
        <Keyboard onClick={clickHandler} />
      </div>
    </div>
  );
};

export default Game;
