import React, { useState } from "react";
import { ContainerHome, HeaderHome, SearchBarHome } from "./Home_styled";
import NavBar from "../../components/navBar/NavBar";
import SearchBar from "../../components/searchBar/SearchBar";
import FilterForStars from "../../components/filterForStars/FilterForStars";
import CategoryBox from "../../components/categoryBox/CategoryBox";
import { Link } from "react-router-dom";

const Home = () => {
   const [navOrSearch, setNavOrSearch] = useState(true);

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
               <span>
                  <h1>
                     The best and
                      worst Apps
                      today on the web
                  </h1>
               </span>
               <Link to="/filter">
                  <FilterForStars inbody></FilterForStars>
               </Link>
            </HeaderHome>
            <SearchBarHome>
               <SearchBar
                  inBody={false}
                  navOrSearch={navOrSearch}
                  setNavOrSearch={setNavOrSearch}
               ></SearchBar>
            </SearchBarHome>
            <CategoryBox></CategoryBox>
         </ContainerHome>
      </React.Fragment>
   );
};

export default Home;
