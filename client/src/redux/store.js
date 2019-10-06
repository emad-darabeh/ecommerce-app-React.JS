import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

// middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

// root reducer
import rootReducer from './root-reducer';

// root saga
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

const INITIAL_STATE = {};

const middleware = [thunk, sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

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

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
