import { CHANGE_REDIRECT } from '../actions/constants';

const intialState = {
  redirect: false
};

const redirectReducer = (state = intialState, action = {}) => {
  switch (action.type) {
    case CHANGE_REDIRECT:
      return { ...state, redirect: true };
    default:
      return state;
  }
};

export default redirectReducer;
