import * as actionTypes from './constants';

export const set = product => {
  return {
    type: actionTypes.SET_CURRENT_PRODUCT,
    product: product
  };
};

export const fail = error => {
  return {
    type: actionTypes.PRODUCT_ERROR,
    error: error
  };
};
