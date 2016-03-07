import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { npmCheckBegin, npmCheckSetFilter, npmCheckShowReport, npmCheckHideReport, npmCheckUpdatePath } from '../../actions';
import FilterMenu from './filter';
import Dependencies from './dependencies';
import Report from './report';
import Loading from './loading';

import './npm-check.css';

export const NpmCheck = ({ dispatch, npmCheck, style }) => {

  const { isLoading, dependencies, filter, report } = npmCheck;

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

  const checkDependencies = (event) => {
    event.preventDefault();

    if (!isLoading) {
      dispatch(npmCheckBegin());
    }
  }

  const setFilter = (type) => {
    dispatch(npmCheckSetFilter(type));
  }

  const toggleReport = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if (report) {
      dispatch(npmCheckHideReport());
    } else {
      dispatch(npmCheckShowReport());
    }
  }

  const handleChangePath = (event) => {
    dispatch(npmCheckUpdatePath(event.target.value));
  }

  return (
    <section className={`npm-check`} style={style}>
      <div className={`npm-check-form`}>
        <form onSubmit={checkDependencies}>
          <input type={`text`}
            disabled={true}
            onChange={handleChangePath}
            placeholder={`public github repo - leave blank to check this app :)`} />
          <button type={`submit`}
            disabled={isLoading}>
            {(isLoading) ?
              'Checking dependencies' :
              'Click to check dependencies'
            }
            {(dependencies.length > 0) ?
              (
                <span className={`text-right`}
                  onClick={toggleReport}
                  style={{textDecoration: 'underline'}}>
                  {(report) ?
                    'Hide report' :
                    'Show report'
                  }
                </span>
              ): null
            }
          </button>
        </form>
      </div>
      <Report dependencies={dependencies} visible={report} />
      <FilterMenu setFilter={setFilter} active={filter} />
      <div className={`npm-check-results`}>
        {isLoading && <Loading/>}
        <Dependencies dependencies={visibleDependencies(dependencies, filter)} loading={isLoading} />
      </div>
    </section>
  )
};

export default connect((s) => {
  return {
    npmCheck: s.npmCheck
  }
})(NpmCheck);
