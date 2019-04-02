import { createGlobalStyle } from 'styled-components';
import Color from 'color';

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

export const getBackgroundColor = ({ backgroundColor }) => backgroundColor || '#C4C4C5';
export const getNavLinkColor = props => (Color(getBackgroundColor(props)).isDark() ? '#FFF' : '#000');
