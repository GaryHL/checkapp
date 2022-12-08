import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerSearchBar = styled(motion.div)`

    height:100vh;
   ${props=> props.noBlock == true ? "height:auto;" : null}
    width:100%;
    z-index:3;
    position:fixed;
    
   > form {
      width: calc(100% - 4px);
      height: calc(5vh + 1rem);
      border: 2px solid black;
      display: grid;
      grid-template-columns: 2fr auto;
      > input {
         padding: 0;
         height: 100%;
         border: none;
         background-color: #ffffff;
         outline: none;
         padding: 0 1rem;
         display: flex;
         align-items: center;
         font-size: 1.2rem;
         &::placeholder {
           color: black;
           font-size: 1.2rem;
           transition:0.3s;
        }
         &:focus {
            border: none;
            &::placeholder {
               color: transparent;
               transition:0.3s;
            }
        }
        
      }
      > button {
         height: 100%;
         border: none;
         background-color: black;
         color: white;
         padding: 0 1.5rem;
         > svg {
            font-size: 1.5rem;
         }
      }
   }
`;

export const ContainerResults = styled.div`
height:calc(100% - (5vh + 1rem + 4px));
background-color: #00000034;
`