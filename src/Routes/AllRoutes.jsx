import React from "react";
import {Route,Routes} from "react-router-dom"
import Dashboard from "../component/Dashboard";
import SignIn from "../component/SignIn"
import SignUp from "../component/SignUp"
import Assignment from "../component/Assignments";
import Lecture from "../component/Lectures";
const AllRoutes=()=>
{
    return (
        <>
     
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/assignment" element={<Assignment />} />
        <Route path="/lecture" element={<Lecture />} />
         
      
 
      </Routes> 
        </>
    )
}

export default AllRoutes