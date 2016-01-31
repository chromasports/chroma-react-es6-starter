import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from './Routes';
import store from './store';

import db from './utils/Database';

import AppContainer from './containers/AppContainer';

render(
  <Provider store={store}>
    <AppContainer>
      <Routes/>
    </AppContainer>
  </Provider>,
  document.getElementById('app')
);
