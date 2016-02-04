import React from 'react';
import NpmCheck from '../npm-check';
/**
 * Dashboard Container
 * @method DashboardContainer
 * @return {jsx}
 */
const Dashboard = () => (
  <section className={`dashboard`}>
    <h1 className={`text-center`}>NPM Dependency Checker</h1>
    <NpmCheck style={{width: '80%', margin: '0 auto'}}/>
  </section>
);

// export default component
export default Dashboard;
