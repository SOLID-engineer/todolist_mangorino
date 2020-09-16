import * as actionTypes from '../actions/actionTypes'

const initialState = []

const todos = (state = [...initialState], action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO: {
      return [
        ...state,
        {
          id: action.id,
          todo: action.todo,
          finished: false
        }
      ]
    }
    case actionTypes.CHANGE_TODO_STATUS: {
      return state.map(todo =>
        todo.id === action.id ? { ...todo, finished: !todo.finished } : todo
      )
    }
    case actionTypes.REMOVE_TODO_FINISHED: {
      break;
    }
    default:
      return state;
  }
}

export default todos