import React, { useState, useContext } from "react";
import AppContext from "../../context/AppContext";
import { Link } from "react-router-dom";
import { AddComment } from "../SingleApp/SingleApp_Style";
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
  ContainerSelectApp,
} from "./CompareApp_Style";


const CompareApp = () => {
  const [firstApp, setFirstApp] = useState({});
  const [secondApp, setSecondApp] = useState({});
  const { jsonApp } = useContext(AppContext);
  const [dropFirst, setDropFirst] = useState(false);
  const [dropSecond, setDropSecond] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  function compareApps() {
    if (
      Object.keys(firstApp).length != 0 &&
      Object.keys(secondApp).length != 0
    ) {
      console.log(firstApp, secondApp);
      setShowCompare(true);
    } else {
      alert("No se han seleccionado Apps");
    }
  }

  return (
    <React.Fragment>
    <CompareSection>
      <ContainerSelectApp>
        <AddComment open={dropFirst}>
          <h4 onClick={() => setDropFirst(!dropFirst)}>FirstApp</h4>
          <ul>
            {jsonApp.map((app) => {
              return (
                <li onClick={() => setFirstApp(app)} value={app.app_name}>
                  {app.app_name}
                </li>
              );
            })}
          </ul>
        </AddComment>
        <AddComment open={dropSecond}>
          <h4 onClick={() => setDropSecond(!dropSecond)}>SecondApp</h4>
          <ul>
            {jsonApp.map((app) => {
              return (
                <li onClick={() => setSecondApp(app)} value={app.app_name}>
                  {app.app_name}
                </li>
              );
            })}
          </ul>
        </AddComment>
      </ContainerSelectApp>
      <CompareDiv>
        <SelectApp>
          <IconApp src={firstApp.app_icon}></IconApp>
          <h4>{firstApp.app_name}</h4>
        </SelectApp>

        <div>
          <h3>VS</h3>
        </div>

        <ComingApp>
          <IconApp src={secondApp.app_icon}></IconApp>
          <h4>{secondApp.app_name}</h4>
        </ComingApp>
      </CompareDiv>

      <CompareButton>
        <button onClick={() => compareApps()}>Compare Apps</button>
      </CompareButton>
      <hr></hr>
      <CompareResult>
        <SelectResult>
          {showCompare ? (
            <ul>
              <li> Category: {firstApp.app_category}</li>

              <li> Rating: {firstApp.rating}</li>
              <li> Platforms: {firstApp.platforms}</li>
              <li> Num.Downloads: {firstApp.num_downloads}</li>
            </ul>
          ) : null}
        </SelectResult>
        <ComingResult>
          {showCompare ? (
            <ul>
              <li> Category: {secondApp.app_category}</li>
              <li> Rating: {secondApp.rating}</li>
              <li> Platforms: {secondApp.platforms}</li>
              <li> Num.Downloads: {secondApp.num_downloads}</li>
            </ul>
          ) : null}
        </ComingResult>
      </CompareResult>
    </CompareSection>
    <Link to='/home'>Back</Link>
    </React.Fragment>
  );
};
export default CompareApp;
