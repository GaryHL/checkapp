import React, { useState } from "react";
import { ContainerHome, HeaderHome, SearchBarHome } from "./Home_styled";

import NavBar from "../../components/navBar/NavBar";
import SearchBar from "../../components/searchBar/SearchBar";
import FilterForStars from "../../components/filterForStars/FilterForStars";

const Home = () => {
   const [navOrSearch, setNavOrSearch] = useState(false);
   return (
      <React.Fragment>
         <ContainerHome>
            <HeaderHome>
            {navOrSearch == true ? (
               <NavBar
                  navOrSearch={navOrSearch}
                  setNavOrSearch={setNavOrSearch}
               />
            ) : (
               <SearchBar
               inBody={false}
                  navOrSearch={navOrSearch}
                  setNavOrSearch={setNavOrSearch}
               />
            )}
               <h1>
                  The best and
                  <br /> worst Apps
                  <br /> today on the web
               </h1>
               <FilterForStars></FilterForStars>
            </HeaderHome>
            <SearchBarHome>
               <SearchBar inBody={true}></SearchBar>
            </SearchBarHome>
         </ContainerHome>
      </React.Fragment>
   );
};

export default Home;
