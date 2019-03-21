import React, { Component } from 'react';
import MainNav from './container/MainNav';
import MainHero from './container/MainHero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav/>
        <MainHero/>
      </div>
    );
  }
}

export default App;
