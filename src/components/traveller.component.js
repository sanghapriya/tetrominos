import React from 'react';
import {CELL_WIDTH} from '../utility/constants';

export default function Traveller(props){

    return <circle style={{stroke:"brown",fill:"brown"}} 
            cx={props.x} 
            cy={props.y} 
            r={CELL_WIDTH} 
            />}