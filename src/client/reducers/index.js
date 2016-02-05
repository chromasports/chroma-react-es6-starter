import { combineReducers } from 'redux';

import app from './app';
import npmCheck from './npm-check';

const rootReducer = combineReducers({
  app,
  npmCheck
});

export default rootReducer;
