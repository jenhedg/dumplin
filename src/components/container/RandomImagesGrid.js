import React from 'react';
import Grid from '../presentational/Grid';
import {images} from '../../consts';
class RandomImagesGrid extends React.Component {

  state = {
    images: [] // Start with an empty array
  }

  componentDidMount(){
    this.setState(state => {
      return { images: images }
    })
  }
  
  render(){
    return (
      <Grid images={this.state.images}/>
    )
  }
}


export default RandomImagesGrid