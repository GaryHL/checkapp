import styled from "styled-components";

export const DetailedFilterContainer = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-columns: auto auto;
   position: relative;
   > span {
      z-index:3;
      display: flex;
      align-items: center;
      font-size:1.2rem;
      justify-content: center;
      padding: 0 1rem;
      cursor: pointer;
      &:hover {
         background-color: #e5e5e59a;
      }
      > :last-child {
         margin-left: 0.5rem;
      }
      > :first-child {
         margin-right: 0.5rem;
      }
   }
`;

export const FilterMenu = styled.div`
   height: auto;
   background-color: #ffffff;
   position: absolute;
   width: calc(100% - 2rem) ;
   top:0;
   gap:1rem;
   margin-top:5vh;
   padding:0 1rem;
   display:flex;
   flex-direction: column;
   >button{
      background-color:black;
      color:white;
      padding:0.5rem 0;
      margin:0.5rem 0;
      border:0;
      cursor:pointer;
      &:active{
         scale:0.95;
      }
   }
`;

export const ContainerRating = styled.div`
width:100%;
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
>span{
   background-color:#dfdfdf;
   display:flex;
   align-items:center;
   justify-content: center;
   font-size:1.2rem;
   padding: 0.2rem 0;
   border:2px solid gray;
   cursor:pointer;
   &:active{
      scale: 0.9;
   }
}`

export const ContainerPlatforms = styled.div`
>label{font-size:1.3rem;
   >input{
      margin: 0rem 0.5rem;
   }
}
display:flex;
`
export const ContainerInputsCategories = styled.div`
display:flex;
flex-wrap: wrap;
>label{font-size:1.3rem;
   >input{
      margin: 0rem 0.5rem;
   }
}
`