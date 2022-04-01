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
      codle: "error",
      matrixHistory: [],
      win: false,
    };
  }

  render() {
    const keyDownHandler = (e) => {
      let turn = this.state.turn;
      let attempts = this.state.attempts;

      const winState = this.state.win;
      const re = /^[a-z]/;

      if (re.test(e.key) && attempts[turn].length < 5) {
        this.setState({
          attempts: attempts.map((el, i) => (i === turn ? el + e.key : el)),
          turn: turn,
        });
      }

      if (e.key === "Backspace" && winState === false) {
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
        attempts[turn] === this.state.codle &&
        this.state.status.length === this.state.turn &&
        winState === false
      ) {
        const roundStatus = new Array(5).fill("-correct");

        this.setState({
          status: [...this.state.status, roundStatus],
          win: true,
        });
      } else if (
        e.key === "Enter" &&
        attempts[turn].length === 5 &&
        winState === false
      ) {
        const attempt = attempts[turn].split("");
        const answer = this.state.codle;

        const matrix = constructMatrix(answer, attempt);

        matrix.forEach((row, i) => {
          if (i > 0) {
            row.forEach((el, j) => {
              if (matrix[0][j] === matrix[i][0]) {
                matrix[i][j] = 1;
              }
            });
          }
        });

        this.state.matrixHistory.push(matrix); // convert this to a setState() function; editing state this way feels like an anti-pattern
        const roundStatus = statusHandler(attempt, answer);

        this.setState({
          status: [...this.state.status, roundStatus],
          turn: turn + 1,
        });
      }
    };

    const clickHandler = (e) => {
      const turn = this.state.turn;
      const newChar = e.target.innerHTML;
      const tagId = e.target.id;

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
            globalState={this.state.matrixHistory}
          />
        </div>
      </div>
    );
  }
}

export default Game;

// ================================================================

const statusHandler = (guess, ans) => {
  let statusArr = ["", "", "", "", ""];

  let indexArr = [];
  const charPool = ans.split(""); // move this into the functions, so it's not hard coded

  // Scan for correctness
  guess.map((char, i) => {
    if (charPool.includes(char) && guess[i] === ans[i]) {
      statusArr[i] = "-correct";
      charPool.splice(charPool.indexOf(char), 1);
      indexArr.push(i);
    }
  });

  // Scan for presence
  guess.map((char, i) => {
    if (
      !indexArr.includes(i) &&
      charPool.includes(char) &&
      guess[i] !== ans[i]
    ) {
      statusArr[i] = "-present";
      charPool.splice(charPool.indexOf(char), 1);
      indexArr.push(i);
    }
  });

  // Scan for incorrectness
  guess.map((char, i) => {
    if (!indexArr.includes(i) && !charPool.includes(char)) {
      statusArr[i] = "-incorrect";
      charPool.splice(charPool.indexOf(char), 1);
      indexArr.push(i);
    }
  });

  return statusArr;
};

const constructMatrix = (ans, atmpt) => {
  const skeleton = Array(5).fill([]);
  const matrix = skeleton.map(() => [0, 0, 0, 0, 0]);

  matrix.unshift(ans.split(""));
  matrix[0].unshift("");
  matrix.forEach((r, i) => (i > 0 ? r.unshift(atmpt[i - 1]) : null));

  return matrix;
};
