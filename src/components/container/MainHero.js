import React from 'react';
import Hero from '../presentational/Hero';
import HeroBackground from '../../img/HeroBackground.jpeg';

export default class MainHero extends React.Component {
  state = {
    title: 'Crescendo Collective',
  };

  render() {
    const { title } = this.state;
    return <Hero title={title} image={HeroBackground} />;
  }
}
