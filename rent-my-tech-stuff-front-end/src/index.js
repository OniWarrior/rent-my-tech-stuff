import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router} from 'react-router-dom'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import {applyMiddleware,createStore} from 'redux'
import { Provider } from 'react-redux';

import rootReducer from './reducers/Reducer'

const store = createStore(rootReducer,applyMiddleware(logger,thunk))

ReactDOM.render(
  <Router>
   <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
   </Provider>
  </Router>
  ,
  document.getElementById('root')
);


reportWebVitals();
