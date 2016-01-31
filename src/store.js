import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import app from './reducers/app';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default createStoreWithMiddleware(combineReducers({
  app
}));
