import React from 'react';

import NavLink from './NavLink';
import style from './styles/Nav.styles';

const Nav = ({ className, items }) => (
  <nav className={className}>
    <ul className="list">
      {items.map(({ href, title }) => {
        return <NavLink href={href} title={title} key={`nav-link--${href}`} />;
      })}
    </ul>
  </nav>
);

export default style(Nav);
