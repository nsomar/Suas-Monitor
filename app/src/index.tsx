import React = require('react')
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import SuasMonitorReducer from './reducers'
import logger from 'redux-logger'

const store = createStore(SuasMonitorReducer, applyMiddleware(logger))

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'))
