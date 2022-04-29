import React from 'react';

import './Tile.css';

const Tile = (props) => {
  let tileState = props.tileState;
  return (
    <div className={`tile${tileState}`} id={props.id} role="application" aria-label={props.id}>
      {props.children}
    </div>
  );
};

export default Tile;
