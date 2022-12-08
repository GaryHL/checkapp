import React from "react";
import { MainButton } from "./Button_styled";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = () => {
  return (
    <React.Fragment>
      <MainButton>
        Longer Text
        <AiOutlineArrowRight />
      </MainButton>
    </React.Fragment>
  );
};

export default Button;
