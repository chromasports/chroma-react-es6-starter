import React from 'react';
import { connect } from 'react-redux';
import { npmCheckBegin } from '../../actions';
import classNames from 'classnames';

import './npm-check.css';

const renderDependency = (dependency) => {

  const outOfDate = (dependency.installed !== dependency.latest) ?
    (
      <div className={`message`}>
        <p>{`Your local version is out of date`}</p>
        <p>{`npm install ${dependency.moduleName} ${(dependency.devDependency) ? '--save-dev' : `--save`} to go from ${dependency.installed} to ${dependency.latest}`}</p>
      </div>
    ) :
    null;

  const unused = (dependency.unused) ?
    (
      <div className={`message`}>
        <p>{`Possibly unused dependency`}</p>
        <p>{`npm uninstall ${dependency.moduleName} ${(dependency.devDependency) ? '--save-dev' : `--save`} to remove dependency`}</p>
      </div>
    ) :
    null
  const depClass = classNames({
    'npm-check-dependency': true,
    'out-of-date': (dependency.installed !== dependency.latest),
    'unused': dependency.unused,
    'mismatch': dependency.mismatch,
    'dev-dependency': dependency.devDependency
  });

  return (
    <div className={depClass} key={dependency.moduleName}>
      <h1>
        <a href={dependency.homepage} target={`_blank`}>
          {`${dependency.moduleName} `}
        </a>
        <span className={`version text-right`}>{dependency.installed}</span>
      </h1>
      {outOfDate}
    </div>
  )
};

const renderDependencies = (dependencies) => {
  return dependencies.map((dependency) => {
    return renderDependency(dependency);
  });
};

const renderLoading = (isLoading) => {
  return (isLoading) ?
    (
      <div className={`npm-check-loading`}>
          <h1 className={`text-center`}>
            Checking Dependencies
          </h1>
      </div>
    ) :
    null;
};

export const NpmCheck = (props) => {
  const { dispatch } = props;

  const dependencies = renderDependencies(props.npmCheck.dependencies);
  const loading = renderLoading(props.npmCheck.isLoading);

  const submitForm = (event) => {
    event.preventDefault();

    dispatch(npmCheckBegin());
  }


  return (
    <section className={`npm-check`}>
      <div className={`npm-check-form`}>
        <form onSubmit={submitForm}>
          <input type={`text`} placeholder={`package.json`} />
          <button type={`submit`}>Check Dependencies</button>
        </form>
      </div>
      <div className={`npm-check-results`}>
        {loading}
        {dependencies}
      </div>
    </section>
  )
};

export default connect((s) => {
  return {
    npmCheck: s.npmCheck
  }
})(NpmCheck);
