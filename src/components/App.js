import React from 'react';
import MainNav from './container/MainNav';
import MainHero from './container/MainHero';
import EmployeeImagesGrid from './container/EmployeeImagesGrid';
import GlobalStyles from './presentational/styles/_Global.styles';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <MainNav />
    <MainHero />
    <EmployeeImagesGrid />
  </div>
);

export default App;
