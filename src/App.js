import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import TodoIndex from './components/todos_index';
import TodoShow from './components/todo_show';

const App = () => (
  <Router>
    <div>
      <Route path="/todo/:id" component={TodoShow} />
      <Route path="/" component={TodoIndex} exact />
    </div>
  </Router>
)

export default App;
