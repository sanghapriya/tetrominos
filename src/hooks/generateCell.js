import React, { useState, useEffect } from 'react';

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
    
      return (
        <rect x={coordinate.x} y={coordinate.y} width="10" height="10"/>
      );

      };

export default GenerateCell;