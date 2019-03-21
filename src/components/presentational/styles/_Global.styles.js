import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans');

  * {
    box-sizing: border-box;
  }

  html, 
  body {
    padding: 0;
    margin: 0;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }
`;
