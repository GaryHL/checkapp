import React from "react";
import { useState, useContext } from "react";
import { ContainerFilter, TabFilter } from "./FilterForStars_styled";
import Yeah from "../../assets/svg/Yeah";
import Meh from "../../assets/svg/Meh";
import Booh from "../../assets/svg/Booh";
import AppContext from "../../context/AppContext";

const FilterForStars = (props) => {
   const { tabActiveYeah,
       tabActiveMeh,
        tabActiveBooh,
        activeTab } =
      useContext(AppContext);

   return (
      <ContainerFilter>
         <TabFilter isActive={tabActiveYeah} onClick={() => props.inbody   ? null : activeTab("yeah") }>
            <Yeah/>
            <h2>YEAH!</h2>
         </TabFilter>
         <TabFilter isActive={tabActiveMeh} onClick={() => props.inbody ? null :activeTab("meh")}>
            <Meh/>
            <h2>MEH</h2>
         </TabFilter>
         <TabFilter isActive={tabActiveBooh} onClick={() => props.inbody ? null :activeTab("booh")}>
            <Booh/>
            <h2 >BOOH!</h2>
         </TabFilter>
      </ContainerFilter>
   );
};

export default FilterForStars;
