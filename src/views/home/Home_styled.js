import styled from "styled-components";
import { huesSec, brandColours } from "../../variables/variables";

export const ContainerHome = styled.div`
   min-height: 100vh;
   display: grid;
   grid-template-rows: 43vh 30vh auto;
`;

export const HeaderHome = styled.header`
   position: relative;
   display:flex;
   /* align-items: center; */
   justify-content: center;
   > span {
      height: 100%;
      width:100%;
      font-family: "Bangers";
      display: flex;
      align-items: center;
      background-color: ${huesSec.sec02};
      h1{
         padding: 0rem 1rem;
         font-size: 2.65rem;
         width:70%;
      }
   }
   > a {
      position: absolute;
      bottom: 0;
      margin-bottom: -3vh;
      width: 100%;
      max-width:600px;
   }
   @media (min-width: 700px) {
      display: flex;
      span{
         display: flex;
         align-items: center;
         justify-content: center;
         h1 {
            padding: 0;
            width:50%;
            font-size:3.5rem;
            text-align:center;
         }
      }
      >a{
         scale:1.2
      }
   }
`;

export const SearchBarHome = styled.div`
   background-color: ${brandColours.mainColor};
   display: flex;
   height: 100%;
   width: calc(100% - 4px);
   border: 2px solid black;
   justify-content: center;
   align-items: center;
   > :last-child {
      height: 6vh;
      position: absolute;
      scale: 0.8;
      max-width:550px;
      z-index: 2;
      
   }
`;
