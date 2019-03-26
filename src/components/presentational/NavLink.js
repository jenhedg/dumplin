import React from 'react';
import { Link } from 'react-router-dom';
import style from './styles/NavLink.styles';

const NavLink = ({ className, href, title }) => (
  <li className={className}>
    <Link to={href}>{title}</Link>
  </li>
);

export default style(NavLink);
