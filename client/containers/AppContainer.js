import React from 'react';

export const AppContainer = ({ children }) => {

  return (
    <section className={`app`}>
      { children }
    </section>
  );

}

export default AppContainer;
