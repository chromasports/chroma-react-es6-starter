import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/header';

/**
 * AppContainer the main application layout
 * @method  AppContainer Stateless Component
 * @param  {object}
 * @return {jsx}   [description]
 */
export const AppContainer = (props) => {
  const { children } = props;

  return (
    <section className={`app`}>
      <Header/>
      { children }
    </section>
  );

}

// Export the default connected component
export default connect((state) => {
  return {
    app: state.app
  };
})(AppContainer);
