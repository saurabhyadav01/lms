
import { ActionTypes } from "../contants/Action-type"
import { register_loading } from "../actions/RagisterAction"

const initialState={
    loading:false,
    error:false,
    data:{}
}
export const registerReducer=(state=initialState,{type,payload})=>{
     switch(type){
         case ActionTypes.REGISTER_LOADING : return {...state, loading:true}
         case ActionTypes.REGISTER_ERROR: return {...state , loading:false, error:true}
         case ActionTypes.REGISTER_SUCCESS :return {...state, loading:false,error:false}
         default : return state
         
     }
}