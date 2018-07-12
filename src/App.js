import React from 'react';
import './App.css';
import Title from './components/title';
import TodoFormContainer from './components/todo_form_container';
import TodoListContainer from './components/todo_list_container';

const App = () => (
  <div>
    <Title />
    <TodoFormContainer />
    <hr />
    <TodoListContainer />
  </div>
)

export default App;
