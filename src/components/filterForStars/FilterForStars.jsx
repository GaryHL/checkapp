import React from "react";
import { useState } from "react";
import { ContainerFilter, TabFilter } from "./FilterForStars_styled";
import Yeah from "../../assets/svg/YEAH.svg";
import Meh from "../../assets/svg/MEH.svg";
import Booh from "../../assets/svg/BOOH.svg";


const FilterForStars = () => {
   const [tabActiveYeah, setTabActiveYeah] = useState(false);
   const [tabActiveMeh, setTabActiveMeh] = useState(false);
   const [tabActiveBooh, setTabActiveBooh] = useState(false);

   function activeTab(option) {
      if (option == "yeah") {
         setTabActiveYeah(true);
         setTabActiveMeh(false);
         setTabActiveBooh(false);
      }
      if (option == "meh") {
         setTabActiveYeah(false);
         setTabActiveMeh(true);
         setTabActiveBooh(false);
      }
      if (option == "booh") {
         setTabActiveYeah(false);
         setTabActiveMeh(false);
         setTabActiveBooh(true);
      }
   }

   return (
      <ContainerFilter>
         <TabFilter isActive={tabActiveYeah} onClick={() => activeTab("yeah")}>
            <img src={Yeah} alt="OptionYeah" />
            <h2>YEAH!</h2>
         </TabFilter>
         <TabFilter isActive={tabActiveMeh} onClick={() => activeTab("meh")}>
            <img src={Meh} alt="OptionYeah" />
            <h2>MEH</h2>
         </TabFilter>
         <TabFilter isActive={tabActiveBooh} onClick={() => activeTab("booh")}>
            <img src={Booh} alt="OptionYeah" />
            <h2 color="white">BOOH!</h2>
         </TabFilter>
      </ContainerFilter>
   );
};

export default FilterForStars;