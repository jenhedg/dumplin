import React from 'react';
import NavLink from '../presentational/NavLink';
import styled from 'styled-components';
import Color from "color";

const UnstyledNav = (props) => (
    <nav className={props.className}>
        <ul className="list">
            {props.items.map((item, index) => {
                return <NavLink href={item.href} title={item.title} key={`nav-link--${index}`}/>
            })}
        </ul>
    </nav>
)

const Nav = styled(UnstyledNav)`

 .list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: .5em;
    background: ${props => props.backgroundColor || "#C4C4C5"};
    justify-content: flex-end;
 }

 .list ${NavLink} {
     a {
        position: relative;
        display: inline-block;
        text-decoration: none;
        color: ${props => {
            const navHeaderBackground =  props.backgroundColor || "#C4C4C5";

            return Color(navHeaderBackground).isDark() ? "white" : "black";
        }};
        padding: .5em;
    }

    a:hover,
    a:focus {
        z-index: 1;
        text-decoration: underline;
    }
 }
`

export default Nav;