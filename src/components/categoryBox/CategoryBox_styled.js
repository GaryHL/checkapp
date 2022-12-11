import styled from "styled-components";

export const ContainerCategoryBox = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;

   height: auto;
`;

export const RowCategoryBox = styled.div`
   display: flex;
   align-items: flex-start;
   @media(min-width: 700px){
      justify-content: center;
   }
   flex-wrap: wrap;
   gap: 1rem;
   width: calc(100% -1rem);
   height: auto;
   padding: 1rem;
   > a {
    text-decoration: none;
      > button {
         display: flex;
         align-items: center;
         min-height:3rem;
         padding: 0 1rem 0 0;
         border: 2px solid black;
         background-color: white;
         font-size: 1.5rem;
         cursor: pointer;
         &:hover{
            scale: 1.1;
            background-color: #e9e9e9;
         }
         &:active {
            background-color: #d7d7d7;
            scale: 0.9;
         }
         > svg {
            padding: 0 0.5rem 0 0.5rem;
            font-size: 2rem;
         }
      }
   }
   @media (min-width:700px){
      >a{
        
      }
   }
`;
