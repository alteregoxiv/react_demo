import { userActionConstants } from "./actionTypes";

const initialState = {
  userData: [],
  loader: false,
  error: ""
}

const userReducer = (state=initialState , action) => {
  const {type , payload} = action;
  switch(type){
    case userActionConstants.USERS_DATA_INITIATE: {
      return {
        ...state,
        userData: [],
        loader: true,
        error: ""
      }
    }

    case userActionConstants.USERS_DATA_SUCCESS: {
      console.log("++++++++++++++++++++++++++++++++")
      console.log(payload)
      console.log(state)
      console.log("--------------------------------")
      return {
        ...state,
        userData: payload,
        loader: false
      }
    }

    case userActionConstants.USERS_DATA_FAILURE: {
      return {
        ...state,
        loader: false,
        error: payload
      }
    }

    default: {return state}
  }
}

export default userReducer
