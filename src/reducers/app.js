import { APP_LOADING, APP_LOADED } from '../actions';

// initial state
export const initialState = {
  loading: false
};

// reducer function
export default function(state = initialState, action) {
  // destructure action object and extract type
  const { type } = action;

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
