import { combineReducers } from "redux";
import blogsReducer from "./blogs/blogsReducer";
import loginReducer from "./login/loginReducer";

export default combineReducers({
  login: loginReducer,
  blogs: blogsReducer
})
