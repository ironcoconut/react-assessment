export const FETCH_TODOS_REQUESTED = 'FETCH_TODOS_REQUESTED'
export const FETCH_TODOS_SUCCEEDED = 'FETCH_TODOS_SUCCEEDED'
export const FETCH_TODOS_FAILED =    'FETCH_TODOS_FAILED'

export const ADD_TODO_REQUESTED = 'ADD_TODO_REQUESTED'
export const ADD_TODO_SUCCEEDED = 'ADD_TODO_SUCCEEDED'
export const ADD_TODO_FAILED = 'ADD_TODO_FAILED'

export const REMOVE_TODO_REQUESTED = 'REMOVE_TODO_REQUESTED'
export const REMOVE_TODO_SUCCEEDED = 'REMOVE_TODO_SUCCEEDED'
export const REMOVE_TODO_FAILED = 'REMOVE_TODO_FAILED'

export const COMPLETE_TODO_REQUESTED = 'COMPLETE_TODO_REQUESTED'
export const COMPLETE_TODO_SUCCEEDED = 'COMPLETE_TODO_SUCCEEDED'
export const COMPLETE_TODO_FAILED = 'COMPLETE_TODO_FAILED'

export const UPDATE_TODO_REQUESTED = 'UPDATE_TODO_REQUESTED'
export const UPDATE_TODO_SUCCEEDED = 'UPDATE_TODO_SUCCEEDED'
export const UPDATE_TODO_FAILED = 'UPDATE_TODO_FAILED'

export const addTodo = title => ({
  type: ADD_TODO_REQUESTED,
  title
})

export const completeTodo = id => ({
  type: COMPLETE_TODO_REQUESTED,
  id
})

export const removeTodo = id => ({
  type: REMOVE_TODO_REQUESTED,
  id
})

export const updateTodo = (id, title, description) => ({
  type: UPDATE_TODO_REQUESTED,
  id,
  title,
  description
})

export const fetchTodos = () => ({
  type: FETCH_TODOS_REQUESTED
})
