import styled from "styled-components";
import { huesSec } from "../../variables/variables";

export const ContainerFilter = styled.div`
   display: grid;
   background-color:${huesSec.sec02};
   grid-template-rows: 24vh auto;
   > :first-child {
    align-self:flex-end;
    margin-bottom:4.5vh;
    z-index:1;
   }
`;

