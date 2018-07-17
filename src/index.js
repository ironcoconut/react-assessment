import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import Api from './api'

// Not sure if this is the best way to populate initial state.
Api.fetchTodos().then(todos => {

  const sagaMiddleware = createSagaMiddleware()
  const initialState = {
    todos
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(mySaga)

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
  registerServiceWorker();
})
