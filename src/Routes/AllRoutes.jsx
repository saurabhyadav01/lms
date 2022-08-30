import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../component/signIn";
const AllRoutes=()=>
{
    return (
        <>
     
      <Routes>
      <Route path="/" element={<SignIn />}></Route>
      
      </Routes> 
        </>
    )
}

export default AllRoutes