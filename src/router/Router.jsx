import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../views/home/Home';
import Filter from "../views/filter/Filter";
import SingleApp from "../components/SingleApp/SingleApp";
import AppUploadForm from "../views/appUploadForm/AppUploadForm";

function Router() {

      const [settignsFilter, setSettingsFilter] = useState({
         "web":``,
         "ios":``,
         "android": ``,
         "productivity": ``,
         "lifeStyle" : ``,
         "social" : ``,
         "photography" : ``,
         "tools" : ``,
         "entertainment" : ``,
         "videoEditor" : ``,
      })

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/loadForm" element={<AppUploadForm/>} />
            <Route path="/singleapp" element={<SingleApp />}/> 
            
  {/* <Route path="/filter" element={<Filter setSettingsFilter={setSettingsFilter} settignsFilter={settignsFilter}/>} />*/}
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
