import React from 'react';
import Cell from './cell.component';

export default function Tetromino (props)  {
    console.log(props);

  
      return(
          <svg>
              {(new Array(16)).map(<Cell x={props.x} y={props.y} />)}
          </svg>)
}