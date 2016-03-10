import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// import our route components (generally speaking these are containers/pages)
import DashboardContainer from './components/pages/dashboard';

// export routes
export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={DashboardContainer} />
  </Router>
);
