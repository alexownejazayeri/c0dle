import React from 'react';
import ReactDOM from 'react-dom';


import './Board.css';
import Row from '../UI/Row';

const Board = (props) => {
  
  return (
      <div className="game-board">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    );
  };

export default Board;