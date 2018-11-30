import { combineReducers } from 'redux'
import initiatives from './initiatives'
import visibilityFilter from './visibilityFilter'
export default combineReducers({
  initiatives,
  visibilityFilter
})
