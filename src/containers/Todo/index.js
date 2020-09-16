import React, { useState, useEffect } from 'react';
import TodoInput from '../../components/TodoInput';
import TodoList from '../../components/TodoList';
import TodoFilter from '../../components/TodoFilter';
import './style.css';
import { useSelector } from 'react-redux';

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const [countTodosLeft, setCountTodosLeft] = useState(0);

  useEffect(() => {
    setCountTodosLeft(todos.filter((element) => !element.finished).length);
  }, [todos]);

  return (
    <>
      <div className="todoHeader">Jobs need to be done :)</div>
      <TodoInput />
      <TodoList />
      <TodoFilter />
      <div className="todoNotification">
        <span>You have {countTodosLeft} more jobs to be finished!</span>
      </div>
    </>
  );
};

export default Todo;
