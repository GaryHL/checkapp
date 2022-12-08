import React, { useState , useContext} from "react";
import AppContext from "../../context/AppContext";
import {
   DetailedFilterContainer,
   FilterMenu,
   ContainerRating,
   ContainerPlatforms,
   ContainerInputsCategories,
} from "./DetailedFilter_styled";
import data from '../../data/dataApps.json'

import { BsFilter } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";

const DetailedFilter = () => {

   const {setSettingsFilter} = useContext(AppContext)

   const [openFilter, setOpenFilter]= useState(false);
   
   function sendSettingsFilter(){
      const web = document.getElementById("web")
      const ios = document.getElementById("ios")
      const android = document.getElementById("android")
      const productivity = document.getElementById("Productivity")
      const lifeStyle = document.getElementById("Lifestyle")
      const social = document.getElementById("Social")
      const photography = document.getElementById("Photography")
      const tools = document.getElementById("Tools")
      const entertainment = document.getElementById("Entertainment")
      const videoEditor = document.getElementById("Video Players & Editors")
      let resultfilter = {
         "web": web.checked,
         "ios":ios.checked,
         "android": android.checked,
         "productivity": productivity.checked,
         "lifeStyle" : lifeStyle.checked,
         "social" : social.checked,
         "photography" : photography.checked,
         "tools" : tools.checked,
         "entertainment" : entertainment.checked,
         "videoEditor" : videoEditor.checked,
      }
      setSettingsFilter(resultfilter)
   }
   const dataApps = data.data.apps;

   const allCategories = [...new Set(dataApps.map((app)=>
      app.app_category
   ))]


   return (
      <React.Fragment>
         <DetailedFilterContainer>
            <span onClick={()=>setOpenFilter(!openFilter)}>
               <GiSettingsKnobs />
               filter
            </span>
            <span>
               display
               <BsFilter />
            </span>
            {openFilter == true ?
            <FilterMenu>
               <h2>platform</h2>
               <ContainerPlatforms>
                  <label>
                     web
                     <input type="checkbox" name="web" id="web"  />
                  </label>
                  <label> 
                     iOS
                     <input type="checkbox" name="ios" id="ios"  />
                  </label>
                  <label>
                     Android
                     <input type="checkbox" name="android" id="android"  />
                  </label>
               </ContainerPlatforms>
               <h2>categories</h2>
               <ContainerInputsCategories>
                  {allCategories.map(category =>{
                     return <label >
                        {category}
                        <input type="checkbox" name={category} id={category}  />
                     </label>
                  })}
               </ContainerInputsCategories>
               <button onClick={()=>sendSettingsFilter()}>show me some stuff</button>
               <p></p>
            </FilterMenu>:null
            }
         </DetailedFilterContainer>
      </React.Fragment>
   );
};

export default DetailedFilter;
