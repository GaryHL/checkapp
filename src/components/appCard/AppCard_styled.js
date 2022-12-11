import styled from "styled-components";
import {Link} from  "react-router-dom";
import {motion} from 'framer-motion'

export const AppCardLink = styled(Link) `
   text-decoration: none ;
   color: black;
  `

export const GeneralDiv = styled(motion.div)`
   width: 100%;
   border:2px solid black;
   border-bottom: 0;
   height: 100%;
   display: flex;
   align-items: center;
`;
export const IconImg = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   max-width: 250px;
   height: 100%;
   padding: 1rem;
   > img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 10px;
   }
`;
//Trailer Section only visible in desktop

export const InfoApp = styled.div`
   display:flex;
   flex-direction: column;
   height: 100%;
   > h4 {
      display:flex;
      align-items: center;
      font-size: 100%;
      font-weight: bold;
      padding:0.5rem 0 0 0;
   }
   > p {
      display: flex;
      font-size: 12px;
      padding:0.5rem 0;
   }
`;

export const Platforms = styled.div`
   padding: 0.5rem 0rem 0 0 ;
   display: flex;
   gap: 0.5rem;
   > p {
      background-color: #e5931fbc;
      width: 50%;
      padding:0.2rem 0.5rem;
      justify-content: center;
      display: flex;
   }
`;
export const Rating = styled.div`
   display: flex;
   gap: 10px;
   padding:0.5rem 0 ;
   >p{
      display:flex;
      align-items:center;
      >svg{
         color: #fda324f0 ;
         margin-left: 0.2rem;
      }
   }
`;
