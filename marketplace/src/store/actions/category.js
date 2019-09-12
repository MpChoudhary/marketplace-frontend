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
  // const url = 'http://localhost:8080/CategoryHandler';
  const data = {
    request: 'get_all'
  };
  // const options = {
  //   Authoriztion:
  //     'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtdWtlc2giLCJpYXQiOjE1Njc5NjcyMzQsImV4cCI6MTU2Nzk3MDgzNH0.yp5y1o_0iZEZ4pKRlxBHxSi3O6Z6FdXpwmWF_8c8lSnCwNn1RuKrV-9nvVl01dicZAECvO-er37FPfXiA5BX_Q'
  //   //  + localStorage.getItem('token')
  // };
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
