import GenerateCell from './generateCell';
import { useState, useEffect } from 'react';


const generateMultipleCells = () => {

  let elements =[];

  for (var i = 0; i < 100; i++) {

    let y = Math.floor(Math.random()*window.innerHeight);

    elements = [...elements, GenerateCell(y)];

  }

  return elements;
} 

const GenerateCells = () => {

  

  const [cells, setCells] = useState(generateMultipleCells());

  useEffect(() => {
    const interval = setInterval(() => {
      setCells(generateMultipleCells());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  

  return cells.map(obj => (obj))
};


export default GenerateCells;