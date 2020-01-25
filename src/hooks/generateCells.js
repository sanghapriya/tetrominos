import GenerateCell from './generateCell';
import React,{ useState,useEffect, useContext } from 'react';
import {ElementContext} from '../context/mainContext';




const GenerateCells = () => {

  const [elements, setElements] = useContext(ElementContext);


  
      

  return elements.cellDetails.map(obj => (obj.cell))
};


export default GenerateCells;