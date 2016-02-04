import React from 'react';
import { Link } from 'react-router';

// import navigation component style sheet
import './navigation.css';

/**
 * Navigation Stateless Component
 * @method
 * @param  {object} props expects items
 * @return {jsx}
 */
export const Navigation = ({ items = [] }) => {
  const links = renderNavigationItems(items);

  return (
    <nav>
      <ul>
        {links}
      </ul>
    </nav>
  );
};

/**
 * Render Navigation Items
 * @method
 * @param  {array} items
 * @return {array}
 */
const renderNavigationItems = (items) => {
  return items.map((item, i) => { return renderNavigationItem(item, i); });
};

/**
 * Render Navigation Item
 * @method
 * @param  {object} item
 * @param  {number} index
 * @return {jsx}
 */
const renderNavigationItem = (item, index) => {
  return (
    <li key={index}>
      <Link to={item.to}>{item.name}</Link>
    </li>
  );
};

// export the navigation component
export default Navigation;
