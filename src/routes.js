import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// import our route components (generally speaking these are container/pages)
import DashboardContainer from './components/pages/dashboard';

// export routes so we can use elsewhere :)
export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={DashboardContainer} />
  </Router>
);
