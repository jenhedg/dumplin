import React from 'react';
import styled from 'styled-components';

const UnstyledNavLink = (props) => (
    <li className={props.className}><a href={props.href}>{props.title}</a></li>
)

const NavLink = styled(UnstyledNavLink)``

export default NavLink;