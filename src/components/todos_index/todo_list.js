import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

const TodoList = ({todos, remove, complete}) => {
  if(0 < todos.length) {
    const todoNode = todos.map((todo) => {
      return (<Todo {...todo} key={todo.id} remove={remove} complete={complete}/>)
    });
    return (<List children={todoNode} />);
  } else {
    return (<Typography children="Add some todos above to get started." align="center" />);
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired
}

export default TodoList;
