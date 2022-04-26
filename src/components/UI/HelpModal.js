import React from 'react';
import Tile from './Tile';

import './HelpModal.css';

const HelpModal = (props) => {
  return (
    <div className='help-overlay' onClick={props.onClick}>
      <div className='help-modal'>
        <h1>👾 HOW TO PLAY 👾</h1>
        <div className='close-icon'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18.1727 18.1726C17.5088 18.8365 16.4324 18.8365 15.7685 18.1726L1.2021 3.60625C0.53821 2.94235 0.538209 1.86597 1.2021 1.20208V1.20208C1.86599 0.538191 2.94237 0.538191 3.60626 1.20208L18.1727 15.7685C18.8366 16.4324 18.8366 17.5088 18.1727 18.1726V18.1726Z'
              fill='white'
            />
            <path
              d='M1.20208 18.1726C0.53819 17.5087 0.53819 16.4324 1.20208 15.7685L15.7685 1.20207C16.4324 0.53818 17.5088 0.538179 18.1726 1.20207V1.20207C18.8365 1.86596 18.8365 2.94234 18.1726 3.60623L3.60625 18.1726C2.94235 18.8365 1.86597 18.8365 1.20208 18.1726V18.1726Z'
              fill='white'
            />
          </svg>
        </div>
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
        <div className='tile-example'>
          <Tile tileState=''>A</Tile>
          <Tile tileState=''>U</Tile>
          <Tile tileState='-correct'>D</Tile>
          <Tile tileState=''>I</Tile>
          <Tile tileState=''>O</Tile>
        </div>
        <br></br>
        The letter 'D' is both in the word and in the right position.
        <br></br>
          <br></br>
        <div className='tile-example'>
          <Tile tileState=''>P</Tile>
          <Tile tileState=''>A</Tile>
          <Tile tileState=''>R</Tile>
          <Tile tileState='-present'>S</Tile>
          <Tile tileState=''>E</Tile>
        </div>
        <br></br>
        The letter 'S' is in the word, but not in the right position.
        <br></br>
          <br></br>
        <div className='tile-example'>
          <Tile tileState='-incorrect'>A</Tile>
          <Tile tileState=''>S</Tile>
          <Tile tileState=''>Y</Tile>
          <Tile tileState=''>N</Tile>
          <Tile tileState=''>C</Tile>
        </div>
        <br></br>
        The letter 'A' isn't in the word.
        </div>
        <hr></hr>
      <p>Unlike WORDLE, you can play CODE-LE as many times a day as you want. The goal is to make learning programming vocab fun!</p>
      </div>
    </div>
  );
};

export default HelpModal;
