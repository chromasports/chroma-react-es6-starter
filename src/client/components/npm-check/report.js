import React from 'react';

export default ({ dependencies, visible }) => {

  const outdated = dependencies.filter((d) => {
    return d.installed !== d.latest;
  }).length;

  const unused = dependencies.filter((d) => {
    return d.unused;
  }).length;

  const withoutError = dependencies.length - unused - outdated;

  return (
    <div className={`npm-check-report`}
      style={{ display: (visible) ? 'inline-block' : 'none' }}>
      <div className={`npm-check-report-item`}>
        <p>
          <b>
            {`No. of dependencies: `}
          </b>
          {dependencies.length}
        </p>
      </div>
      <div className={`npm-check-report-item`}>
        <p>
          <b>
            {`No. of dependencies without issue: `}
          </b>
          {withoutError}
          {`(${((withoutError/dependencies.length) * 100).toFixed(2)}%)`}
        </p>
      </div>
      <div className={`npm-check-report-item`}>
        <p>
          <b>
            {`No. of unused dependencies: `}
          </b>
          {unused}
        </p>
      </div>
      <div className={`npm-check-report-item`}>
        <p>
          <b>
            {`No. of outdated dependencies: `}
          </b>
          {outdated}
        </p>
      </div>
    </div>
  )
}
