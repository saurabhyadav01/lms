import React from "react";
import {Route,Routes} from "react-router-dom"
import Dashboard from "../component/Dashboard";
import SignIn from "../component/SignIn"
import SignUp from "../component/SignUp"


const AllRoutes=()=>
{
    return (
        <>
     
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
      
      
 
      </Routes> 
        </>
    )
}

export default AllRoutes