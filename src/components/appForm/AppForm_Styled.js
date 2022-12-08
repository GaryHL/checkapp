import styled from "styled-components";

export const TextField = styled.input`
  display: flex;

  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;

  border: none;
  overflow: auto;
  outline: none;
  resize: none; /*remove the resize handle on the bottom right*/

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;

  border: 2px solid black;

  height: 3rem;
  padding-left: 1rem;
  font-size: 1.5rem;
`;


export const Container = styled.div`
  border-top: 2px solid black;
`;

export const UploadAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const UploadAppBox = styled.div`
  width: 5rem;
  height: 5rem;
  border: 2px dashed #000;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const DropDownBox = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  background-color: #fff4d6;
  border: 2px solid black;
  border-top: none !important;
  color: black;
  width: auto;
  padding: 1rem;
  font-size: 1.5rem;
`;

export const DropDownButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const DropDownMenu = styled.div`
  ${"" /* position: absolute; */}
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  ${"" /* height: 3rem; */}
`;

export const DropDownMenuContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: auto;
  height: auto;
`;

export const DropDownItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 0 0 1rem 0;
  z-index: 1;
  font-size: 1.2rem;

  &:first-of-type {
    display: flex;
    justify-content: space-between;
  }
  > input {
    width: 1rem;
    height: 1rem;
    outline: 1px solid grey;
  }!
`;

export const DropDownContainer = styled.div`
  height: auto;
`;

export const AppDescription = styled.div`
  display: flex;
  border: 2px solid black;
  border-top: none !important;
  height: 5rem;

  padding: 1rem;
  font-size: 1rem;
  > textarea {
    border: none;
    overflow: auto;
    outline: none;
    resize: none; /*remove the resize handle on the bottom right*/

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    font-size: 1.2rem;
    font-family: "Atkinson Hyperlegible", sans-serif;
  }
`;

export const ContainerScreens = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1rem;
`;

export const UploadAppScreen = styled.div`
  width: 6.5rem;
  height: 12rem;
  border: 2px dashed #000;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    width: 2rem;
    height: 2rem;
  }
`;
