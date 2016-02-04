import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { npmCheckBegin, npmCheckSetFilter } from '../../actions';
import classNames from 'classnames';
import Spinner from 'react-spinkit';

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
    null;

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
      {unused}
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
        <Spinner spinnerName={`double-bounce`}
          style={{
            width: '300px',
            height: '300px',
            margin: '0 auto'
          }}/>
      </div>
    ) :
    null;
};

const renderFilter = (setFilter, active) => {

  const filters = [
    { name: 'SHOW_ALL', label: 'ALL' },
    { name: 'SHOW_UNUSED', label: 'UNUSED' },
    { name: 'SHOW_OUTDATED', label: 'OUTDATED' }
  ];

  return (
    <div className={`npm-check-filter`}>
      <ul>
        {filters.map((filter) => {
          const activeClass = classNames({
            'active': (filter.name === active)
          });

          return (
            <li key={filter.name}
              className={activeClass}
              onClick={() => { setFilter(filter.name); }}>
              <a>
                {filter.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export const NpmCheck = (props) => {

  console.log(props);

  const { dispatch } = props;
  const { isLoading, dependencies, filter } = props.npmCheck;

  const visibleDependencies = (dependencies, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return dependencies;

      case 'SHOW_UNUSED':
        return dependencies.filter((d) => {
          return d.unused;
        });

      case 'SHOW_OUTDATED':
        return dependencies.filter((d) => {
          return (d.installed !== d.latest);
        });

      default:
        return dependencies;
    }
  }

  const renderDeps = (isLoading) ?
    null :
    renderDependencies(visibleDependencies(dependencies, filter));

  const loading = renderLoading(isLoading);

  const checkDependencies = (event) => {
    event.preventDefault();

    if (!isLoading) {
      dispatch(npmCheckBegin());
    }
  }

  const setFilter = (type) => {
    dispatch(npmCheckSetFilter(type));
  }

  const filterMenu = renderFilter(setFilter, filter);

  return (
    <section className={`npm-check`} style={props.style}>
      <div className={`npm-check-form`}>
        <button type={`submit`}
          disabled={isLoading}
          onClick={checkDependencies}>
          {(isLoading) ? 'Checking Dependencies' : 'Check Dependencies'}
        </button>
      </div>
      {filterMenu}
      <div className={`npm-check-results`}>
        {loading}
        {renderDeps}
      </div>
    </section>
  )
};

export default connect((s) => {
  return {
    npmCheck: s.npmCheck
  }
})(NpmCheck);
