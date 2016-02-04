// Use this function only when you dont want the type item to get garabage collected
// else this will have an impact on performance
const typeValueAction = type => value => ({type, value});

export const APP_LOADING = 'APP_LOADING';
export const appLoading = typeValueAction(APP_LOADING);// Action Creators

export const NPM_CHECK_BEGIN = 'NPM_CHECK_BEGIN';
export const npmCheckBegin = typeValueAction(NPM_CHECK_BEGIN);

export const NPM_CHECK_SUCCESS = 'NPM_CHECK_SUCCESS';
export const npmCheckSuccess = typeValueAction(NPM_CHECK_SUCCESS);
