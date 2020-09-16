import React from 'react';
import * as todoStatus from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodo } from '../../actions';
import './style.css';

const TodoFilter = () => {
  const filterStatus = useSelector((state) => state.todoFilter);
  const dispatch = useDispatch();

  const handleFilterTodo = (type) => {
    switch (type) {
      case todoStatus.STATUS_ALL: {
        dispatch(filterTodo(todoStatus.STATUS_ALL));
        break;
      }
      case todoStatus.STATUS_IN_PROGRESS: {
        dispatch(filterTodo(todoStatus.STATUS_IN_PROGRESS));
        break;
      }
      case todoStatus.STATUS_FINISHED: {
        dispatch(filterTodo(todoStatus.STATUS_FINISHED));
        break;
      }
      default: break;
    }
  };

  return (
    <div className="todoFilterWrapper">
      <button
        className={
          filterStatus === todoStatus.STATUS_ALL ? 'todoFilterBtn active' : 'todoFilterBtn'
        }
        onClick={() => handleFilterTodo(todoStatus.STATUS_ALL)}
      >
        All the todos
      </button>
      <button
        className={
          filterStatus === todoStatus.STATUS_IN_PROGRESS ? 'todoFilterBtn active' : 'todoFilterBtn'
        }
        onClick={() => handleFilterTodo(todoStatus.STATUS_IN_PROGRESS)}
      >
        In-Progress todos
      </button>
      <button
        className={
          filterStatus === todoStatus.STATUS_FINISHED ? 'todoFilterBtn active' : 'todoFilterBtn'
        }
        onClick={() => handleFilterTodo(todoStatus.STATUS_FINISHED)}
      >
        Finished todos
      </button>
    </div>
  );
};

export default TodoFilter;
