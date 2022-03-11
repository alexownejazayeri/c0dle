import React from 'react';
import ReactDOM from 'react';

import './Tile.css';

const Tile = (props) => {
    return(
        <div className='tile'>
            {props.children}
        </div>
    );
}

export default Tile;