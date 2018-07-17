import { connect } from 'react-redux'
import {
  addTodo
} from '../../actions'
import TodoForm from './todo_form';

const mapDispatchToProps = dispatch => {
  return {
    addTodo: title => {
      dispatch(addTodo(title))
    }
  }
}

const TodoFormContainer = connect(
  null,
  mapDispatchToProps
)(TodoForm)

export default TodoFormContainer;
