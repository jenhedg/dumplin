import React from 'react';
import style from './styles/NavLink.styles';

const NavLink = ({ className, href, title }) => (
  <li className={className}>
    <a href={href}>{title}</a>
  </li>
);

export default style(NavLink);
