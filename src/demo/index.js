import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createHashHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import CreateSagaMiddleware from 'redux-saga'


import reducers from './reducers'
import sagas from './sagas'
import Home from './containers/Home.js'
import Waterfall from './containers/Waterfall/Waterfall.js'

const history = createHistory()
const RouterMiddleware = routerMiddleware(history)
const SagaMiddleware = CreateSagaMiddleware(sagas)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(RouterMiddleware, SagaMiddleware)
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div id="demoPage">
        <Route exact path="/" component={Home}/>
        <Route path='/waterfall' component={Waterfall}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
