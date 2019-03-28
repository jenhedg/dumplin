import React from 'react';
import NavLink from './NavLink';

// / TODO: Add Styles

const Nav = ({ items }) => (
  <nav className="nav">
    <ul>
      {items.map(({ href, title }) => {
        return <NavLink href={href} title={title} key={`nav-link--${href}`} />;
      })}
    </ul>
  </nav>
);

export default Nav;
