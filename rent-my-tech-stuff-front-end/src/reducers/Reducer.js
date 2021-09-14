import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import registerReducer from "./RegisterReducer";

const rootReducer = combineReducers(loginReducer,registerReducer)

export default rootReducer