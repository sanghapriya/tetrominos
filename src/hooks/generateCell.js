import React, { useState, useEffect } from 'react';
import Tetromino from '../components/tetromino.component';

const GenerateCell = () => {

    const width = window.innerWidth;
    const height = window.innerHeight;
    
  
    const initialCoordinate = {
                              x:Math.floor(Math.random() * width),
                              y:Math.floor(Math.random() * height)
                          };
  
    const [coordinate, setCoordinate] = useState(initialCoordinate);

    useEffect(() => {
        const interval = setInterval(() => {
            setCoordinate({
                x:Math.floor(Math.random() * width),
                y:Math.floor(Math.random() * height)
            });
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    
      return <Tetromino x={coordinate.x} y = {coordinate.y}/>

      };

export default GenerateCell;