import React from 'react';

import './header.css';
// import child components
import Navigation from './navigation';

/**
 * Header Component
 * @method Header
 * @return {jsx}
 */
const Header = () => {

  // navigation items (just an example)
  const items = [
    { name: 'Home', to: '/home' },
    { name: 'Away', to: '/away' }
  ];

  return (
    <header>
      <h1 className={`text-center`}>Chroma React ESNext Toolkit</h1>
      {/*<Navigation items={items} />*/}
    </header>
  );
};

// export the component
export default Header;
