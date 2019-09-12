import * as actionTypes from '../actions/constants';

const initial = {
  products: []
};

const compare = (state, action) => {
  return {
    ...state,
    products: action.products
  };
};

const compareReducer = (state = initial, action) => {
  switch (action.type) {
    case actionTypes.COMPARE_PRODUCT:
      return compare(state, action);
    default:
      return state;
  }
};

export default compareReducer;
