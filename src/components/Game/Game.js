import React from "react";
import ReactDOM from "react-dom";

import Board from "./Board";
import Keyboard from "./Keyboard";

import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: "",
    };
  }

  render() {
    const clickHandler = (e) => {
      const newChar = e.target.innerHTML;
      const tagId = e.target.id;
      const letters = this.state.letters;

      newChar.length === 1 && tagId !== 'bck-key' && letters.length < 5
        ? this.setState({ letters: letters + newChar })
        : tagId === 'bck-key'
        ? this.setState({ letters: letters.substring(0, letters.length - 1) })
        : console.log('too long!');
    };

    const keyDownHandler = (e) => {
      const letters = this.state.letters;
      const strLen = letters.length;

      e.key !== "Backspace" && strLen < 5
        ? this.setState({ letters: letters + e.key })
        : e.key === "Backspace"
        ? this.setState({ letters: letters.substring(0, strLen - 1) })
        : console.log("too long!");
    };

    return (
      <div className="main">
        <div className="game">
          <Board 
            letters={this.state.letters}
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
