import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import App from './app';


const Root = (props) => (
  <Provider>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;
