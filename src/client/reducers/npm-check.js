import {
  NPM_CHECK_BEGIN,
  NPM_CHECK_SUCCESS,
  NPM_CHECK_UPDATE_PATH,
  NPM_CHECK_FILTER_ALL,
  NPM_CHECK_FILTER_UNUSED,
  NPM_CHECK_FILTER_OUTDATED,
  NPM_CHECK_SET_FILTER,
  NPM_CHECK_SHOW_REPORT,
  NPM_CHECK_HIDE_REPORT
} from '../actions';

export const initialState = {
  isLoading: false,
  dependencies: [],
  filter: 'SHOW_ALL',
  path: ''
};

export default function(state = initialState, {type, value}) {

  switch(type) {
    case NPM_CHECK_BEGIN:
      return {
        ...state,
        isLoading: true
      };

    case NPM_CHECK_SUCCESS:
      let dependencies = [];
      let dependency;

      for (dependency in value.response.data) {
        dependencies.push(value.response.data[dependency]);
      }

      return {
        ...state,
        isLoading: false,
        dependencies: dependencies
      };

    case NPM_CHECK_UPDATE_PATH:
      return {
        ...state,
        path: value
      }

    case NPM_CHECK_FILTER_ALL:
      return {
        ...state,
        filter: 'SHOW_ALL'
      };

    case NPM_CHECK_FILTER_UNUSED:
      return {
        ...state,
        filter: 'SHOW_UNUSED'
      };

    case NPM_CHECK_FILTER_OUTDATED:
      return {
        ...state,
        filter: 'SHOW_OUTDATED'
      };

    case NPM_CHECK_SET_FILTER:
      return {
        ...state,
        filter: value
      };

    case NPM_CHECK_HIDE_REPORT:
      return {
        ...state,
        report: false
      };

    case NPM_CHECK_SHOW_REPORT:
      return {
        ...state,
        report: true
      }

    default:
      return state;
  }

}
