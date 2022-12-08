import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1rem;
  `;

export const UploadAppScreen = styled.div`
  width: 6.5rem;
  height: 12rem;
  border: 2px dashed #000;
  border-radius: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    width: 2rem;
    height: 2rem;
  }
`;
