import { createStore, applyMiddleware, compose } from 'redux';

// middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// root reducer
import rootReducer from './root-reducer';

const INITIAL_STATE = {};

const middleware = [thunk, logger];

const store = createStore(
  rootReducer,
  INITIAL_STATE,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export default store;
