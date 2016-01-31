export const initialState = {};

export default function(state = initialState, action) {
  const {type, data} = action;

  switch (type) {
    case 'APP_LOADING':
      return state;

    default:
      return state;
  }
};
