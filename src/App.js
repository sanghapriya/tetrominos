import React from 'react';
import GenerateCells from './hooks/generateCells';
import GenerateTraveller from './hooks/generateTraveller';
import GenerateScore from './hooks/generateScore';
import {ElementProvider} from './context/mainContext';



function App() {
  
  let width = window.innerWidth;
  let height = window.innerHeight;

  return (

      <ElementProvider>
      
       <GenerateScore/>
      <svg width={width} height={height} style = {{backgroundColor:"61B5FF"}}> 
        <GenerateCells/>
        <GenerateTraveller/>
        </svg>  
       
      </ElementProvider>
    
  );
}

export default App;
