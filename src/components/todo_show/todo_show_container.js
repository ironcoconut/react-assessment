import { connect } from 'react-redux'
import {
  updateTodo,
  removeTodo,
  completeTodo
} from '../../actions'
import TodoShowForm from './todo_show_form';

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.id, 10);
  return { todo: state.todos.find(todo => id === todo.id), history: ownProps.history  };
}

const mapDispatchToProps = dispatch => {
  return {
    updateTodo: (id, title, description) => {
      dispatch(updateTodo(id, title, description))
    },
    removeTodo: (id) => {
      dispatch(removeTodo(id))
    },
    completeTodo: (id) => {
      dispatch(completeTodo(id))
    }
  }
}

const TodoShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoShowForm)

export default TodoShowContainer;
