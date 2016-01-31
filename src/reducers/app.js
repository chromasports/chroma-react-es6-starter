export const initialState = {
  loading: true,
};

export default function(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case 'APP_LOADING':
      return { ...state, loading: true };

    case 'APP_LOADED':
      return { ...state, loading: false };

    default:
      return state;
  }
};
