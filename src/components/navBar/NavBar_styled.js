import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";

import { brandColours, huesMain } from "../../variables/variables";

export const ContainerNavBar = styled(motion.div)`
   width: calc((100% - 4px) - 2rem);
   height: 5vh;
   padding: 0.5rem 1rem;
   position: fixed;
   background-color: ${huesMain.hues02};
   border: 2px solid ${brandColours.blackColor};
   display: flex;
   justify-content: space-between;
   align-items: center;
   z-index: 2;
`;

export const ContainerLogo = styled(Link)`
   display: flex;
   outline: none;
   text-decoration: none;
   align-items: center;
   color: ${brandColours.blackColor};
   &:hover {
      scale: 1.1;
      cursor: pointer;
   }
   &:active {
      scale: 1;
   }
   > svg {
      font-size: 1.5rem;
   }
   > h2 {
      font-size: 1.3rem;
      font-weight: 500;
      margin-left: 0.5rem;
      user-select: none; 
   }
`;

export const ContainerSettings = styled.div`
   display: flex;
   align-items: center;
   &:first-child {
      margin-left: 0.5rem;
   }
   > svg {
      font-size: 1.5rem;
      margin-left: 0.5rem;
      position: relative;
      &:hover {
         scale: 1.2;
         cursor: pointer;
      }
      &:active {
         scale: 1;
      }
   }
`;

export const Menu = styled(motion.nav)`
   width: calc(100% - 4px);
   position: fixed;
   border:2px solid black;
   z-index: 5;
   height: 60vh;
   ${(props) => (props.isOpen ? "margin:0;" : "margin-top:-61vh;")}
   ${(props) => (props.isOpen ? "box-shadow: 0vh 0 0.2rem black;" : null)}
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: ${brandColours.mainColor};
   > ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      user-select: none; 
      > li {
         list-style: none;
         font-size: 1.5rem;
         cursor: pointer;
         text-decoration: none;
         background-image: linear-gradient(currentColor, currentColor);
         background-position: 0% 100%;
         background-repeat: no-repeat;
         background-size: 0% 2px;
         transition: background-size 0.3s;
         &:hover {
            background-size: 100% 2px;
            scale: 1.1;
         }
         &:active {
            scale: 1;
         }
         transition:0.3s;
      }
   }
   > svg{
    position:absolute;
    top:0;
    right:0;
    margin:1rem;transition:0.3s;
    cursor:pointer;
    &:hover {
            scale: 1.2;
            transition:0.3s;
         }
         &:active {
            scale: 1;
         }
   }
`;

export const LinkMenu = styled(Link)`
   text-decoration: none;
   align-items: center;
   color: ${brandColours.blackColor};
`;

export const ContainerMenu = styled.div`
   width: 100%;
   position:absolute;
   
   ${(props) => (props.isOpen ? "background-color: #0000009a;height: 100vh;" : null)}
`;