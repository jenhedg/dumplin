import React from 'react';
import styled from 'styled-components';
import Color from 'color';
import NavLink from './NavLink';

const UnstyledNav = ({ className, items }) => (
  <nav className={className}>
    <ul className="list">
      {items.map(({ href, title }) => {
        return <NavLink href={href} title={title} key={`nav-link--${href}`} />;
      })}
    </ul>
  </nav>
);

const Nav = styled(UnstyledNav)`
  .list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0.5em;
    background: ${props => props.backgroundColor || '#C4C4C5'};
    justify-content: flex-end;
  }

  .list ${NavLink} {
    a {
      position: relative;
      display: inline-block;
      text-decoration: none;
      color: ${(props) => {
    const navHeaderBackground = props.backgroundColor || '#C4C4C5';

    return Color(navHeaderBackground).isDark() ? 'white' : 'black';
  }};
      padding: 0.5em;
    }

    a:hover,
    a:focus {
      z-index: 1;
      text-decoration: underline;
    }
  }
`;

export default Nav;
