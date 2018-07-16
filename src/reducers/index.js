// TODO: Add handlers for API errors
import {
  ADD_TODO_SUCCEEDED,
  COMPLETE_TODO_SUCCEEDED,
  REMOVE_TODO_SUCCEEDED,
  UPDATE_TODO_SUCCEEDED,
  INPUT_ERROR
} from '../actions'

const initialState = {
  todos: [],
  inputError: false
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCEEDED:
        return {
          todos: action.todos,
          inputError: false
        }
    case COMPLETE_TODO_SUCCEEDED:
        return {
          todos: action.todos,
          inputError: false
        }
    case REMOVE_TODO_SUCCEEDED:
        return {
          todos: action.todos,
          inputError: false
        }
    case UPDATE_TODO_SUCCEEDED:
        return {
          todos: action.todos,
          inputError: false
        }
    case INPUT_ERROR:
        return {
          ...state,
          inputError: true
        }
    default:
      return state
  }
}

export default todos
