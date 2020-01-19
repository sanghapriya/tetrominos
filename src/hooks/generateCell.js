import React from 'react';
import Tetromino from '../components/tetromino.component';

const GenerateCell = (x,y,tetrominoType) => {

      return <Tetromino x={x} y={y} tetrominoType={tetrominoType}/>

      };

export default GenerateCell;