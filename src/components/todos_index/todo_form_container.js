import { connect } from 'react-redux'
import {
  addTodo
} from '../../actions'
import TodoForm from './todo_form';

const mapStateToProps = state => {
  return { inputError: state.inputError };
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: title => {
      dispatch(addTodo(title))
    }
  }
}

const TodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm)

export default TodoFormContainer;
