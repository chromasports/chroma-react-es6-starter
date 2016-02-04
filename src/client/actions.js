// Use this function only when you dont want the type item to get garabage collected
// else this will have an impact on performance
const typeValueAction = type => value => ({type, value});

export const APP_LOADING = 'APP_LOADING';

// Action Creators
export const appLoading = typeValueAction(APP_LOADING);
