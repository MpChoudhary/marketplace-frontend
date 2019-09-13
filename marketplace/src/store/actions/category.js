import {
  CHANGE_SEARCH,
  REQUEST_CATEGORY_START,
  REQUEST_CATEGORY_SUCCESS,
  REQUEST_CATEGORY_FAIL
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
      console.log(res.data);
      dispatch({ type: REQUEST_CATEGORY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: REQUEST_CATEGORY_FAIL, payload: err });
    });
};
