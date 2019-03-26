import React, { Component } from 'react';
import MainNav from './container/MainNav';
import MainHero from './container/MainHero';
import EmployeeImagesGrid from './container/EmployeeImagesGrid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <MainHero />
        <EmployeeImagesGrid />
      </div>
    );
  }
}

export default App;
