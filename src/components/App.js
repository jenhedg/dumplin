import React from 'react';
import MainNav from './container/MainNav';
import MainHero from './container/MainHero';
import MainLogo from './container/MainLogo';
import EmployeeImagesGrid from './container/EmployeeImagesGrid';

const App = () => (
  <div className="App">
    <MainLogo />
    <MainNav />
    <MainHero />
    <EmployeeImagesGrid />
  </div>
);

export default App;
