import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './styles/NavLink.styles';

export default style(({ className, href, title }) => (
  <li className={className}>
    <NavLink exact activeClassName="is-active" to={href}>
      {title}
    </NavLink>
  </li>
));
