import {
  ADD_TODO,
  COMPLETE_TODO,
  REMOVE_TODO
} from '../actions'

const initialState = {
  todos: [],
  nextId: 0,
  inputError: false
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      if(!action.title) {
        return {
          ...state,
          inputError: true
        }
      } else {
        return {
          todos: [
            ...state.todos,
            {
              id: state.nextId,
              title: action.title,
              completed: false
            }
          ],
          nextId: state.nextId + 1,
          inputError: false
        }
      }
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          (todo.id === action.id)
            ? {...todo, completed: true}
            : todo
        )
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      }
    default:
      return state
  }
}

export default todos
