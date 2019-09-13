import { CHANGE_REDIRECT, RESET_REDIRECT } from '../actions/constants';

const intialState = {
  redirect: false
};

const redirectReducer = (state = intialState, action = {}) => {
  switch (action.type) {
    case CHANGE_REDIRECT:
      return { ...state, redirect: true };
    case RESET_REDIRECT:
      return { ...state, redirect: false };
    default:
      return state;
  }
};

export default redirectReducer;
