import {combineReducers} from 'redux'
import HomeReducer from '../containers/HomeReducer'
import WaterfallReducer from '../containers/Waterfall/reducer'
const rootReducer = combineReducers({WaterfallReducer})
export { rootReducer }
