import React from 'react';
import Tetromino from '../components/tetromino.component';

const GenerateCell = (y) => {

    let x = Math.floor(Math.random()*window.innerWidth);
    
    
   
      return <Tetromino x={x} y={y}/>

      };

export default GenerateCell;