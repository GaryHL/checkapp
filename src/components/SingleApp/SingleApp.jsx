import React, { useContext } from "react";
import data from "../../data/dataApps.json";
import {
  SectionSingle,
  AppSingle,
  AppIcon,
  Icon,
  AppInfo,
  Category,
  AppPlatforms,
  AppRating,
  ImageDiv,
  DisplayImage,
  DescriptionDiv,
} from "./SingleApp_Style";
import AppContext from "../../context/AppContext";
import ShowAddComment from "../ShowAddComment/ShowAddComment";


 const SingleApp = () => {
//   //Getting Data from Json
//   const getData = data.data.apps;
//   const changeData = getData.find((element) => {
//     return element.app_id === "com.discord";
//   });

    const {setSingleApp, SingleApp} = useContext(AppContext)

  

  return (
    <div>
      {/* {changeData.map((changeData)=>{ */}
      <SectionSingle>
        <AppSingle>
          <AppIcon>
            <Icon src={SingleApp.app_icon}></Icon>
          </AppIcon>
          <AppInfo>
            <h4>{SingleApp.app_name}</h4>
            <Category>
              <p>{SingleApp.app_category}</p>
            </Category>
            <AppPlatforms>
              <p>{SingleApp.platforms[0]}</p>
              <p>{SingleApp.platforms[1]}</p>
              <p>{SingleApp.platforms[2]}</p>
            </AppPlatforms>
            <AppRating>
              <p>✨✨✨✨✨</p>
              <p>{SingleApp.rating}</p>
            </AppRating>
          </AppInfo>
        </AppSingle>

        <DescriptionDiv>
          <p className="descripton">{SingleApp.app_description}</p>
        </DescriptionDiv>

        <ImageDiv>
          <DisplayImage src={SingleApp.photos[0]}></DisplayImage>
          <DisplayImage src={SingleApp.photos[1]}></DisplayImage>
          <DisplayImage src={SingleApp.photos[2]}></DisplayImage>
        </ImageDiv>
      </SectionSingle>
      {/* })} */}
      <ShowAddComment SingleApp={SingleApp}/>
    </div>
  );
};
export default SingleApp;
