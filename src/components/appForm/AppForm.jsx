import React, { useState } from "react";
import {
  TextField,
  UploadAppContainer,
  UploadAppBox,
  Container,
  DropDownContainer,
  DropDownBox,
  DropDownButton,
  DropDownMenu,
  DropDownMenuContainer,
  DropDownItem,
  AppDescription,
  ContainerScreens,
  UploadAppScreen,
} from "./AppForm_Styled";
import Button from "../button/Button";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { BiImageAlt } from "react-icons/bi";

const AppForm = () => {
  const [selectPlatform, setSelectPlatform] = useState(false);
  const [selectCategory, setSelectCategory] = useState(false);

  return (
    <React.Fragment>
      <TextField placeholder="Your App name" />
      <UploadAppContainer>
        <UploadAppBox>
          <BiImageAlt />
        </UploadAppBox>
      </UploadAppContainer>
      <Container>
        <DropDownContainer>
          <DropDownBox>
            <DropDownButton onClick={() => setSelectPlatform(!selectPlatform)}>
              <p>plataformas</p>
              {selectPlatform === true ? (
                <MdOutlineArrowDropUp />
              ) : (
                <MdOutlineArrowDropDown />
              )}
            </DropDownButton>

            <DropDownMenu>
              {selectPlatform === true ? (
                <DropDownMenuContainer>
                  <DropDownItem></DropDownItem>
                  <DropDownItem>
                    <input type="checkbox" id="cbox1" value="firstCheckbox" />
                    iOS
                  </DropDownItem>
                  <DropDownItem>
                    <input type="checkbox" id="cbox1" value="firstCheckbox" />
                    Android
                  </DropDownItem>
                  <DropDownItem>
                    <input type="checkbox" id="cbox1" value="firstCheckbox" />
                    webkit
                  </DropDownItem>
                </DropDownMenuContainer>
              ) : null}
            </DropDownMenu>
          </DropDownBox>{" "}
          <DropDownBox>
            <DropDownButton onClick={() => setSelectCategory(!selectCategory)}>
              <p>plataformas</p>
              {selectCategory === true ? (
                <MdOutlineArrowDropUp />
              ) : (
                <MdOutlineArrowDropDown />
              )}
            </DropDownButton>

            <DropDownMenu>
              {selectCategory === true ? (
                <DropDownMenuContainer>
                  <DropDownItem></DropDownItem>
                  <DropDownItem>
                    <input type="checkbox" id="cbox1" value="firstCheckbox" />
                    iOS
                  </DropDownItem>
                  <DropDownItem>
                    <input type="checkbox" id="cbox1" value="firstCheckbox" />
                    Android
                  </DropDownItem>
                  <DropDownItem>
                    <input type="checkbox" id="cbox1" value="firstCheckbox" />
                    webkit
                  </DropDownItem>
                </DropDownMenuContainer>
              ) : null}
            </DropDownMenu>
          </DropDownBox>
        </DropDownContainer>
      </Container>
      <AppDescription>
        <textarea placeholder={"Describe the app here..."}></textarea>
      </AppDescription>{" "}
      <ContainerScreens>
        <UploadAppScreen>
          <BiImageAlt />
        </UploadAppScreen>
      </ContainerScreens>
      <Container>
        <Button />
      </Container>
    </React.Fragment>
  );
};

export default AppForm;
