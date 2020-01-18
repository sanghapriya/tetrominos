import React, { useState, useEffect } from 'react';
import GenerateCell from './hooks/generateCell';



const getCell = () => {

  const dots = new Array(100);

  return dots.map(dot => GenerateCell())
};


function App() {
  
  let width = window.innerWidth;
  let height = window.innerHeight;

  let x = Math.floor(Math.random() * width);
  let y = Math.floor(Math.random() * height);

  return (
    <div>
      <svg width={width} height={height}>
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
        {GenerateCell()}
      
      
    </svg>

    </div>
  );
}

export default App;
