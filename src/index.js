import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import Context from './Context/actions';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById('app'),
);
