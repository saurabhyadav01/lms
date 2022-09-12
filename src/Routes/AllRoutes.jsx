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
        <Route path="/" element={<Dashboard/>} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      
      
 
      </Routes> 
        </>
    )
}

export default AllRoutes