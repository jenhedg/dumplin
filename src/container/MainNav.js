import React from 'react';
import Nav from '../presentational/Nav';

class MainNav extends React.Component {
  state = {
    items: [{
        href: "/meet-the-team",
        title: "Meet The Team"
    }, {
        href: "/what-we-do",
        title: "What We Do"
    },
    {
        href: "/magnolia-premier-partner",
        title: "Magnolia Premier Partner"
    },
    {
        href: "/career",
        title: "Career"
    }]
  }

  render(){
    return  (<Nav items={this.state.items} />)
  }
}

export default MainNav;