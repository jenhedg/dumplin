import React from 'react';
import Hero from '../presentational/Hero';

export default class MainHero extends React.Component {
  state = {
    title: 'Crescendo Collective',
    image: 'https://picsum.photos/2000', // move this to consts?
  };

  render() {
    return <Hero title={this.state.title} image={this.state.image} />;
  }
}
