import React, { Component } from 'react';
import MainNav from './container/MainNav';
import MainHero from './container/MainHero';
import { createGlobalStyle } from 'styled-components'
import RandomImagesGrid from './container/RandomImagesGrid';

const AppStyle = createGlobalStyle`
  @import('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans');

  html, 
  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppStyle/>
        <MainNav/>
        <MainHero/>
        <RandomImagesGrid/>
      </div>
    );
  }
}

export default App;
