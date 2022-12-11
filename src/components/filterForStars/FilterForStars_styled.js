import styled, { keyframes } from "styled-components";
import { brandColours } from "../../variables/variables";

const tabActive = keyframes`
from{
    width:0%;
}
to{
    width:100%;
}
`;

export const ContainerFilter = styled.div`
   width: 100%;
   height: 7vh;
   display: flex;
   position: relative;
   justify-content: space-around;
   >:last-child{
      h2{
         color:white
      }
   }
`;

export const TabFilter = styled.div`
background-color:gray;
   width: auto;
   transition: 0.3s;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   transition: 0.3s;
   &:hover {
      cursor: pointer;
      transition: 0.3s;
      color: #000000;
   }
   > svg {
      position: absolute;
      z-index: 1;
      ${(props) => (props.isActive ? "scale:1.1;" : null)}
      ${(props) =>
         props.isActive
            ? "transform: translate(-0.05em, -0.05em); filter: drop-shadow(0 2px rgb(49, 49, 49));; transition: 0.2s;"
            : null}
      transition:0.3s;
   }
   > h2 {
      ${(props) => (props.isActive ? "scale:1.1;" : null)}
      position: absolute;
      z-index: 2;
      transition: 0.3s;
      color: ${brandColours.mainColor};
      font-family: "bangers";
      letter-spacing: 0.2rem;
   }

`;