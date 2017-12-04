import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import thunkMiddlewar from 'redux-thunk'
import reducers from './reducers.js'
// import reducers from '../pages/home/reducer.js'

const loggerMiddleware = createLogger()

export default createStore(
  combineReducers({
    reducers,
    router: routerReducer
  }),
  applyMiddleware(
    thunkMiddlewar,
    loggerMiddleware
  )
)
