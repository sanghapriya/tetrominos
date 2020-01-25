import React, {useState,useEffect,createContext} from 'react';
import GenerateCell from '../hooks/generateCell';
import {randomTetrominoType} from '../utility/generateTetromino';

export const ElementContext = createContext();



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


    return {
      ...elements,
      score:elements.score+1,
      cellDetails:elements.cellDetails.map((cellDetail) => {
                                      return {
                                        ...cellDetail,
                                        x:cellDetail.x<10?window.innerWidth:cellDetail.x-cellDetail.rate,
                                        cell:GenerateCell(cellDetail.x-1,cellDetail.y,cellDetail.tetrominoType)
                                        }
                                      
                              
                                    })
          }
}





export const ElementProvider = props => {

                const [elements,setElements] =useState({
                                                    cellDetails: generateMultipleCells(),
                                                    score:0,
                                                    travellerDetails:{
                                                                        x:window.innerWidth/4,
                                                                        y:window.innerHeight/2,
                                                                        grab:false
                                                                    }                                                        
                                                        });


                useEffect(() => {
                    const interval = setInterval(() => {
                        
                        setElements(elements => updateMultipleCells(elements));
                    }, 1000);
                    return () => clearInterval(interval);
                    }, []);

                return (
                    <ElementContext.Provider value={[elements, setElements]}>
                    {props.children}
                  </ElementContext.Provider>)
};