import React, { Component } from 'react';
import {
  getRandomVocab,
  statusHandler,
  evaluateMatrix,
  handlePlayerData,
  gameSaveHandler,
} from '../../modules/game-mgmt';

import Board from './Board';
import Keyboard from './Keyboard';

import './Game.css';

import FUEL from '../../vocab-list';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = gameSaveHandler(FUEL);
  }

  render() {
    const newGameHandler = () =>
      this.setState({
        codle: getRandomVocab(FUEL),
        attempts: ['', '', '', '', '', ''],
        status: [],
        turn: 0,
        matrixHistory: [],
        win: false,
      });

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

      // If backspace keyed before win state
      if (winState === false && e.key === 'Backspace') {
        this.setState({
          attempts: attempts.map((el, i) => (i === turn ? el.substring(0, el.length - 1) : el)),
          turn: turn,
        });
      }

      if (e.key === 'Enter' && !FUEL.includes(attempts[turn])) {
        alert('Invalid guess.');
      } else if (
        // Set win state on enter if...
        e.key === 'Enter' && // Enter keyed
        attempts[turn].length === 5 && // Tile row is full
        attempts[turn] === this.state.codle && // Attempt matches code-le solution
        winState === false // Player hasn't already won
      ) {
        const attempt = attempts[turn].split('');
        const answer = this.state.codle;

        const matrix = evaluateMatrix(answer, attempt);
        const roundStatus = new Array(5).fill('-correct');

        this.setState({
          status: [...this.state.status, roundStatus],
          win: true,
          matrixHistory: [...this.state.matrixHistory, matrix],
        });

        handlePlayerData(turn, true);
        window.alert('Winner! Winner! Veggie Dinner!'); //  replace with function that triggers modal
        this.props.onGameEnd(); // Shows stats modal on game end

        // If enter key and wrong attempt
      } else if (e.key === 'Enter' && attempts[turn].length === 5 && turn !== 5 && winState === false) {
        const attempt = attempts[turn].split('');
        const answer = this.state.codle;

        const matrix = evaluateMatrix(answer, attempt);
        const roundStatus = statusHandler(attempt, answer);

        this.setState({
          status: [...this.state.status, roundStatus],
          turn: turn + 1,
          matrixHistory: [...this.state.matrixHistory, matrix],
        });
      } else if (e.key === 'Enter' && attempts[turn].length === 5 && turn === 5 && winState === false) {
        // Lose state
        const attempt = attempts[turn].split('');
        const answer = this.state.codle;

        const matrix = evaluateMatrix(answer, attempt);
        const roundStatus = statusHandler(attempt, answer);

        this.setState({
          status: [...this.state.status, roundStatus],
          matrixHistory: [...this.state.matrixHistory, matrix],
        });

        handlePlayerData(turn, false); // Updates lifetime data with loss stats
        window.alert('Keep trying, you got this.'); //  replace with function that triggers modal
        this.props.onGameEnd(); // Shows stats modal on game end
      }
    };

    const clickHandler = (e) => {
      const turn = this.state.turn;
      const newChar = e.target.innerHTML;
      const tagId = e.target.id;
      const winState = this.state.win;
      const attempts = this.state.attempts;

      if (newChar.length === 1 && tagId !== 'bck-key' && attempts[turn].length < 5) {
        this.setState({
          attempts: attempts.map((el, i) => (i === turn ? el + newChar.toLowerCase() : el)),
          turn: turn,
        });
      }

      if (tagId === 'bck-key' && winState === false) {
        this.setState({
          attempts: attempts.map((el, i) => (i === turn ? el.substring(0, el.length - 1) : el)),
          turn: turn,
        });
      }

      if (tagId === 'enter-key' && !FUEL.includes(attempts[turn])) {
        alert('Invalid guess.');
      }
      // Enter clicked, attempt correct...
      else if (
        tagId === 'enter-key' &&
        attempts[turn].length === 5 && // Tile row is full
        attempts[turn] === this.state.codle && // Attempt matches today's code-le
        winState === false // Player hasn't already won
      ) {
        const roundStatus = new Array(5).fill('-correct');

        this.setState({
          status: [...this.state.status, roundStatus],
          win: true,
        });
        handlePlayerData(turn, true);
        window.alert('Winner! Winner! Veggie Dinner!'); // replace with function that triggers modal
        this.props.onGameEnd(); // Shows stats modal on game end
      }

      // Enter clicked, attempt incorrect
      else if (tagId === 'enter-key' && attempts[turn].length === 5 && turn !== 5 && winState === false) {
        const attempt = attempts[turn].split('');
        const answer = this.state.codle;

        const matrix = evaluateMatrix(answer, attempt);
        const roundStatus = statusHandler(attempt, answer);

        this.setState({
          status: [...this.state.status, roundStatus],
          turn: turn + 1,
          matrixHistory: [...this.state.matrixHistory, matrix],
        });
      } else if (tagId === 'enter-key' && attempts[turn].length === 5 && turn === 5 && winState === false) {
        const attempt = attempts[turn].split('');
        const answer = this.state.codle;

        const matrix = evaluateMatrix(answer, attempt);
        const roundStatus = statusHandler(attempt, answer);

        this.setState({
          status: [...this.state.status, roundStatus],
          matrixHistory: [...this.state.matrixHistory, matrix],
        });
        handlePlayerData(turn, false);
        window.alert('Keep trying, you got this.'); // replace with function that triggers modal
        this.props.onGameEnd(); // Shows stats modal on game end
      }
    };

    window.localStorage.setItem('game-state', JSON.stringify(this.state));

    return (
      <div className="main">
        <div className="game">
          <button className="new-game-btn" onClick={newGameHandler}>
            New Game
          </button>
          <Board
            attempts={this.state.attempts}
            codle={this.state.codle}
            status={this.state.status}
            turn={this.state.turn}
          />
          <Keyboard onClick={clickHandler} onKeyDown={keyDownHandler} globalState={this.state.matrixHistory} />
        </div>
      </div>
    );
  }
}

export default Game;
