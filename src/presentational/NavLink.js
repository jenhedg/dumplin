import React from 'react';

/// TODO: Add Styles

const NavLink = (props) => (
    <li className="nav__link"><a href={props.href}>{props.title}</a></li>
)

export default NavLink;