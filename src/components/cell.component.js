import React from 'react';
import {CELL_WIDTH} from '../utility/constants';

export default function Cell (props)  {
    
    return <rect style={{fill: "red",stroke: "black" , strokeWidth: "1px"}} 
                        x={props.x} y={props.y} width={CELL_WIDTH} height={CELL_WIDTH}/>
}