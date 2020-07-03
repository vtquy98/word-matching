import { combineReducers } from "redux";
import { userState } from "./userState";
//import userState from "./userState";

const rootReducer = combineReducers({
  userState,
});

export default rootReducer;
