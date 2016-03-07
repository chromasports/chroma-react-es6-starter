import React from 'react';
import Dependency from './dependency';

export default ({ dependencies, loading }) => {
  return (
    <div className={`npm-check-dependencies`}
      style={{ display: (!loading) ? 'block' : 'none' }}>
      {dependencies.map((dependency) => {
        return (
          <Dependency dependency={dependency} key={dependency.moduleName}/>
        )
      })}
    </div>
  );
};
