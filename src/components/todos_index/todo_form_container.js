import { connect } from 'react-redux'
import {
  addTodo
} from '../../actions'
import TodoForm from './todo_form';

// TODO: Is this necessary?
const mapStateToProps = state => {}

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
