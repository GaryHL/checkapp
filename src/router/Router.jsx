import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../views/home/Home';
import Filter from "../views/filter/Filter";

function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/filter" element={<Filter/>} />
         </Routes>
      </BrowserRouter>
   );
}

export default Router;
