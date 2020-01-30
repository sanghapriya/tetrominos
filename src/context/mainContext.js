import React, {useState,useEffect,createContext} from 'react';
import GenerateCell from '../hooks/generateCell';
import {randomTetrominoType,getTetrominosEachCellLocation} from '../utility/generateTetromino';
import {CELL_WIDTH} from '../utility/constants';

export const ElementContext = createContext();



const generateMultipleCells = () => {

    let elements =[];

    for (var i = 0; i < 4; i++) {
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
    console.log(elements);

    if(checkCollision(elements) & elements.isUpdate){
      return {
        ...elements,
        isUpdate:false
      }
    }
    else{
      if(elements.isUpdate){
      
      return {
          ...elements,
          score:elements.score+1,
          cellDetails:elements.cellDetails.map((cellDetail) => {
                                          
                                          return {
                                            ...cellDetail,
                                            x:cellDetail.x<10?window.innerWidth:cellDetail.x-10,
                                            cell:GenerateCell(cellDetail.x-1,cellDetail.y,cellDetail.tetrominoType)
                                            }
                                          
                                  
                                        })
              }
            }
            else{
              return elements
            }}
}


function checkCollision(elements) {

  let collisionFlag = false;
  
  
 for (let cellindex in elements.cellDetails){

  let cellDetail = elements.cellDetails[cellindex];
  let coordinateDict = getTetrominosEachCellLocation(cellDetail.x,cellDetail.y,cellDetail.tetrominoType);
  let fields = [["x1","y1"],["x2","y2"],["x3","y3"],["x4","y4"]];

  for (let fieldIndex in fields){

    let field = fields[fieldIndex];
    let rectCentreX = coordinateDict[field[0]]-CELL_WIDTH/2;
    let rectCentreY = coordinateDict[field[1]]-CELL_WIDTH/2;
    

    let collision = Math.pow((Math.pow((rectCentreX-elements.travellerDetails.x),2)+
                    Math.pow((rectCentreY-elements.travellerDetails.y),2)),0.5)<CELL_WIDTH

    if(collision & !collisionFlag){          
                  // console.log("collision") 
                  collisionFlag = true     
                  
                } 
              }
            }

          
 return collisionFlag;
};




export const ElementProvider = props => {
                
                const [elements,setElements] =useState({
                                                    isUpdate:true,
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
                              
                              }
                             
                              
                          , 100);
                          return () => clearInterval(interval);
                          }, []);
                    

                return (
                    <ElementContext.Provider value={[elements, setElements]}>
                    {props.children}
                  </ElementContext.Provider>)
};