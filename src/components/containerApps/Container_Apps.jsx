import React, {useContext, useState, useEffect } from "react";
import {
   ContainerApps,
   ContainerFilter,
   Banner,
   Cards,
} from "./ContainerApps_styled";
import data from "../../data/dataApps.json";
import AppCard from "../cardApp/CardApp";
import DetailedFilter from "../detailedFilter/DetailedFilter";
import AppContext from "../../context/AppContext";

const Container_Apps = () => {

   const {filtro} = useContext(AppContext)

   let DataApps = data.data.apps;

   console.log("filtro", filtro(DataApps));

   return (
      <ContainerApps>
         <ContainerFilter>
            <DetailedFilter
            ></DetailedFilter>
         </ContainerFilter>
         <Banner>
            <h2>Today algo</h2>
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
