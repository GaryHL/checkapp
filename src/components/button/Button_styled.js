import styled from "styled-components";

export const MainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  overflow: auto;
  outline: none;

  height: 3rem;

  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  width: fill-available;
  padding: 0.5rem 1rem;
  margin: 1rem;

  background-color: black;
  font-size: 1.5rem;
  color: white;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  
  &:hover {
    background-color: white;
    color: black;
  }
`;
