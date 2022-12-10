import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../views/home/Home';
import Filter from "../views/filter/Filter";
import AppUploadForm from "../views/appUploadForm/AppUploadForm";
import AppEditForm from '../views/appEditForm/AppEditForm'
import SingleAppView from "../views/SingleAppView/SingleAppView";
import CompareApp from "../components/CompareApp/CompareApp"

function Router() {

   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/uploadform" element={<AppUploadForm/>} />
            <Route path="/singleapp" element={<SingleAppView />}/> 
            <Route path="/editform" element={<AppEditForm/>}/> 
            <Route path="/compareapp" element={<CompareApp/>}/>
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
