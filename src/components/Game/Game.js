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
      keyStyles: {
        // Consider changing state to the matrix/DPish model below and manage key styles in a keyboard state that reads in the matrices
        A: "",
        B: "",
        C: "",
        D: "",
        E: "",
        F: "",
        G: "",
        H: "",
        I: "",
        J: "",
        K: "",
        L: "",
        M: "",
        N: "",
        O: "",
        P: "",
        Q: "",
        R: "",
        S: "",
        T: "",
        U: "",
        V: "",
        W: "",
        X: "",
        Y: "",
        Z: "",
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
        attempts[turn] === this.state.codle &&
        this.state.status.length === this.state.turn
      ) {
        win = true;

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

        let pool = answer.split(""); // move this into the functions, so it's not hard coded
        let roundStatus = ["", "", "", "", ""]; // move this into the functions, so it's not hard coded
        let checkedIndices = []; // move this into the functions, so it's not hard coded

        const matrix = constructMatrix(answer, attempt);
        
        matrix.forEach((row, i) => {
          row.forEach((el, j) => {
            if (attempt[i] === answer[j]) {
              console.log(attempt[i], answer[j]);
              matrix[i][j] = 1;
            }
          });
        });
        this.state.matrixHistory.push(matrix);
        console.log(this.state.matrixHistory);
        console.log(matrix);
        
        attempt.forEach((char) => {
          const upperChar = char.toUpperCase();
          
          // Check if keyStyle is incorrect
          !answer.includes(char)
            ? (this.state.keyStyles[upperChar] = "-incorrect")
            : null;
        });
        
        /*

            Can use a 5x5 grid here to keep track of singles.
            Might need a score or something to track repeat characters?

             E  R  R  O  R  i
          A [0, 0, 0, 0, 0] 0  =>  keyStyles[char] = "-incorrect"
          R [0, 1, 1, 0, 1] 1  =>  keyStyles[char] = "-present"
          R [0, 1, 1, 0, 1] 2  =>  keyStyles[char] = "-present"
          A [0, 0, 0, 0, 0] 3  =>  keyStyles[char] = "-incorrect"
          Y [0, 0, 0, 0, 0] 4  =>  keyStyles[char] = "-incorrect"
          j> 0  1  2  3  4  
             E  R  R  O  R 
          C [0, 0, 0, 0, 0]    =>  keyStyles[char] = "-incorrect"
          O [0, 0, 0, 1, 0]    =>  keyStyles[char] = "-present"
          N [0, 0, 0, 0, 0]    =>  keyStyles[char] = "-incorrect"
          S [0, 0, 0, 0, 0]    =>  keyStyles[char] = "-incorrect"
          T [0, 0, 0, 0, 0]    =>  keyStyles[char] = "-incorrect"

             E  R  R  O  R 
          A [0, 0, 0, 0, 0]
          R [0, 1, 1, 0, 1]
          R [0, 1, 1, 0, 1]
          0 [0, 0, 0, 1, 0]
          W [0, 0, 0, 0, 0]

            Properties of matrix:
            
            1. Row sum
            The sum of a row is equal to the number of times the attempt character at jth index is present in the answer

            2. Column sum
            Equal to the number of times the ith character of the answer appears in the attempt.

            3. M(i, j) : i = j
            These are the digits at the diagonal of the matrix. Probably the most informative, actually, since this indicates
            both correct presence and position. The diagonal is good to build logic off of.

            For example, if M(i,j) matches condition 3 and the character only appears once then it's correct.            

            *** Needs logic for: if repeat letter guessed at all present indices -> highlight correct ***

            Store repeat characters, indices, and evaluate styles based on global attempts.

            Okay so if I store the matrix evaluations above in state, then I can quickly evaluate for M(i,j) for condition 3 and
            for repeat characters, pull in the exact coordinates in each attempt. So since the answer is in the state, I can store 
            repeat characters and associate those with a score e.g.(3/3 is the condition to meet to switch 'R' to "-correct") and 
            evaluate M(i,j) across the global game state and if M(i, j) matches 3/3 times across all attempts, then the tiles have
            given the player absolute information about where all the "R"s are and this can be considered solved for.


            */

        tileChecker(pool, attempt, answer, checkedIndices, roundStatus);

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

// ================================================================

const tileChecker = (charPool, guess, ans, indexArr, statusArr) => {
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
};

const constructMatrix = (ans, atmpt) => {
  const skeleton = Array(5).fill([]);
  const matrix = skeleton.map((el) => [0, 0, 0, 0, 0]);

  /* matrix.unshift(ans.split(""));
  matrix[0].unshift("");
  matrix.forEach((r, i) => (i > 0 ? r.unshift(atmpt[i - 1]) : null)); */

  return matrix;
};
