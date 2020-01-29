import GenerateCells from './generateCells';
import GenerateTraveller from './generateTraveller';
import React,{ useState,useEffect, useContext } from 'react';
import {ElementContext} from '../context/mainContext';
import {StyledStage} from './style/StyledStage';


const GenerateGameArea = () => {

    let width = window.innerWidth-20;
    let height = window.innerHeight-20;
    const [elements, setElements] = useContext(ElementContext);
  
    // return <svg width={width} height={height} style = {{backgroundColor:"61B5FF"}}
       return   <StyledStage width={width} height={height}
                onKeyDown = {()=>{console.log("Hello World")}}
                onMouseMove = {(e) => {     
                                        e.persist();
                                        
                                    if (elements.travellerDetails.grab) {
                                    return setElements(
                                                    {...elements,   
                                                        travellerDetails:{
                                                                    grab:elements.travellerDetails.grab, 
                                                                    x:(elements.travellerDetails.grab?e.clientX:elements.travellerDetails.x),
                                                                    y:(elements.travellerDetails.grab?e.clientY:elements.travellerDetails.y)
                                                                    }})
                                                                }
                                        else {return elements}
                                            }}
                onMouseUp = {(e) => {   

                                    return setElements({...elements,   
                                                        travellerDetails:
                                                            {...elements.travellerDetails,
                                                            grab:false,
                                                            x:e.clientX,
                                                            y:e.clientY}
                                                        })
                                                            }}   > 
    <GenerateCells/>
    <GenerateTraveller/>
    </StyledStage>  
  };
  
  
  export default GenerateGameArea;