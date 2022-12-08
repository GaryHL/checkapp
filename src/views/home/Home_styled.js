import styled from "styled-components";
import { huesSec, brandColours } from "../../variables/variables";

export const ContainerHome = styled.div`
   height: 100vh;
   display: grid;
   grid-template-rows: 40vh 30vh 300px;
`;

export const HeaderHome = styled.header`
   position: relative;
   > h1 {
      height: 100%;
      font-size: 3rem;
      padding: 0rem 1rem;
      font-family: "Bangers";
      display: flex;
      align-items: center;
      background-color: ${huesSec.sec02};
   }
   > :last-child {
      bottom: 0;
      margin-top:-3vh;
   }
`;

export const SearchBarHome = styled.div`
   background-color: ${brandColours.mainColor};
   display: flex;
   height: 100%;
   width:calc(100% - 4px);
   border:2px solid black;
   justify-content: center;
   align-items: center;
   > :last-child {
      height: 6vh;
      position:absolute;
      scale: 0.8;
      z-index:2;
   }
`;
