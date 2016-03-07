import React from 'react';
import Spinner from 'react-spinkit';

export default () => {
  return (
    <div className={`npm-check-loading`}>
      <Spinner spinnerName={`pulse`}
        style={{
          width: '300px',
          height: '300px',
          margin: '0 auto'
        }}/>
    </div>
  );
};
