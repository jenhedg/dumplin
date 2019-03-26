import React from 'react';
import Grid from '../presentational/Grid';
import { IMAGES } from '../../consts';

class RandomImagesGrid extends React.Component {
  state = {
    images: IMAGES,
  };

  render() {
    const { images } = this.state;
    return <Grid images={images} />;
  }
}

export default RandomImagesGrid;
