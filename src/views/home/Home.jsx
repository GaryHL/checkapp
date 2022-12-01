import React from "react";
import { useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import SearchBar from "../../components/searchBar/SearchBar";
import CommentBox from "../../components/comment/CommentBox";

const Home = () => {
   const [navOrSearch, setNavOrSearch] = useState(false);
   return (
      
      <React.Fragment>

         <CommentBox/>
      </React.Fragment>
      
   );
};

export default Home;
