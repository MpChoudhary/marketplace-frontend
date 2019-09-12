import {
  CHANGE_SEARCH,
  REQUEST_CATEGORY_START,
  REQUEST_CATEGORY_SUCCESS,
  REQUEST_CATEGORY_FAIL
} from '../actions/constants';

const initialState = {
  searchField: ''
};

export const searchCategory = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const initialStateCategories = {
  isPending: true,
  categories: null,
  error: ''
};

export const requestCategories = (
  state = initialStateCategories,
  action = {}
) => {
  switch (action.type) {
    case REQUEST_CATEGORY_START:
      return { ...state, isPending: true };
    case REQUEST_CATEGORY_SUCCESS:
      return { ...state, categories: action.payload, isPending: false };
    case REQUEST_CATEGORY_FAIL:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
