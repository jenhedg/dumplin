import React, { Component } from 'react';
import MainHero from './container/MainHero';
import RandomImagesGrid from './container/RandomImagesGrid';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainHero />
          <RandomImagesGrid />
        </div>
      </Router>
    );
  }
}

export default App;
