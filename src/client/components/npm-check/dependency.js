import React from 'react';
import classNames from 'classnames';

export default ({dependency}) => {

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
