import React, { useContext, useState } from "react";
import { ContainerHome, HeaderHome, SearchBarHome } from "./Home_styled";
import AppContext from "../../context/AppContext";

import NavBar from "../../components/navBar/NavBar";
import SearchBar from "../../components/searchBar/SearchBar";
import FilterForStars from "../../components/filterForStars/FilterForStars";
import CategoryBox from "../../components/categoryBox/CategoryBox";


const Home = () => {

   const {jsonApp} = useContext(AppContext)

   console.log("jsonApp ", jsonApp)
   const [navOrSearch, setNavOrSearch] = useState(AppContext);
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
            <CategoryBox></CategoryBox>
         </ContainerHome>
         <h1></h1>
      </React.Fragment>
      
   );
};

export default Home;
