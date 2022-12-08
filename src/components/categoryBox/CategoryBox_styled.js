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
  flex-wrap: wrap;
  gap: 1rem;
  width: calc(100% -1rem);
  height: auto;
  padding:1rem;
  > button {
    display: flex;
    align-items: center;
    height: 3rem;
    padding: 0 1rem 0 0;
    border: 2px solid black;
    background-color: white;
    font-size: 1.5rem;
    cursor:pointer;
    &:active{
      background-color: #d7d7d7;
      scale:0.9;

    }
    > svg {
      padding: 0 0.5rem 0 0.5rem;
      font-size: 2rem;
    }
  }
`;
