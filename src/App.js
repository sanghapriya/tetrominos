import React from 'react';
import GenerateCells from './hooks/generateCells';
import GenerateTraveller from './hooks/generateTraveller';



function App() {
  
  let width = window.innerWidth;
  let height = window.innerHeight;

  return (
    <div onKeyDown={() => console.log("keyPressed")}>
      <svg width={width} height={height} style = {{backgroundColor:"61B5FF"}}>
        {GenerateCells()} 
        {GenerateTraveller()}     

          
    </svg>  
          
   
    

    </div>
  );
}

export default App;
