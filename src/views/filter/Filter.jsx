import React, { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import SearchBar from "../../components/searchBar/SearchBar";
import { ContainerFilter } from "./Filter_styled";
import FilterForStars from "../../components/filterForStars/FilterForStars";
import ContainerApps from '../../components/containerApps/Container_Apps'

const Filter = ({setSettingsFilter, settignsFilter}) => {
   const [navOrSearch, setNavOrSearch] = useState(true);

   return (
      <React.Fragment>
         {navOrSearch == true ? (
            <NavBar navOrSearch={navOrSearch} setNavOrSearch={setNavOrSearch} />
         ) : (
            <SearchBar
               inBody={false}
               navOrSearch={navOrSearch}
               setNavOrSearch={setNavOrSearch}
            />
         )}
         <ContainerFilter>
            <FilterForStars ></FilterForStars>
            <ContainerApps setSettingsFilter={setSettingsFilter} settignsFilter={settignsFilter}></ContainerApps>
         </ContainerFilter>
         
      </React.Fragment>
   );
};

export default Filter;
