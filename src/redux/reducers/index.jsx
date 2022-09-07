import { combineReducers } from "redux";
import { loginReducer} from "./LoginReducer"
import {registerReducer} from "./RegisterReducer"

const reducers=combineReducers({

    loginData:loginReducer,
    registerData:registerReducer,
  
   
})

export default reducers