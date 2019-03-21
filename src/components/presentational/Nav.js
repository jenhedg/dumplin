import React from 'react';
import NavLink from '../presentational/NavLink';


/// TODO: Add Styles

const Nav = (props) => (
    <nav className="nav">
        <ul>
            {props.items.map((item, index) => {
                return <NavLink href={item.href} title={item.title} key={`nav-link--${index}`}/>
            })}
        </ul>
    </nav>
)

export default Nav;