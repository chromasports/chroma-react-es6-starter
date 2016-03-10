import { APP_LOADING, APP_LOADED } from '../actions';
import DB from '../utils/database';

// initial state
const getInitialState = () => {
  let state = {};

  DB.app.get('name').then(() => {
    // do something to add it to the state?
  });

  return {
    ...state,
    loading: false,
  };
}

export const initialState = getInitialState();

// reducer function
export default function(state = initialState, { type, value }) {
  // switch based on the action.type
  switch (type) {
    case APP_LOADING:
      return { ...state, loading: true };

    case APP_LOADED:
      return { ...state, loading: false };

    default:
      return state;
  }
}
