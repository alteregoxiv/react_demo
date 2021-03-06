import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import loginReducer from "./login/loginReducer";

export default combineReducers({
  user: userReducer,
  login: loginReducer
})
