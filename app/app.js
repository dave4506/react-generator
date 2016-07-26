import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import {logger} from './middlewares'
import thunk from 'redux-thunk';

import reducer from './reducers'
import App from './containers/app'

//let store = createStore(reducer,applyMiddleware(thunk))
let store = createStore(reducer, applyMiddleware(thunk,logger))

render((
  <Provider store={store}>
    <App/>
  </Provider>
),document.getElementById('root'))
