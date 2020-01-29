import React from 'react';
import {CELL_WIDTH} from '../utility/constants';
import {StyledTraveller} from './StyledTraveller';

export default function Traveller(props){

    return <StyledTraveller color="brown"
            cx={props.x} 
            cy={props.y} 
            r={CELL_WIDTH} 
            />}