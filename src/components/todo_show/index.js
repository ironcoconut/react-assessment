import React from 'react';
import TodoShowContainer from './todo_show_container';

const TodoShow = ({ match: { params }, history }) => (
  <div>
    <TodoShowContainer id={params.id} history={history} />
  </div>
)

export default TodoShow;
