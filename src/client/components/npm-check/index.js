import React from 'react';
// import npmCheck from 'npm-check';

export default () => {
  const submitForm = (event) => {
    event.preventDefault();
    console.log('submitting form');
    // console.log(npmCheck);
  }

  return (
    <section className={`npm-check`}>
      <div className={`npm-check-form`}>
        <form onSubmit={submitForm}>
          <input type={`text`} placeholder={`package.json`} />
        </form>
      </div>
      <div className={`npm-check-results`}>

      </div>
    </section>
  )
};
