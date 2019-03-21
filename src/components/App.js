import React from 'react';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';
import MainNav from './container/MainNav';
import MainHero from './container/MainHero';
import RandomImagesGrid from './container/RandomImagesGrid';
import GlobalStyles from './presentational/styles/_Global.styles';
import WhatWeDo from './pages/WhatWeDo';

const App = () => (
  <Router>
    <div className="App">
      <GlobalStyles />
      <MainNav />
      <MainHero />
      <Route path="/meet-the-team" render={MeetTheTeam} />
      <Route path="/what-we-do" render={WhatWeDo} />
      <Route path="/magnolia-premier-partner" render={MagnoliaPremierPartner} />
      <Route path="/career" render={Career} />
      <RandomImagesGrid />
    </div>
  </Router>
);

export default App;
