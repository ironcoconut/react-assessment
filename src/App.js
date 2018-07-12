import React, { Component } from 'react';
import './App.css';

const Title = () => {
  return (
    <div>
       <div>
          <h1>Welcome to Simple To-Do!</h1>
       </div>
    </div>
  );
}

// Unhappy with error handling. The basic idea is correct, but it
// needs some CSS love so the tasks don't jump around when the
// error appears.
// Also, this should work when the user hits the enter key. Right
// now you have to actually click the button. :/
const TodoForm = ({addTodo, inputError}) => {
  let input;

  return (
    <div>
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
        <p>"Task cannot be blank."</p>
        : null
      }
    </div>
  );
};

const Todo = ({todo, remove}) => {
  return (
    <li onClick={() => {
      remove(todo.id);
    }}>
      {todo.text}
    </li>
  );
}

const TodoList = ({todos, remove}) => {
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove}/>)
  });
  return (<ul>{todoNode}</ul>);
}

class App extends Component {
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      nextId: 1,
      todos: []
    }
  }
  addTodo = (val) => {
    // Assemble data
    const currentId = this.state.nextId;
    const nextId = currentId + 1;
    const newTodo = {text: val, id: currentId}
    let allTodos = this.state.todos;

    if (!!val) {
      allTodos.push(newTodo);

      this.setState({
        nextId: nextId,
        todos: allTodos,
        inputError: false
      });
    } else {
      this.setState({
        nextId: currentId,
        todos: allTodos,
        inputError: true
      });
    }
  }
  // I'm not sure if autobinding looks better.
  removeTodo = (id) => {
    const nextId = this.state.nextId;
    // Filter all todos except the one to be removed
    const remainingTodos = this.state.todos.filter(todo => todo.id !== id)
    // Update state with filter
    this.setState({
      nextId: nextId,
      todos: remainingTodos
    });
  }

  render(){
    return (
      <div>
        <Title />
        <TodoForm
          addTodo={this.addTodo}
          inputError={this.state.inputError}
        />
        <TodoList
          todos={this.state.todos}
          remove={this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
