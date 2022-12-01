import React from "react";
import { ContainerSearchBar, ContainerResults } from "./SearchBar_styled";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({navOrSearch , setNavOrSearch}) => {
   return (
    
      <ContainerSearchBar
         layout
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
      >
         <form action="">
            <input type="text" placeholder="Search..." />
            <button><AiOutlineSearch/></button>
         </form>
         <ContainerResults onClick={()=>setNavOrSearch(!navOrSearch)}/>
      </ContainerSearchBar>
   );
};

export default SearchBar;
