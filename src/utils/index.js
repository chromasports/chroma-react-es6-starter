export function createConstants (...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;

    return acc;
  }, {});
}

export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer ? reducer(state, action.payload) : state;
  };
}

// handy function especially when using immutablejs or similar
// this function proved really helpful for the following use case...
// started using immutable -> removed immutable... using this func meant that
// there was no need to replace obj.get calls throughout the codebase and vice versa
export function getter(obj, propName) {
  return obj.get ? obj.get(propName) : (obj[propName]) ? obj[propName] : null
}
