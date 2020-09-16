import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as todoStatus from '../../constants';
import { changeTodoStatus } from '../../actions';
import './style.css'

const TodoList = () => {
  const todoList = useSelector((state) => state.todos);
  const todoFilter = useSelector((state) => state.todoFilter);
  const dispatch = useDispatch();

  const toggleTodoStatus = (todoId) => {
    dispatch(changeTodoStatus(todoId));
  };

  const renderAllTodo = () => {
    return todoList.map((element) => (
      <li key={element.id} onClick={() => toggleTodoStatus(element.id)} className={element.finished ? "finishedTodo" : ""}>
        {element.todo}
      </li>
    ));
  };

  const renderTodoInProgress = () => {
    const filteredList = todoList.filter((element) => !element.finished);
    return filteredList.map((element) => (
      <li key={element.id} onClick={() => toggleTodoStatus(element.id)}>
        {element.todo}
      </li>
    ));
  };

  const renderTodoFinished = () => {
    const filteredList = todoList.filter((element) => element.finished);
    return filteredList.map((element) => (
      <li key={element.id} onClick={() => toggleTodoStatus(element.id)} className="finishedTodo">
        {element.todo}
      </li>
    ));
  };

  return (
    <ul className="todoListWrapper">
      {todoFilter === todoStatus.STATUS_ALL && renderAllTodo()}
      {todoFilter === todoStatus.STATUS_IN_PROGRESS && renderTodoInProgress()}
      {todoFilter === todoStatus.STATUS_FINISHED && renderTodoFinished()}
    </ul>
  );
};

export default TodoList;
