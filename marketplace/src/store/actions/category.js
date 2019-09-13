import {
  CHANGE_SEARCH,
  REQUEST_CATEGORY_START,
  REQUEST_CATEGORY_SUCCESS,
  REQUEST_CATEGORY_FAIL,
  CHANGE_REDIRECT,
  RESET_REDIRECT
} from './constants';

import axios from 'axios';

export const setSearchField = text => {
  return {
    type: CHANGE_SEARCH,
    payload: text
  };
};

export const requestCategories = () => dispatch => {
  const data = {
    request: 'get_all'
  };
  dispatch({ type: REQUEST_CATEGORY_START });
  axios
    .post('/CategoryHandler', data)
    .then(res => {
      dispatch({ type: REQUEST_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REQUEST_CATEGORY_FAIL, payload: err });
    });
};

export const redirectChange = () => {
  return {
    type: CHANGE_REDIRECT
  };
};

export const resetRedirect = () => {
  return {
    type: RESET_REDIRECT
  };
};
