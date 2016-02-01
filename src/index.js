import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import store from './store';

// this line throws an eslint error but we need to import otherwise the
// indexeddb is never instantiated... TODO find a better way to manage this
import db from './utils/Database';

console.log(db);

import AppContainer from './containers/AppContainer';

render(
  <Provider store={store}>
    <AppContainer>
      <routes/>
    </AppContainer>
  </Provider>,
  document.getElementById('app')
);
