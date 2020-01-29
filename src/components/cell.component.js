import React from 'react';
import {CELL_WIDTH} from '../utility/constants';    
import {StyledCell} from './StyledCells';



export default function Cell (props)  {
    
    
    return <StyledCell color="red" x={props.x} y={props.y} width={CELL_WIDTH} height={CELL_WIDTH}/>
}