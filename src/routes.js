import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import DashboardContainer from './containers/DashboardContainer';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={DashboardContainer} />
  </Router>
);
