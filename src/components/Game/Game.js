import React from "react";
import ReactDOM from "react-dom";

import Board from "./Board";
import Keyboard from "./Keyboard";

import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attempts: ['', '', '', '', '', ''], 
      turn: 0,
    };
  }

  render() {
    const clickHandler = (e) => {
      const newChar = e.target.innerHTML;
      const tagId = e.target.id;

      const turn = this.state.turn;
      const attempts = this.state.attempts;


      newChar.length === 1 && tagId !== 'bck-key' && attempts[turn].length < 5
        ? this.setState({
          attempts: attempts.map((el, i) => i === turn ? el + newChar : el),
          turn: turn, 
        })
        : tagId === 'bck-key' // Checks for click on 'back key'
        ? this.setState({
          attempts: attempts.map((el, i) => i === turn ? el.substring(0, el.length - 1) : el), // Removes char at end of string
          turn: turn, 
        })
        : null;
    };

    const keyDownHandler = (e) => {
      const turn = this.state.turn;
      const attempts = this.state.attempts;
      const re = /^[a-z]/;

      re.test(e.key) && attempts[turn].length < 5
        ? this.setState({
          attempts: attempts.map((el, i) => i === turn ? el + e.key : el),
          turn: turn, 
        })
        : e.key === "Backspace" // Checks for backspace keydown
        ? this.setState({
          attempts: attempts.map((el, i) => i === turn ? el.substring(0, el.length - 1) : el), // Removes char at end of string
          turn: turn, 
        })
        : e.key === 'Enter' && attempts[turn].length === 5
          ? this.setState({
            attempts: attempts,
            turn: turn + 1,
          })
        : null;
    };

    return (
      <div className="main">
        <div className="game">
          <Board 
            letters={this.state.letters}
            attempts={this.state.attempts}
            />
          <Keyboard 
            onClick={clickHandler}
            onKeyDown={keyDownHandler}
            />
        </div>
      </div>
    );
  }
}

export default Game;
