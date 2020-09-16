import * as actionTypes from './actionTypes'

let todoID = 0;

export const addTodo = (todo) => ({
  type: actionTypes.ADD_TODO,
  id: todoID++,
  todo,
})

export const filterTodo = (filter) => ({
  type: actionTypes.FILTER_TODO,
  filter
})

export const changeTodoStatus = (id) => ({
  type: actionTypes.CHANGE_TODO_STATUS,
  id
})