import React from 'react';
import styled from 'styled-components';

const Tile = (props) => {
  let tileState = props.tileState;
  return (
    <TileComponent status={tileState} id={props.id} role="application" aria-label={props.id}>
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
    border: 2.3px
      ${(props) =>
        props.status === ''
          ? 'white'
          : props.status === 'correct'
          ? 'rgb(100, 252, 30)'
          : props.status === 'present'
          ? '#ffec8d'
          : 'rgba(94, 94, 94, 0.301)'}
      solid;
  }
`;
