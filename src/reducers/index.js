import todos from './todos'
import todoFilter from './todoFilter'
import { combineReducers } from 'redux'

export default combineReducers({
  todos,
  todoFilter
})