import React from 'react';
import Title from './title';
import TodoFormContainer from './todo_form_container';
import TodoListContainer from './todo_list_container';

const TodosIndex = () => (
  <div>
    <Title />
    <TodoFormContainer />
    <hr />
    <TodoListContainer />
  </div>
)

export default TodosIndex;
