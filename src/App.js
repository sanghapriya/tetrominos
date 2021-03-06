import React from 'react';
import GenerateGameArea from './hooks/generateGameArea';
import GenerateScore from './hooks/generateScore';
import {ElementProvider} from './context/mainContext';



function App() {

  return (

      <ElementProvider onKeyPressed = { console.log("Key is pressed")}>
        <GenerateScore/>
        <GenerateGameArea/>
      </ElementProvider>
    
  );
}

export default App;
