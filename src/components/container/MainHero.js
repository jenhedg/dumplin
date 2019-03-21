import React from 'react';
import Hero from '../presentational/Hero';
class Container extends React.Component {
  state = {
    title: "Crescendo Collective"
  }

  render(){
    return  (<Hero title={this.state.title}/>)
  }
}

export default Container;