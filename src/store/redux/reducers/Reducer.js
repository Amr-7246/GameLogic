import { ActionTypes } from "../constants/action-types";
// * start custimization 
const myData = {
  myData: 'Hi from my data' ,
  Istoggle: false ,
  name:'',
  email: '',
  IsCreate: false ,
};

export const minData = (state = myData, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MYDATA:
      return { ...state , name: payload };
      default:
      return state;
  }
};
// *State Mangement For Create Account*
export const LogInData = (state = myData, { type, payload }) => {
  switch (type) {
    case ActionTypes.CREATE_AN_ACCOUNT:
      return { ...state , IsCreate : payload };
      default:
      return state;
  }
};
// * end custimization 
