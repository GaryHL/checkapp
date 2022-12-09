import React, {useContext } from "react";
import {
   ContainerApps,
   ContainerFilter,
   Banner,
   Cards,
} from "./ContainerApps_styled";
import data from "../../data/dataApps.json";
import AppCard from "../AppCard/AppCard";
import DetailedFilter from "../detailedFilter/DetailedFilter";
import AppContext from "../../context/AppContext";

const Container_Apps = () => {

   const {filtro, jsonApp,tabActiveBooh, tabActiveMeh, tabActiveYeah} = useContext(AppContext)

   function filterByStars(apps){

      let result = apps;
      // let newArray =[]
      if(tabActiveBooh == true){
         let bohApps = apps.filter( app => app.rating <= 2);
         console.log("esto es boh apps",bohApps)
         return bohApps
         // result.filter(app => app.rating === 2)
         // console.log("boh", result)
         // return result
      }
      else if(tabActiveMeh == true){
         let mehApps = apps.filter( app => app.rating === 3);
         return mehApps
         // return result
      }
      else if(tabActiveYeah == true){
          let yeahApps = apps.filter( app => app.rating >= 4);
         return yeahApps
      }
      else {
         return result
      }
     }

   let DataApps = filterByStars(jsonApp);
   console.log("resultado de data apps",DataApps)

   // console.log("filtro", filtro(DataApps));

   

   return (
      <ContainerApps>
         <ContainerFilter>
            <DetailedFilter
            ></DetailedFilter>
         </ContainerFilter>
         <Banner>
            <h2>Today in...</h2>
            {tabActiveBooh ? <p>Booh</p> : null}
            {tabActiveMeh ? <p>Meh</p> : null}
            {tabActiveYeah ? <p>Yeah!!</p> : null}
         </Banner>
         <Cards>
            
            {filtro(DataApps).map((i) => {
               return <AppCard dataApp={i} key={i.app_id} />;
            })}
         </Cards>
      </ContainerApps>
   );
};

export default Container_Apps;
