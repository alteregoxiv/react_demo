import { loginActionConstants } from "./actionTypes";

const initialState = {
  response: "",
  loader: false,
  error: ""
}

const loginReducer = (state=initialState , action) => {
  const {type , payload} = action;
  switch(type){
    case loginActionConstants.LOGIN_INITIATE: {
      return {
        ...state,
        response: "",
        loader: true,
        error: ""
      }
    }

    case loginActionConstants.LOGIN_SUCCESS: {
      return {
        ...state,
        response: payload,
        loader: false
      }
    }

    case loginActionConstants.LOGIN_FAILURE: {
      return {
        ...state,
        response: "",
        loader: false,
        error: payload
      }
    }

    default: {return state}
  }
}

export default loginReducer
