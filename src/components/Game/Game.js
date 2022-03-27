import React from "react";

import Board from "./Board";
import Keyboard from "./Keyboard";

import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attempts: ["", "", "", "", "", ""],
      status: [],
      turn: 0,
      codle: "const",
      keyStyles: {
        "A": '',
        "B": '',
        "C": '',
        "D": '',
        "E": '',
        "F": '',
        "G": '',
        "H": '',
        "I": '',
        "J": '',
        "K": '',
        "L": '',
        "M": '',
        "N": '',
        "O": '',
        "P": '',
        "Q": '',
        "R": '',
        "S": '',
        "T": '',
        "U": '',
        "V": '',
        "W": '',
        "X": '',
        "Y": '',
        "Z": '',
      },
    };
  }

  render() {
    const clickHandler = (e) => {
      let newChar = e.target.innerHTML;
      let tagId = e.target.id;
      let win = false;

      let turn = this.state.turn;
      let attempts = this.state.attempts;

      if (attempts[turn] === this.state.codle) {
        win = true;
      }

      if (
        newChar.length === 1 &&
        tagId !== "bck-key" &&
        attempts[turn].length < 5
      ) {
        this.setState({
          attempts: attempts.map((el, i) =>
            i === turn ? el + newChar.toLowerCase() : el
          ),
          turn: turn,
        });
      }

      if (tagId === "bck-key" && !win) {
        this.setState({
          attempts: attempts.map((el, i) =>
            i === turn ? el.substring(0, el.length - 1) : el
          ),
          turn: turn,
        });
      }

      if (
        tagId === "enter-key" &&
        attempts[turn].length === 5 &&
        win &&
        this.state.status.length === this.state.turn
      ) {
        const roundStatus = [
          "-correct",
          "-correct",
          "-correct",
          "-correct",
          "-correct",
        ];
        this.setState({
          status: [...this.state.status, roundStatus],
        });
      } else if (tagId === "enter-key" && attempts[turn].length === 5 && !win) {
        const attempt = attempts[turn].split("");
        const answer = this.state.codle;

        let pool = answer.split("");
        let roundStatus = [];

        attempt.map((char, i) => {
          if (pool.includes(char) && attempt[i] === answer[i]) {
            pool.splice(pool.indexOf(char), 1);
            roundStatus.push("-correct");
          } else if (pool.includes(char) && attempt[i] !== answer[i]) {
            pool.splice(pool.indexOf(char), 1);
            roundStatus.push("-present");
          } else if (!pool.includes(char)) {
            roundStatus.push("-incorrect");
          }
        });

        this.setState({
          status: [...this.state.status, roundStatus],
          turn: turn + 1,
        });
      }
    };

    const keyDownHandler = (e) => {
      let turn = this.state.turn;
      let attempts = this.state.attempts;
      let win = false;

      const re = /^[a-z]/;

      if (attempts[turn] === this.state.codle) {
        win = true;
      }

      if (re.test(e.key) && attempts[turn].length < 5) {
        this.setState({
          attempts: attempts.map((el, i) => (i === turn ? el + e.key : el)),
          turn: turn,
        });
      }

      if (e.key === "Backspace" && !win) {
        this.setState({
          attempts: attempts.map((el, i) =>
            i === turn ? el.substring(0, el.length - 1) : el
          ),
          turn: turn,
        });
      }

      if (
        e.key === "Enter" &&
        attempts[turn].length === 5 &&
        win &&
        this.state.status.length === this.state.turn
      ) {
        const roundStatus = [
          "-correct",
          "-correct",
          "-correct",
          "-correct",
          "-correct",
        ];

        this.setState({
          status: [...this.state.status, roundStatus],
        });
      } else if (e.key === "Enter" && attempts[turn].length === 5 && !win) {
        const attempt = attempts[turn].split("");
        const answer = this.state.codle;

        let pool = answer.split("");
        let roundStatus = [];

        attempt.map((char, i) => {
          if (pool.includes(char) && attempt[i] === answer[i]) {
            pool.splice(pool.indexOf(char), 1);
            roundStatus.push("-correct");
            console.log(char);
          } else if (pool.includes(char) && attempt[i] !== answer[i]) {
            pool.splice(pool.indexOf(char), 1);
            roundStatus.push("-present");
          } else if (!pool.includes(char)) {
            roundStatus.push("-incorrect");
          }
        });

        this.setState({
          status: [...this.state.status, roundStatus],
          turn: turn + 1,
        });
      }
    };

    return (
      <div className="main">
        <div className="game">
          <Board
            letters={this.state.letters}
            attempts={this.state.attempts}
            codle={this.state.codle}
            status={this.state.status}
            turn={this.state.turn}
          />
          <Keyboard 
          onClick={clickHandler} 
          onKeyDown={keyDownHandler}
          styles={this.state.keyStyles}
           />
        </div>
      </div>
    );
  }
}

export default Game;

// ==============================================
