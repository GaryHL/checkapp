import styled from 'styled-components';
import { brandColours } from '../../variables/variables';

export const ContainerApps =  styled.div`
width:100%;
height:auto;
`
export const ContainerFilter = styled.div`
height:5vh;
width:calc(100% - 4px);
border:2px solid black;
display:flex;
justify-content:space-around;
align-items:center;
>span{
    font-size:1.4rem;
}
`

export const Banner = styled.div`
width:calc(100% - 2rem);
height:5vh;
color:black;
background-color:${brandColours.mainColor};
padding:0 1rem;
display:flex;
align-items: center;
`

export const Cards = styled.div`
width:calc(100% - 4px);
display:grid;
grid-gap:0.2rem;
@media(min-width:700px){
    grid-template-columns: auto auto;
}
@media(min-width:1000px){
    grid-template-columns: auto auto auto;
}

`