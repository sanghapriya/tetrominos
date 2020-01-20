import React from 'react';
import {CELL_WIDTH} from '../utility/constants';

export default function Traveller(props){

    return <circle style={{stroke:"red",fill:"magenta"}} 
            cx={props.x} 
            cy={props.y} 
            r={CELL_WIDTH} 
            />}