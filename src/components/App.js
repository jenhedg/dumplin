import React, { Component } from 'react';
import MainHero from './container/MainHero';
import RandomImagesGrid from './container/RandomImagesGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHero/>
        <RandomImagesGrid/>
      </div>
    );
  }
}

export default App;
