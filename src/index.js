import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, compose, applyMiddleware} from 'redux'
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux/es/exports'; 
import thunk from 'redux-thunk'
import { spamFilter } from './redux/middleware';

const store = createStore(rootReducer, applyMiddleware(thunk, spamFilter))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
