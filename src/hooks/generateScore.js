import React,{ useState,useEffect, useContext } from 'react';
import {ElementContext} from '../context/mainContext';
import Score from '../components/score.component';


const GenerateScore = () => {

  
  

    const [elements, setElements] = useContext(ElementContext);
    
  
    return  <Score score={elements.travellerDetails.x+" , "+elements.travellerDetails.y} />
}


export default GenerateScore;