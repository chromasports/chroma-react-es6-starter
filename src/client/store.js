import { applyMiddleware, combineReducers, createStore } from 'redux';
import sagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';

// import all reducers here.
import sagas from './sagas';
import app from './reducers/app';
import npmCheck from './reducers/npm-check';

// setup and export redux store with middleware
const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware(...sagas),
  thunk
)(createStore);

// combine our reducers and add to our store
export default createStoreWithMiddleware(combineReducers({
  app,
  npmCheck
}));
