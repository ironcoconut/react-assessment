import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({id, completed, title, remove, complete}) => {
  const spanStyle = {float: "right"};

  return (
    <li className={completed ? "completed-task" : ""}>
      {title}
      <span style={spanStyle}>
        <button disabled={completed} onClick={() => {
          complete(id);
        }}>
          Complete
        </button>
        <button onClick={() => {
          remove(id);
        }}>
          X
        </button>
      </span>
    </li>
  );
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  complete: PropTypes.func.isRequired
}

export default Todo;
