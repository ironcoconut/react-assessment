// TODO: Add handlers for API errors
import {
  ADD_TODO_SUCCEEDED,
  COMPLETE_TODO_SUCCEEDED,
  REMOVE_TODO_SUCCEEDED,
  UPDATE_TODO_SUCCEEDED,
} from '../actions'

const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_SUCCEEDED:
        return {
          todos: action.todos
        }
    case COMPLETE_TODO_SUCCEEDED:
        return {
          todos: action.todos
        }
    case REMOVE_TODO_SUCCEEDED:
        return {
          todos: action.todos
        }
    case UPDATE_TODO_SUCCEEDED:
        return {
          todos: action.todos
        }
    default:
      return state
  }
}

export default todos
