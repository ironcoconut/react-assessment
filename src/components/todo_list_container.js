import { connect } from 'react-redux'
import {
  removeTodo,
  completeTodo
} from '../actions'
import TodoList from './todo_list';

const mapStateToProps = state => {
  return { todos: state.todos };
}

const mapDispatchToProps = dispatch => {
  return {
    remove: id => {
      dispatch(removeTodo(id))
    },
    complete: id => {
      dispatch(completeTodo(id))
    }
  }
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoListContainer;
