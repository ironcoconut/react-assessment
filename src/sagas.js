import { call, put, takeEvery } from 'redux-saga/effects'
import Api from './api'
import {
  FETCH_TODOS_REQUESTED,
  FETCH_TODOS_SUCCEEDED,
  FETCH_TODOS_FAILED,
  ADD_TODO_REQUESTED,
  ADD_TODO_SUCCEEDED,
  ADD_TODO_FAILED,
  REMOVE_TODO_REQUESTED,
  REMOVE_TODO_SUCCEEDED,
  REMOVE_TODO_FAILED,
  COMPLETE_TODO_REQUESTED,
  COMPLETE_TODO_SUCCEEDED,
  COMPLETE_TODO_FAILED,
  UPDATE_TODO_REQUESTED,
  UPDATE_TODO_SUCCEEDED,
  UPDATE_TODO_FAILED
} from './actions'

function* fetchTodos() {
   try {
      const todos = yield call(Api.fetchTodos);
      yield put({type: FETCH_TODOS_SUCCEEDED, todos: todos});
   } catch (e) {
      yield put({type: FETCH_TODOS_FAILED, message: e.message});
   }
}

function* addTodo(action) {
  try {
    const todos = yield call(Api.addTodo, action.title);
    yield put({type: ADD_TODO_SUCCEEDED, todos: todos});
  } catch (e) {
     yield put({type: ADD_TODO_FAILED, message: e.message});
  }
}

function* removeTodo(action) {
  try {
    const todos = yield call(Api.removeTodo, action.id);
    yield put({type: REMOVE_TODO_SUCCEEDED, todos: todos});
  } catch (e) {
     yield put({type: REMOVE_TODO_FAILED, message: e.message});
  }
}

function* completeTodo(action) {
  try {
    const todos = yield call(Api.completeTodo, action.id);
    yield put({type: COMPLETE_TODO_SUCCEEDED, todos: todos});
  } catch (e) {
     yield put({type: COMPLETE_TODO_FAILED, message: e.message});
  }
}

function* updateTodo(action) {
  try {
    const todos = yield call(Api.updateTodo, action.id, action.title, action.description);
    yield put({type: UPDATE_TODO_SUCCEEDED, todos: todos});
  } catch (e) {
     yield put({type: UPDATE_TODO_FAILED, message: e.message});
  }
}

function* mySaga() {
  yield takeEvery(FETCH_TODOS_REQUESTED, fetchTodos);
  yield takeEvery(ADD_TODO_REQUESTED, addTodo);
  yield takeEvery(REMOVE_TODO_REQUESTED, removeTodo);
  yield takeEvery(COMPLETE_TODO_REQUESTED, completeTodo);
  yield takeEvery(UPDATE_TODO_REQUESTED, updateTodo);
}

export default mySaga;
