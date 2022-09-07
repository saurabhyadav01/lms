import { login_loading } from "../actions/LoginAction"
import { ActionTypes } from "../contants/Action-type"
const initialState={
    loading:false,
    error:false,
    data:{}
}
export const loginReducer=(state=initialState,{type,payload})=>{
     switch(type){
         case ActionTypes.LOGIN_LOADING : return {...state, loading:false}
         case ActionTypes.LOGIN_ERROR: return {...state , loading:false, error:true}
         case ActionTypes.LOGIN_SUCCESS :return {...state, loading:true,error:false,data:payload}
         default : return state
         
     }
}