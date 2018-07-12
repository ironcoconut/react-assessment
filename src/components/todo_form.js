import React from 'react';
import PropTypes from 'prop-types';

// This should work when the user hits the enter key. Right
// now you have to actually click the button. :/
const TodoForm = ({inputError, addTodo}) => {
  let input;

  return (
    <div id="todo-form">
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
        Add Todo
      </button>
      { inputError ?
        <p>Task cannot be blank.</p>
        : null
      }
    </div>
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  inputError: PropTypes.bool.isRequired
}

export default TodoForm;
