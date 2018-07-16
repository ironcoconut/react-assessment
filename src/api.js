import Fetch from 'isomorphic-fetch'

const url = 'https://practiceapi.devmountain.com/api/tasks/'
const headers = { 'Content-Type': 'application/json' }

const api = {
  fetchTodos() {
    return Fetch(url, { headers: headers }).then(res => res.json());
  },
  addTodo(title) {
    const body = { title: title }
    return Fetch(url, { method: 'POST', body: JSON.stringify(body), headers: headers }).then(res => res.json())
  },
  removeTodo(id) {
    return Fetch(url+id, { method: 'DELETE', headers: headers }).then(res => res.json())
  },
  completeTodo(id) {
    return Fetch(url+id, {method: 'PUT', headers: headers }).then(res => res.json())
  },
  updateTodo(id, title, description) {
    const body = { title: title, description: description }
    return Fetch(url+id, {method: 'PATCH', body: JSON.stringify(body), headers: headers }).then(res => res.json())
  }
}

export default api;
