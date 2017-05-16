import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import * as APIUtil from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  const root = document.getElementById("root");
  window.APIUtil = APIUtil;
  store = configureStore();
  window.store = store;


  ReactDOM.render(<Root store={store}/>, root);
});
