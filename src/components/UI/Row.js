import React from 'react';
import ReactDOM from 'react-dom';

import Tile from './Tile';

import './Row.css';

const Row = (props) => {
    const tileRender = (str) => {
        let tileArr = Array(5).fill("");
        return tileArr.map((el, i) => <Tile key={i} id={`tile-${i}`}>{str[i]}</Tile>)
      }
    
    return(
        <div className="tile-row">
          {tileRender(props.word)}
        </div>
    );
}

export default Row;