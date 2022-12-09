import styled from "styled-components";

export const CompareSection = styled.section`
  width: 100%;
  height: 100%;
  
`;

export const CompareDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items:center;
  padding:0 10%;
`;
export const ContainerSelectApp = styled.div`
  display:grid;
  width:100%;
  grid-template-columns:50% 50%;
  >:first-child{border:2px solid black;
  >ul{list-style:none;
    >li{margin:0.5rem 0; &:hover{scale:1.1;}}}}
  >:last-child{border:2px solid black;
    >ul{list-style:none;
      >li{margin:0.5rem 0; &:hover{scale:1.1;}}}}
    
`;

export const SelectApp = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
export const ComingApp = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconApp = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 25px;
`;

export const CompareButton = styled.div`
  display: flex;
  justify-content: center;

  >button{background-color:black;color:white; border-radius:25px;border:none;padding:0.5rem 0.5rem; margin:1rem 0rem;}
`;

export const CompareResult = styled.div`
  width: 80%;
  padding:5% 10% ;
  display: grid;
  grid-template-columns:50% 50%;
  
`;
export const SelectResult = styled.div`
  align-self:center;
 >ul{list-style: none;
 >li{margin:1rem 0;} }
`;
export const ComingResult = styled.div`
align-self:center;
>ul{list-style:none;
  >li{margin:1rem 0;} }
`;
