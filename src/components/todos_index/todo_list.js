import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({todos, remove, complete}) => {
  const listStyle = {maxWidth: "50%"};
  const todoNode = todos.map((todo) => {
    return (<Todo {...todo} key={todo.id} remove={remove} complete={complete}/>)
  });
  return (<ul style={listStyle}>{todoNode}</ul>);
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired
}

export default TodoList;
