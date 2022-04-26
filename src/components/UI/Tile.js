import React from 'react';

import './Tile.css';

const Tile = (props) => {
    let tileState = props.tileState;
    return(
        <div className={`tile${tileState}`}>
            {props.children}
        </div>
    );
};

export default Tile;