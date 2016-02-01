import React from 'react';

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
      <Navigation items={items} />
    </header>
  );
};

// export the component
export default Header;
