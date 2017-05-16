import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as APIUtil from './util/session_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  const root = document.getElementById("root");
  window.APIUtil = APIUtil;


  ReactDOM.render(<Root />, root);
});
