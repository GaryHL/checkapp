import React, {useContext,useState, useEffect } from "react";
import { ContainerSearchBar, ContainerResults } from "./SearchBar_styled";
import { AiOutlineSearch } from "react-icons/ai";
import AppContext from "../../context/AppContext";
import AppCard from "../AppCard/AppCard";
import { Cards } from "../containerApps/ContainerApps_styled";

const SearchBar = ({ navOrSearch, setNavOrSearch,inBody } ) => {

   const {jsonApp} = useContext(AppContext)

   const [objectSearched, setObjectSearched] = useState([]);

   const [inputSearch, setInputSearch] = useState("")

   useEffect(() => {

         let result = jsonApp;
         let coincidencias = [];
         result.map(app =>{
            if(inputSearch.length > 0){

               if(app.app_name.toLowerCase().includes(inputSearch.toLowerCase())){
                  coincidencias.push(app)
               }
            }
         })
   
         // console.log("antes del buscador",result)
         // console.log("objeto buscado", objectSearched)
   
         setObjectSearched(coincidencias)
     
   }, [inputSearch])
   

   
   return (
      <ContainerSearchBar
         layout
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}

      >
         {inBody ? (
            <>
            <form action="">
                <input type="text" placeholder="Search..."  /> 
               <button>
                  <AiOutlineSearch />
               </button>
            </form>
            </>
            
         ) : (
            <React.Fragment>
               <form action="">
                  <input type="text" placeholder="Search..." onChange={(e)=> setInputSearch(e.target.value)}/>
                  <button>
                     <AiOutlineSearch />
                  </button>
               </form>
               <ContainerResults onClick={() => setNavOrSearch(!navOrSearch)} >
                  {objectSearched.map(app =>{
                     return (
                        <Cards inFilter>
                           <AppCard dataApp={app} key={app.app_id} />
                        </Cards>
                     )
                  })}
               </ContainerResults>
            </React.Fragment>
         )}
      </ContainerSearchBar>
   );
};

export default SearchBar;
