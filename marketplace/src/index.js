import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './containers/App';
import { searchCategory, requestCategories } from './store/reducers/category';
import authReducer from './store/reducers/auth';
import productReducer from './store/reducers/product';
import compareReducer from './store/reducers/compare';
import redirectReducer from './store/reducers/redirect';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = createLogger();

axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.headers.common['Authorization'] = null;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(
  request => {
    request.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);
const rootReducer = combineReducers({
  compare: compareReducer,
  product: productReducer,
  search: searchCategory,
  redirect: redirectReducer,
  categories: requestCategories,
  auth: authReducer
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();
