import React from 'react';
import ReactDOM from 'react-dom';

import Tile from './Tile';

import './Row.css';

const Row = () => {
    const tileRender = () => {
        let rowArr = Array(5).fill("");
        return rowArr.map((el, i) => <Tile key={el + i}>{el}</Tile>)
      }
    
    return(
        <div className="tile-row">
          {tileRender()}
        </div>
    );
}

export default Row;