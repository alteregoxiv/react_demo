import { blogsActionConstants } from "./actionTypes";

const initialState = {
  data: "",
  loader: false,
  error: ""
}

const blogsReducer = (state=initialState , action) => {
  const {type , payload} = action;
  switch(type){
    case blogsActionConstants.BLOGS_INITIATE: {
      return {
        ...state,
        data: "",
        loader: true,
        error: ""
      }
    }

    case blogsActionConstants.BLOGS_SUCCESS: {
      return {
        ...state,
        data: payload,
        loader: false
      }
    }

    case blogsActionConstants.BLOGS_FAILURE: {
      return {
        ...state,
        data: "",
        loader: false,
        error: payload
      }
    }

    default: {return state}
  }
}

export default blogsReducer
