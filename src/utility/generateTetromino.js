import React from 'react';
import Cell from '../components/cell.component';
import {CELL_WIDTH} from '../utility/constants'



export const tetrominos = ( x, y, tetrominoType) => {
    
switch(tetrominoType){

        case "I" : return <div>
                        <Cell x={x-CELL_WIDTH} y={y}  />
                        <Cell x={x} y={y} />
                        <Cell x={x+CELL_WIDTH} y={y}  />
                        <Cell x={x+2*CELL_WIDTH} y={y}  />
                        </div>;
        
        case "J": return <div>
                    <Cell x={x} y={y-2*CELL_WIDTH}  />
                    <Cell x={x} y={y-CELL_WIDTH} />
                    <Cell x={x} y={y}  />
                    <Cell x={x-CELL_WIDTH} y={y}  />
                    </div>;

         case "O": 
                return <div>
                    <Cell x={x} y={y-CELL_WIDTH}  />
                    <Cell x={x-CELL_WIDTH} y={y-CELL_WIDTH} />
                    <Cell x={x} y={y}  />
                    <Cell x={x-CELL_WIDTH} y={y}  />
                    </div>;
         case "L": 
           return  <div>
                    <Cell x={x} y={y-2*CELL_WIDTH}  />
                    <Cell x={x} y={y-CELL_WIDTH} />
                    <Cell x={x} y={y}  />
                    <Cell x={x+CELL_WIDTH} y={y}  />
                    </div>;
        case "T": 
            return <div>
                    <Cell x={x-CELL_WIDTH} y={y}  />
                    <Cell x={x} y={y} />
                    <Cell x={x+CELL_WIDTH} y={y}  />
                    <Cell x={x} y={y+CELL_WIDTH}  />
                    </div>;
        default:
                return <div></div>


    }

}


export const getTetrominosEachCellLocation = (x,y,tetrominoType) => {

    switch(tetrominoType){

        case "I" : return {x1:x-CELL_WIDTH,y1:y,x2:x,y2:y,x3:x+CELL_WIDTH,y3:y,x4:x+2*CELL_WIDTH,y4:y};
        
        case "J":  return {x1:x,y1:y-2*CELL_WIDTH,x2:x,y2:y-CELL_WIDTH,x3:x+CELL_WIDTH,y3:y,x4:x-CELL_WIDTH,y4:y};

        case "O": return {x1:x,y1:y-CELL_WIDTH,x2:x-CELL_WIDTH,y2:y-CELL_WIDTH,x3:x,y3:y,x4:x-CELL_WIDTH,y4:y};

        case "L": return {x1:x,y1:y-2*CELL_WIDTH,x2:x,y2:y-CELL_WIDTH,x3:x,y3:y,x4:x+CELL_WIDTH,y4:y};

        case "T": return {x1:x-CELL_WIDTH,y1:y,x2:x,y2:y,x3:x,y3:y+CELL_WIDTH,x4:x+CELL_WIDTH,y4:y};

        default:
                return <svg></svg>


    }



};



export const randomTetrominoType = () => {
    const tetromions = 'IJLOT';
    const randTetromino = tetromions[Math.floor(Math.random() * tetromions.length)]
    return randTetromino
};
