import React from "react";
import { Container, UploadAppScreen } from "./LoadAppScreens_Styled";
import { BiImageAlt } from "react-icons/bi";

const LoadAppScreens = () => {
  return (
    <React.Fragment>
      <Container>
        <UploadAppScreen>
          <BiImageAlt />
        </UploadAppScreen>
      </Container>
    </React.Fragment>
  );
};

export default LoadAppScreens;
