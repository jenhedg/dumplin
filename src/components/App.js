import React, { Component } from 'react';
import MainNav from './container/MainNav';
import MainHero from './container/MainHero';
import RandomImagesGrid from './container/RandomImagesGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav/>
        <MainHero/>
        <RandomImagesGrid/>
      </div>
    );
  }
}

export default App;
