import { combineReducers } from 'redux'

import homeReducer from '../pages/home/reducer.js'
import demosReducer from '../pages/demos/reducer.js'
import detailReducer from '../pages/detail/reducer.js'
import resumeReducer from '../pages/resume/reducer.js'
import adminReducer from '../pages/admin/reducer.js'

// console.log(homeReducer)

export default combineReducers({
  home: homeReducer,
  detail: detailReducer,
  demos: demosReducer,
  resume: resumeReducer,
  admin: adminReducer
})
