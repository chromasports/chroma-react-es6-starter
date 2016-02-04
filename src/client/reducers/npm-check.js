import { NPM_CHECK_BEGIN, NPM_CHECK_SUCCESS } from '../actions';

export const initialState = {
  isLoading: false,
  dependencies: []
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

    default:
      return state;
  }

}
