import styled from 'styled-components';

export const StyledTraveller = styled.div`

position: absolute;
border-style: solid;
left: ${props => props.cx}px;
top:  ${props => props.cy}px;
background-color: ${props => props.color};
width: ${props => props.r}px;
height:${props => props.r}px;
border-radius: 50%;
display: inline-block;
`