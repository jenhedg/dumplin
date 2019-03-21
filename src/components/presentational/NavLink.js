import React from 'react';
import styled from 'styled-components';

const UnstyledNavLink = ({ className, href, title }) => (
  <li className={className}>
    <a href={href}>{title}</a>
  </li>
);

const NavLink = styled(UnstyledNavLink)``;

export default NavLink;
