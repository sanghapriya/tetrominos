import GenerateCell from './generateCell';
import { useState, useEffect } from 'react';
import {randomTetrominoType} from '../utility/generateTetromino';


const generateMultipleCells = () => {

  let elements =[];



  for (var i = 0; i < 10; i++) {
    let x = window.innerWidth;
    let y = Math.floor(Math.random()*window.innerHeight);
    let tetrominoType = randomTetrominoType();

    let element ={
      x:x,
      y:y,
      tetrominoType:tetrominoType,
      rate:[80,100,110,120,150,160,175,180,200,210,220][Math.floor(Math.random() * 11)],
      cell:GenerateCell(x,y,tetrominoType)
    }

    elements = [...elements, element];

  }
  
  return elements;
} 



const updateMultipleCells = (elements) => {

  console.log(elements)

  return elements.map((element) => {
                                    return {
                                      ...element,
                                      x:element.x<10?window.innerWidth:element.x-element.rate,
                                      cell:GenerateCell(element.x-1,element.y,element.tetrominoType)
                                       }
                                    
                            
                                  })
}

const GenerateCells = () => {

  
  

  const [cells, setCells] = useState(generateMultipleCells());

  

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCells(cells => updateMultipleCells(cells));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  

  return cells.map(obj => (obj.cell))
};


export default GenerateCells;