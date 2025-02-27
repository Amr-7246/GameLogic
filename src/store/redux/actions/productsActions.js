import { ActionTypes } from "../constants/action-types";

export const Toggle = (T) => {
  return {
    type: ActionTypes.SET_MYDATA,
    payload: T,
  };
};

// *State Mangement For Create Account*
export const CreateAcount = (e) => {
  return {
    type: ActionTypes.CREATE_AN_ACCOUNT,
    payload: e,
  };
};

