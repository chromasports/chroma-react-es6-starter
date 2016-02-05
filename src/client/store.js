import { applyMiddleware, createStore, compose } from 'redux';
import { persistState } from 'redux-devtools';
import sagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import DevTools from './containers/dev-tools';

import sagas from './sagas';

const getDebugSessionKey = () => {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0)? matches[1] : null;
}

const enhancer = (!__DEV__) ?
  compose(
    applyMiddleware(
      sagaMiddleware(...sagas),
      thunk
    ),
  ) :
  compose(
    applyMiddleware(
      sagaMiddleware(...sagas),
      thunk
    ),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument(),
    persistState(getDebugSessionKey())
  );

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('./reducers', () =>
      store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
    );
  }

  return store;
}
