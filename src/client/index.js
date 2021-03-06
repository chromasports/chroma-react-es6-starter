import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// import routes and store for use in render
import Routes from './routes';
import configureStore from './store';
import showDevTools from './utils/dev-tools-window';
// import NpmCheck from './components/npm-check';

// this line throws an eslint error as unused var but we need to import otherwise
// the indexeddb is never instantiated... TODO find a better way to manage this
// maybe when this lives in a reducer it will load as expected... TEST THIS
// import DB from './utils/Database';

// import our app layout container
import AppContainer from './containers/app-container';

import './index.css';

const store = configureStore();
// setup the db connection
// DB()
//   // if setting up db worked then
//   .then(() => {
    // render the react application
    render(
      <Provider store={store}>
        <AppContainer>
          <Routes />
        </AppContainer>
      </Provider>,
      document.getElementById('app')
    );
  // })
  // // snap, setting up db failed
  // .catch(() => {
  //   throw new Error('Failed to setup indexeddb, is your browser compatible?');
  // });

if (__DEV__) {
  showDevTools(store);
}
