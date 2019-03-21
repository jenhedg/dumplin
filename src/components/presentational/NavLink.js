import React from 'react';

// / TODO: Add Styles

const NavLink = ({ href, title }) => (
  <li className="nav__link"><a href={href}>{title}</a></li>
);

export default NavLink;
