import React from "react";
import ReactDOM from "react-dom";

import Row from "../UI/Row";
import "./Board.css";

const Board = (props) => {
  // attempt number (index of arr) increments on submission
  // a string with max length 5
  const wordArr = props.attempts;

  const renderBoard = (arr) => {
    return arr.map((el, i) => <Row word={arr[i]} key={i} id={`row-${i}`} />);
  };

  return <div className="game-board">{renderBoard(wordArr)}</div>;
};

export default Board;