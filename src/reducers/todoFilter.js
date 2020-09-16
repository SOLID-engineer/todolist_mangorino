import * as actionTypes from '../actions/actionTypes'

const initialState = 0

const todoFilter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FILTER_TODO: {
      return action.filter
    }
    default:
      return state;
  }
}

export default todoFilter