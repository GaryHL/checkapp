import React from "react";
import {
  ComingApp,
  ComingResult,
  CompareButton,
  CompareDiv,
  CompareResult,
  CompareSection,
  IconApp,
  SelectApp,
  SelectResult,
} from "./CompareApp_Style";

const CompareApp = () => {
  return (
    <CompareSection>
      <CompareDiv>
        <SelectApp>
          <IconApp></IconApp>
          <h3>Instagram</h3>
        </SelectApp>

        <div>
          <p>VS</p>
        </div>

        <ComingApp>
          <IconApp></IconApp>
          <h3>Facebook</h3>
        </ComingApp>
      </CompareDiv>
      <CompareButton>
        <button>Compare Apps</button>
      </CompareButton>
      <hr></hr>
      <CompareResult>
        <SelectResult></SelectResult>
        <ComingResult></ComingResult>
      </CompareResult>
    </CompareSection>
  );
};
export default CompareApp;
