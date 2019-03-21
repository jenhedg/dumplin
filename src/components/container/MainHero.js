import React from 'react';
import Hero from '../presentational/Hero';

class Container extends React.Component {
  state = {
    title: 'Crescendo Collective',
  };

  render() {
    const { title } = this.state;
    return <Hero title={title} />;
  }
}

export default Container;
