import React from 'react';
import GenerateCells from './hooks/generateCells';




function App() {
  
  let width = window.innerWidth;
  let height = window.innerHeight;

  return (
    <div>
      <svg width={width} height={height} style = {{backgroundColor:"61B5FF"}}>
        {GenerateCells()}      
    </svg>

    </div>
  );
}

export default App;
