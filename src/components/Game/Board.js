import React from "react";
import ReactDOM from "react-dom";

import Row from "../UI/Row";
import "./Board.css";

const Board = (props) => {
  // attempt number (index of arr) increments on submission
  // a string with max length 5
  const wordArr = props.letters;

  const renderBoard = (arr) => {
    console.log(arr);
    const rowArr = Array(6).fill("");
    return rowArr.map((el, i) => <Row word={arr} key={i} id={`row-${i}`} />);
  };

  return <div className="game-board">{renderBoard(wordArr)}</div>;
};

export default Board;