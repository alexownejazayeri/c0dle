import React, { Component } from "react";

import Board from "./Board";
import Keyboard from "./Keyboard";

import "./Game.css";

const FUEL = require('../../vocab-list.json');

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codle: getRandomVocab(FUEL),
      attempts: ["", "", "", "", "", ""],
      status: [],
      turn: 0,
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

      // If tile row not filled and valid char keyed
      if (attempts[turn].length < 5 && re.test(e.key)) {
        this.setState({
          attempts: attempts.map((el, i) => (i === turn ? el + e.key : el)),
          turn: turn,
        });
      }

      // If no win and backspace keyed
      if (winState === false && e.key === "Backspace") {
        this.setState({
          attempts: attempts.map((el, i) =>
            i === turn ? el.substring(0, el.length - 1) : el
          ),
          turn: turn,
        });
      }

      // Set win state on enter if...
      if (
        e.key === "Enter" && // Enter keyed
        attempts[turn].length === 5 && // Tile row is full
        attempts[turn] === this.state.codle && // Attempt matches today's codle
        winState === false // Player hasn't already won
      ) {
        const attempt = attempts[turn].split("");
        const answer = this.state.codle;

        const matrix = evaluateMatrix(answer, attempt);
        const roundStatus = new Array(5).fill("-correct");

        this.setState({
          status: [...this.state.status, roundStatus],
          win: true,
          matrixHistory: [...this.state.matrixHistory, matrix],
        });

        handlePlayerData(turn, true);
        window.alert("Winner! Winner! Veggie Dinner!");  //  replace with function that triggers modal
        this.props.onGameEnd();

        // If enter key and wrong attempt
      } else if (
        e.key === "Enter" &&
        attempts[turn].length === 5 &&
        turn !== 5 &&
        winState === false
      ) {
        const attempt = attempts[turn].split("");
        const answer = this.state.codle;

        const matrix = evaluateMatrix(answer, attempt);
        const roundStatus = statusHandler(attempt, answer);
        this.setState({
          status: [...this.state.status, roundStatus],
          turn: turn + 1,
          matrixHistory: [...this.state.matrixHistory, matrix],
        });
      } else if (
        e.key === "Enter" &&
        attempts[turn].length === 5 &&
        turn === 5 &&
        winState === false
      ) {
        const attempt = attempts[turn].split("");
        const answer = this.state.codle;

        const matrix = evaluateMatrix(answer, attempt);
        const roundStatus = statusHandler(attempt, answer);
        
        this.setState({
          status: [...this.state.status, roundStatus],
          matrixHistory: [...this.state.matrixHistory, matrix],
        });

        handlePlayerData(turn, false);
        window.alert("Keep trying, you got this.");  //  replace with function that triggers modal
        this.props.onGameEnd();
      }
      
    };

    const clickHandler = (e) => {
      const turn = this.state.turn;
      const newChar = e.target.innerHTML;
      const tagId = e.target.id;
      const winState = this.state.win;
      const attempts = this.state.attempts;

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

      if (tagId === "bck-key" && winState === false) {
        this.setState({
          attempts: attempts.map((el, i) =>
            i === turn ? el.substring(0, el.length - 1) : el
          ),
          turn: turn,
        });
      }

      // Enter clicked, attempt correct...
      if (
        tagId === "enter-key" &&
        attempts[turn].length === 5 && // Tile row is full
        attempts[turn] === this.state.codle && // Attempt matches today's codle
        winState === false // Player hasn't already won
      ) {
        const roundStatus = new Array(5).fill("-correct");

        this.setState({
          status: [...this.state.status, roundStatus],
          win: true,
        });
        handlePlayerData(turn, true);
        window.alert("Winner! Winner! Veggie Dinner!");   // replace with function that triggers modal
        this.props.onGameEnd();
      }

      // Enter clicked, attempt incorrect
      else if (
        tagId === "enter-key" &&
        attempts[turn].length === 5 &&
        turn !== 5 &&
        winState === false
      ) {
        const attempt = attempts[turn].split("");
        const answer = this.state.codle;

        const matrix = evaluateMatrix(answer, attempt);
        const roundStatus = statusHandler(attempt, answer);

        this.setState({
          status: [...this.state.status, roundStatus],
          turn: turn + 1,
          matrixHistory: [...this.state.matrixHistory, matrix],
        });
      } else if (
        tagId === "enter-key" &&
        attempts[turn].length === 5 &&
        turn === 5 &&
        winState === false
      ) {
        const attempt = attempts[turn].split("");
        const answer = this.state.codle;

        const matrix = evaluateMatrix(answer, attempt);
        const roundStatus = statusHandler(attempt, answer);
        
        this.setState({
          status: [...this.state.status, roundStatus],
          matrixHistory: [...this.state.matrixHistory, matrix],
        });
        handlePlayerData(turn, false);
        window.alert("Keep trying, you got this."); //  replace with function that triggers modal
        this.props.onGameEnd();
      }
    };

    return (
      <div className="main">
        <div className="game">
          <Board
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

// ==========================================================
// ================  HELPER FUNCTIONS  ======================

const statusHandler = (guess, ans) => {
  let statusArr = ["", "", "", "", ""];

  let indexArr = [];
  const charPool = ans.split("");

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

const evaluateMatrix = (ans, atmpt) => {
  const matrix = constructMatrix(ans, atmpt);

  matrix.forEach((row, i) => {
    if (i > 0) {
      row.forEach((el, j) => {
        if (matrix[0][j] === matrix[i][0]) {
          matrix[i][j] = 1;
        }
      });
    }
  });

  return matrix;
};

const getRandomVocab = (arr) => arr[Math.floor(Math.random() * arr.length)];

const handlePlayerData = (turn, winStatus) => {
  let newPlayer;
  !!window.localStorage.getItem('lifetime-stats') ? newPlayer = false : newPlayer = true;
  
  if (!!newPlayer) {
    const lifetimeStats = {
      guesses: {
        '1': 0,
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        fail: 0
      },
      gamesPlayed: 0,
      gamesWon: 0,
      winPercentage: 0,
      averageGuesses: 0,
    }
    // Update stats and push to local storage
    lifetimeStats.gamesPlayed++;
    if (!!winStatus) { 
      lifetimeStats.gamesWon++; 
      lifetimeStats.guesses[`${turn + 1}`]++;
      const {'1': ones, '2': twos, '3': threes, '4': fours, '5': fives, '6': sixes} = lifetimeStats.guesses;
      lifetimeStats.averageGuesses = Math.round((ones * 1 + twos * 2 + threes * 3 + fours * 4 + fives * 5 + sixes * 6) / lifetimeStats.gamesWon);
    } else {
      lifetimeStats.guesses['fail']++;
    }
    
    lifetimeStats.winPercentage = Math.round(lifetimeStats.gamesWon / lifetimeStats.gamesPlayed  * 100);

    const strLifetimeStats = JSON.stringify(lifetimeStats);
    window.localStorage.setItem('lifetime-stats', strLifetimeStats);
  } else {
    // read in and parse JSON string to object and update
    const lifetimeStats = JSON.parse(window.localStorage.getItem('lifetime-stats'));
    
    // Update stats and push to local storage
    lifetimeStats.gamesPlayed++;
    if (!!winStatus) { 
      lifetimeStats.gamesWon++; 
      lifetimeStats.guesses[`${turn  + 1}`]++;
      const {'1': ones, '2': twos, '3': threes, '4': fours, '5': fives, '6': sixes} = lifetimeStats.guesses;
      lifetimeStats.averageGuesses = Math.round((ones * 1 + twos * 2 + threes * 3 + fours * 4 + fives * 5 + sixes * 6) / lifetimeStats.gamesWon);
    } else {
      lifetimeStats.guesses['fail']++;
    }
    
    lifetimeStats.winPercentage = Math.round(lifetimeStats.gamesWon / lifetimeStats.gamesPlayed * 100);
    
    const strLifetimeStats = JSON.stringify(lifetimeStats);
    window.localStorage.setItem('lifetime-stats', strLifetimeStats);
  }
}