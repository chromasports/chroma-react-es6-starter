// Use this function only when you dont want the type item to get garabage collected
// else this will have an impact on performance
const typeValueAction = type => value => ({type, value});

export const APP_LOADING = 'APP_LOADING';
export const appLoading = typeValueAction(APP_LOADING);// Action Creators

export const NPM_CHECK_BEGIN = 'NPM_CHECK_BEGIN';
export const npmCheckBegin = typeValueAction(NPM_CHECK_BEGIN);

export const NPM_CHECK_SUCCESS = 'NPM_CHECK_SUCCESS';
export const npmCheckSuccess = typeValueAction(NPM_CHECK_SUCCESS);

export const NPM_CHECK_UPDATE_PATH = 'NPM_CHECK_UPDATE_PATH';
export const npmCheckUpdatePath = typeValueAction(NPM_CHECK_UPDATE_PATH);

export const NPM_CHECK_FILTER_ALL = 'NPM_CHECK_FILTER_ALL';
export const npmCheckFilterAll = typeValueAction(NPM_CHECK_FILTER_ALL);

export const NPM_CHECK_FILTER_UNUSED = 'NPM_CHECK_FILTER_UNUSED';
export const npmCheckFilterUnused = typeValueAction(NPM_CHECK_FILTER_UNUSED);

export const NPM_CHECK_FILTER_OUTDATED = 'NPM_CHECK_FILTER_OUTDATED';
export const npmCheckFilterOutdated = typeValueAction(NPM_CHECK_FILTER_OUTDATED);

export const NPM_CHECK_SET_FILTER = 'NPM_CHECK_SET_FILTER';
export const npmCheckSetFilter = typeValueAction(NPM_CHECK_SET_FILTER);

export const NPM_CHECK_SHOW_REPORT = 'NPM_CHECK_SHOW_REPORT';
export const npmCheckShowReport = typeValueAction(NPM_CHECK_SHOW_REPORT);

export const NPM_CHECK_HIDE_REPORT = 'NPM_CHECK_HIDE_REPORT';
export const npmCheckHideReport = typeValueAction(NPM_CHECK_HIDE_REPORT);
