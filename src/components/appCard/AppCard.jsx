import React from "react";
import {
  AppCardLink,
   GeneralDiv,
   IconImg,
   InfoApp,
   Platforms,
   Rating,
} from "./AppCard_styled";
import { AiFillStar } from "react-icons/ai";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import ImageDefault from '../../assets/images/cover-japonese-green.jpg'


const AppCard = ({ dataApp }) => {
  const {setSingleApp} = useContext(AppContext)
  const modifySingleApp = () =>{
    setSingleApp(dataApp)
  }
   return (
      <React.Fragment>
       <AppCardLink to = "/singleapp"> 
         <GeneralDiv onClick={modifySingleApp} 
         layout
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}>
            <IconImg>
               <img src={dataApp.app_icon ? dataApp.app_icon : ImageDefault} />
            </IconImg>
            <InfoApp>
               <h4>{dataApp.app_name}</h4>
               <p>{dataApp.app_category}</p>
               <Platforms>
                  <p>{dataApp.platforms[0]}</p>
                  <p>{dataApp.platforms[1]}</p>
                  <p>{dataApp.platforms[2]}</p>
               </Platforms>
               <Rating>
                  {dataApp.rating == 5 ? <p>{dataApp.rating}<AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> </p>: null}
                  {dataApp.rating == 4 ? <p>{dataApp.rating}<AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> </p>: null}
                  {dataApp.rating == 3 ? <p>{dataApp.rating}<AiFillStar /><AiFillStar /><AiFillStar /> </p>: null}
                  {dataApp.rating == 2 ? <p>{dataApp.rating}<AiFillStar /><AiFillStar /> </p>: null}
                  {dataApp.rating == 1 ? <p>{dataApp.rating}<AiFillStar /> </p>: null}
               </Rating>
            </InfoApp>
         </GeneralDiv>
         </AppCardLink>
      </React.Fragment>
   );
};
export default AppCard;









