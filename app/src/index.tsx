import React = require('react')
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { createStore } from 'redux'
import reduxMonitorReducer from './reducers'

const store = createStore(reduxMonitorReducer)

render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('app'))
