import styled from "styled-components"

export const CommentBoxContainer = styled.div`
height:100vh;
padding-left: 15px;

 >p{
  margin-top: 15px;
  font-size: 20px;
  
  }
  ;
  `
  
export const ContainerPersonAndFirst = styled.div`
  display: flex;
  font-size: 25px;
  gap:15px;
  align-items: center;
  `

export const PersonContainer = styled.div`
 font-size: 50px;
 `

export const FirstContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    font-size:20px;
    margin-left: 70px;
    `
    

export const SecondContainer = styled.div`
    display: flex;
    margin-top: 15px;
    font-size: 20px;
    align-items: center;
    >SVG{display: flex;
    font-size: 20px;
    color: #FCB700; }
    >h2{
     margin-left: 20px;
     font-size: large;
     font-weight: 20px;
     }
  `
  
export const ThirdContainer = styled.div`
    display: flex;
    gap:15px;
    align-items: center;
    padding-top: 10px;
    >SVG{
    font-size: 25px;
    color: #FCB700;
    }
`     
export const ButtonLike = styled.button`
    background: #fff;
    border: unset;
    outline: 0;
    font-size: 18px;
    cursor: pointer;
    color: #65676b;
    padding: 5px 10px;
    .liked {
    color: #0571ed;
}
    .liked i{
  animation: anim 0.5s ease-in-out;
  -webkit-animation: anim 0.5s ease-in-out;
}
`
