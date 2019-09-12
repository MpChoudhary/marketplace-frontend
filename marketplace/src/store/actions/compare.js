import * as actionTypes from './constants';

export const compare = products => {
  return {
    type: actionTypes.COMPARE_PRODUCT,
    products: products
  };
};
