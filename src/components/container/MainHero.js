import React from 'react';
import Hero from '../presentational/Hero';

class Container extends React.Component {
  state = {
    title: 'Crescendo Collective',
    image: 'https://picsum.photos/2000/500', // move this to consts?
  };

  render() {
    return <Hero title={this.state.title} image={this.state.image} />;
  }
}

export default Container;
