import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

// middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// root reducer
import rootReducer from './root-reducer';

const INITIAL_STATE = {};

const middleware = [thunk, logger];

export const store = createStore(
  rootReducer,
  INITIAL_STATE,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

export const persistor = persistStore(store);

export default { store, persistor };
