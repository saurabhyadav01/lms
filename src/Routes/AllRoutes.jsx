import React from "react";
import {Route,Routes} from "react-router-dom"
import SignIn from "../component/SignIn"
import SignUp from "../component/SignUp"


const AllRoutes=()=>
{
    return (
        <>
     
      <Routes>

        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      
      
 
      </Routes> 
        </>
    )
}

export default AllRoutes