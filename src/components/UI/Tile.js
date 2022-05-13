import React from 'react';
import styled from 'styled-components';

// import './Tile.css';

const Tile = (props) => {
  let tileState = props.tileState;
  return (
    <TileComponent className={`${tileState}`} id={props.id} role="application" aria-label={props.id}>
      {props.children}
    </TileComponent>
  );
};

export default Tile;

//================================

export const TileComponent = styled.div`
   {
    display: flex;
    font-size: 2rem;
    text-align: center;
    line-height: 2rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    user-select: none;
    height: 55px;
    width: 55px;
    border-radius: 15px;
    border: 2.3px white solid;
  }

  &.correct {
    border: 2.3px rgb(100, 252, 30) solid;
  }

  &.present {
    border: 2.3px #ffec8d solid;
  }

  &.incorrect {
    border: 2.3px rgba(94, 94, 94, 0.301) solid;
  }
`;
