import React from 'react';
import {
 BrowserRouter as Router, Link, Route, Switch 
} from 'react-router-dom';
import MainNav from './container/MainNav';
import MainHero from './container/MainHero';
import RandomImagesGrid from './container/RandomImagesGrid';
import GlobalStyles from './presentational/styles/_Global.styles';

const App = () => (
  <Router>
    <div className="App">
      <GlobalStyles />
      <MainNav />
      <MainHero />
      <RandomImagesGrid />
    </div>
  </Router>
);

export default App;
