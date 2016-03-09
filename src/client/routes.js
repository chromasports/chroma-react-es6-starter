import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// import our route components (generally speaking these are containers/pages)
import DashboardContainer from './components/pages/dashboard';
import NpmCheck from './components/npm-check';

// export routes
export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={DashboardContainer} />
    <Route path="/npm-check" component={NpmCheck} />
  </Router>
);
