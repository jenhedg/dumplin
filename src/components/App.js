import React from 'react';
import MainNav from './container/MainNav';
import MainHero from './container/MainHero';
import RandomImagesGrid from './container/RandomImagesGrid';
import GlobalStyles from './presentational/styles/_Global.styles';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <MainNav />
    <MainHero />
    <RandomImagesGrid />
  </div>
);

export default App;
