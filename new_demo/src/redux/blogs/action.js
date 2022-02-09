import { blogsActionConstants } from "./actionTypes";

export const blogsInitiate = () => ({
  type: blogsActionConstants.BLOGS_INITIATE
})

export const blogsSuccess = (data) => ({
  type: blogsActionConstants.BLOGS_SUCCESS,
  payload: data
})

export const blogsFailure = (error) => ({
  type: blogsActionConstants.BLOGS_FAILURE,
  payload: error
})
