import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router} from 'react-router'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import {appylMiddleware,createStore} from 'redux'

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);


reportWebVitals();
