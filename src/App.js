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

// This should work when the user hits the enter key. Right
// now you have to actually click the button. :/
const TodoForm = ({addTodo, inputError}) => {
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

const Todo = ({todo, remove, complete}) => {
  const spanStyle = {float: "right"};

  return (
    <li className={todo.completed ? "completed-task" : ""}>
      {todo.title}
      <span style={spanStyle}>
        <button disabled={todo.completed} onClick={() => {
          complete(todo.id);
        }}>
          Complete
        </button>
        <button onClick={() => {
          remove(todo.id);
        }}>
          X
        </button>
      </span>
    </li>
  );
}

const TodoList = ({todos, remove, complete}) => {
  const listStyle = {maxWidth: "50%"};
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} remove={remove} complete={complete}/>)
  });
  return (<ul style={listStyle}>{todoNode}</ul>);
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
    const currentId = this.state.nextId;
    const nextId = currentId + 1;
    const newTodo = {title: val, id: currentId, completed: false}
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

  completeTodo = (id) => {
    const updatedTodos = this.state.todos.map(todo => {
      if(todo.id == id) {
        todo.completed = true;
      }

      return todo;
    });

    this.setState({
      nextId: this.state.nextId,
      todos: updatedTodos
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
        <hr />
        <TodoList
          todos={this.state.todos}
          remove={this.removeTodo}
          complete={this.completeTodo}
        />
      </div>
    );
  }
}

export default App;
