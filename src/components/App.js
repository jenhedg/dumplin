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
          <GlobalStyles />
          <MainNav location />
          <Fade key={location.key}>
            <Switch>
              <Route path="/what-we-do" render={() => <WhatWeDo />} />
              <Route
                path="/magnolia-premier-partner"
                render={() => <MagnoliaPremierPartner />}
              />
              <Route path="/career" render={() => <Career />} />
              <Route path="/meet-the-team" render={() => <MeetTheTeam />} />
              <Route path="/" render={() => <Home />} />
            </Switch>
          </Fade>
        </div>
      )}
    />
  </Router>
);

export default App;
