export const ADD_TODO = 'ADD_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

export const addTodo = title => ({
  type: ADD_TODO,
  title
})

export const completeTodo = id => ({
  type: COMPLETE_TODO,
  id
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
})
