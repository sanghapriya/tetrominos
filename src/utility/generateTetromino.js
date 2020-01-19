import React from 'react';
import Cell from '../components/cell.component';
import {CELL_WIDTH} from '../utility/constants'



export const tetrominos = ( x, y, tetrominoType) => {
    
switch(tetrominoType){

        case "I" : return <svg>
                        <Cell x={x-CELL_WIDTH} y={y}  />
                        <Cell x={x} y={y} />
                        <Cell x={x+CELL_WIDTH} y={y}  />
                        <Cell x={x+2*CELL_WIDTH} y={y}  />
                        </svg>;
        
        case "J": return <svg>
                    <Cell x={x} y={y-2*CELL_WIDTH}  />
                    <Cell x={x} y={y-CELL_WIDTH} />
                    <Cell x={x} y={y}  />
                    <Cell x={x-CELL_WIDTH} y={y}  />
                    </svg>;

         case "O": 
                return <svg>
                    <Cell x={x} y={y-CELL_WIDTH}  />
                    <Cell x={x-CELL_WIDTH} y={y-CELL_WIDTH} />
                    <Cell x={x} y={y}  />
                    <Cell x={x-CELL_WIDTH} y={y}  />
                    </svg>;
         case "L": 
           return  <svg>
                    <Cell x={x} y={y-2*CELL_WIDTH}  />
                    <Cell x={x} y={y-CELL_WIDTH} />
                    <Cell x={x} y={y}  />
                    <Cell x={x+CELL_WIDTH} y={y}  />
                    </svg>;
        case "T": 
            return <svg>
                    <Cell x={x-CELL_WIDTH} y={y}  />
                    <Cell x={x} y={y} />
                    <Cell x={x+CELL_WIDTH} y={y}  />
                    <Cell x={x} y={y+CELL_WIDTH}  />
                    </svg>;
        default:
                return <svg></svg>


    }

}



export const randomTetrominoType = () => {
    const tetromions = 'IJLOT';
    const randTetromino = tetromions[Math.floor(Math.random() * tetromions.length)]
    return randTetromino
};
