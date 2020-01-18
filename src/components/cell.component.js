import React from 'react';

export default function Cell (props)  {
    console.log(props);
    return <rect style={{fill: "red"}} x={props.x} y={props.y} width="10" height="10"/>
}