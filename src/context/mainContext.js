import React, {useState,useEffect,createContext} from 'react';
import GenerateCell from '../hooks/generateCell';
import {randomTetrominoType,getTetrominosEachCellLocation} from '../utility/generateTetromino';
import {CELL_WIDTH} from '../utility/constants';

export const ElementContext = createContext();



const generateMultipleCells = () => {

    let elements =[];

    for (var i = 0; i < 10; i++) {
      let x = window.innerWidth-20;
      let y = Math.floor(Math.random()*window.innerHeight-20);
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

    checkCollision(elements)


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


const checkCollision = (elements) => {

 elements.cellDetails.map((cellDetail) => {

  let fields = [["x1","y1"],["x2","y2"],["x3","y3"],["x4","y4"]];

  let coordinateDict = getTetrominosEachCellLocation(cellDetail.x,cellDetail.y,cellDetail.tetrominoType);

  fields.forEach(field => {
    let originX = coordinateDict[field[0]];
    let originY = coordinateDict[field[1]];
    let cellCoordinate = {x1:originX,
                      y1:originY,
                      x2:originX+CELL_WIDTH,
                      y2:originY,
                      x3:originX+CELL_WIDTH,
                      y3:originX-CELL_WIDTH,
                      x4:originX,
                      y4:originX-CELL_WIDTH}
    

  return


  })

 })
};




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
                        
                        
                    }, 500);
                    return () => clearInterval(interval);
                    }, []);

                return (
                    <ElementContext.Provider value={[elements, setElements]}>
                    {props.children}
                  </ElementContext.Provider>)
};