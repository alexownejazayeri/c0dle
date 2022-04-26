import React from 'react';

import Tile from './Tile';

import './Row.css';

const Row = (props) => {
  const tileRender = (str) => {
    let tileArr = Array(5).fill('');
    const rowState = props.status;

    return tileArr.map((el, i) => (
      <Tile
        key={i}
        id={`tile-${i}`}
        codle={props.codle}
        char={str[i]}
        position={i}
        tileState={rowState[i]}
      >
        {str[i]}
      </Tile>
    ));
  };

  return <div className='tile-row'>{tileRender(props.word)}</div>;
};

export default Row;