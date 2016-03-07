import React from 'react';
import classNames from 'classnames';

export default ({ setFilter, active }) => {

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
              <a href={`javascript:void(0);`}>
                {filter.label}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  );
}
