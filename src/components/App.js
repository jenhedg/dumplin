import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainNav from './container/MainNav';

import Fade from './presentational/Fade';

import GlobalStyles from './presentational/styles/_Global.styles';

import MeetTheTeam from './pages/MeetTheTeam';
import WhatWeDo from './pages/WhatWeDo';
import Home from './pages/Home';
import MagnoliaPremierPartner from './pages/MagnoliaPremierPartner';
import Career from './pages/Career';

const App = () => (
  <Router>
    <Route
      render={({ location }) => (
        <div className="App">
          {/* Adds Global Styles to every page */}
          <GlobalStyles />

          {/* Visible on Every Page */}
          <MainNav location />

          <Fade key={location.key}>
            {/* Switch looks inherits the location, and chooses one Route to show. */}
            <Switch>
              <Route path="/what-we-do">
                <WhatWeDo />
              </Route>
              <Route path="/magnolia-premier-partner">
                <MagnoliaPremierPartner />
              </Route>
              <Route path="/career">
                <Career />
              </Route>
              <Route path="/meet-the-team">
                <MeetTheTeam />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Fade>
        </div>
      )}
    />
  </Router>
);

export default App;
