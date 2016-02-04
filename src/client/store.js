import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

// import all reducers here.
import app from './reducers/app';

// setup and export redux store with middleware
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// combine our reducers and add to our store
export default createStoreWithMiddleware(combineReducers({
  app
}));
