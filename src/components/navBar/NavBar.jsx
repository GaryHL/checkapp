import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineMore } from "react-icons/ai";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

import {
   ContainerNavBar,
   ContainerSettings,
   ContainerLogo,
   ContainerMenu,
   Menu,
   LinkMenu,
} from "./NavBar_styled";

const NavBar = ({ navOrSearch, setNavOrSearch }) => {
   const [menu, setMenu] = useState(false);

   return (
      <React.Fragment>
         <ContainerNavBar
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
         >
            <ContainerLogo to="/home">
               <BsCheck2 />
               <h2>checkapp</h2>
            </ContainerLogo>
            <ContainerSettings>
               <AiOutlineSearch onClick={() => setNavOrSearch(!navOrSearch)} />
               <AiOutlineMore onClick={() => setMenu(!menu)} />
            </ContainerSettings>
         </ContainerNavBar>
         <ContainerMenu isOpen={menu}>
            <Menu isOpen={menu}>
               <GrClose onClick={() => setMenu(!menu)} />
               <ul>
                  <li>
                     <LinkMenu to="/home">Home</LinkMenu>
                  </li>
                  <li>
                     <LinkMenu to="/filter">Apps</LinkMenu>
                  </li>
                  <li>
                     <LinkMenu to="/uploadform">Add new app</LinkMenu>
                  </li>
                  <li>
                     <LinkMenu to ="/editform">Edit / Remove</LinkMenu>
                  </li>
                  <li>
                     <LinkMenu to ="/compareapp">Compare Apps</LinkMenu>
                  </li>
               </ul>
            </Menu>
         </ContainerMenu>
      </React.Fragment>
   );
};

export default NavBar;
