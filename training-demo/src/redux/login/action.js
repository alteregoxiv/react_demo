import { loginActionConstants } from "./actionTypes"; 

export const loginInitiate = () => ({
  type: loginActionConstants.LOGIN_INITIATE
})

export const loginSuccess = (data) => ({
  type: loginActionConstants.LOGIN_SUCCESS,
  payload: data
})

export const loginFailure = (error) => ({
  type: loginActionConstants.LOGIN_FAILURE,
  payload: error
})
