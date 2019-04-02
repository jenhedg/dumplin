import React from 'react';
import Nav from '../presentational/Nav';
import { MAIN_NAV_BACKGROUND_COLOR } from '../../consts';

class MainNav extends React.Component {
  state = {
    items: [
      {
        href: '/',
        title: 'Home',
      },
      {
        href: '/meet-the-team',
        title: 'Meet The Team',
      },
      {
        href: '/what-we-do',
        title: 'What We Do',
      },
      {
        href: '/magnolia-premier-partner',
        title: 'Magnolia Premier Partner',
      },
      {
        href: '/career',
        title: 'Career',
      },
    ],
  };

  render() {
    const { items } = this.state;
    return <Nav backgroundColor={MAIN_NAV_BACKGROUND_COLOR} items={items} />;
  }
}

export default MainNav;
