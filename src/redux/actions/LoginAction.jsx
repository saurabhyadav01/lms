
// action creators

import axios from "axios";
import { ActionTypes } from "../contants/Action-type";

export const login_loading=()=>({type:ActionTypes.LOGIN_LOADING})
export const login_error=()=>({type:ActionTypes.LOGIN_ERROR})
export const login_succes=(payload)=>({type:ActionTypes.LOGIN_SUCCESS,payload});

//Login

export const Login_Request=(data,navigate)=>(dispatch)=>{
     dispatch(login_loading())

    axios.post(`https://ecommrcebackend.herokuapp.com/login`,data).then((res)=>
         {
            //console.log(res.data);
            alert("Login Successfully");
            dispatch(login_succes(res.data))
            navigate("/Dashboard")
         }).catch((e)=>
         {
          alert("Invalid User")
           console.log("err"+e)
           dispatch(login_error())
         })
}