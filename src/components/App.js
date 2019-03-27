import React, { Component } from 'react';
import MainNav from './container/MainNav';
import MainHero from './container/MainHero';
import MainLogo from './container/MainLogo';
import RandomImagesGrid from './container/RandomImagesGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainLogo />
        <MainNav />
        <MainHero />
        <RandomImagesGrid />
      </div>
    );
  }
}

export default App;
