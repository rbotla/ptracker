import React from 'react';
import ReactDOM from 'react-dom';
import { createLogger } from 'redux-logger'

import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk'

const loggerMiddleware = createLogger()

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware, // lets us dispatch() functions
		loggerMiddleware // neat middleware that logs actions
	)
)

ReactDOM.render(
  <Provider store={store}>
	  <BrowserRouter>
	      <App />
	  </BrowserRouter>  
  </Provider>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
