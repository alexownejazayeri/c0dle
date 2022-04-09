import React from "react";

import Row from "./Row";
import Tile from "./Tile";

import "./HelpModal.css";

const HelpModal = () => {
  return (
    <div className="help-overlay">
      <div className="help-modal">
        <h1>👾 HOW TO PLAY 👾</h1>
        <p>
          In this take on everyone's favorite word game, players practice their
          programming vocab. Guess the <strong>CODE-LE</strong> in six tries.
          <br></br>
          <br></br>A guess must be a valid five-letter word related to web
          development or software engineering. Hit enter to submit.
          <br></br>
          <br></br>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </p>
        <hr></hr>
        <div>
          <strong>EXAMPLES</strong>
          <br></br>
          <br></br>
        <div className="tile-example">
          <Tile tileState="">A</Tile>
          <Tile tileState="">U</Tile>
          <Tile tileState="-correct">D</Tile>
          <Tile tileState="">I</Tile>
          <Tile tileState="">O</Tile>
        </div>
        <br></br>
        The letter 'D' is both in the word and in the right position.
        <br></br>
          <br></br>
        <div className="tile-example">
          <Tile tileState="">P</Tile>
          <Tile tileState="">A</Tile>
          <Tile tileState="">R</Tile>
          <Tile tileState="-present">S</Tile>
          <Tile tileState="">E</Tile>
        </div>
        <br></br>
        The letter 'S' is in the word, but not in the right position.
        <br></br>
          <br></br>
        <div className="tile-example">
          <Tile tileState="-incorrect">A</Tile>
          <Tile tileState="">S</Tile>
          <Tile tileState="">Y</Tile>
          <Tile tileState="">N</Tile>
          <Tile tileState="">C</Tile>
        </div>
        <br></br>
        The letter 'A' isn't in the word.
        </div>
        <hr></hr>
      <p>Unlike WORDLE, you can play CODE-LE as many times a day as you want since the point is to improve on your programminig vocab.</p>
      </div>
    </div>
  );
};

export default HelpModal;
