import styled from 'styled-components';
import Color from 'color';
import NavLink from '../NavLink';

const getBackgroundColor = ({ backgroundColor }) => backgroundColor || '#C4C4C5';
const getNavLinkColor = props => (Color(getBackgroundColor(props)).isDark() ? '#FFF' : '#000');

export default Nav => styled(Nav)`
  .list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0.5em;
    background: ${props => getBackgroundColor(props)};
    justify-content: flex-end;
  }

  .list ${NavLink} {
    a {
      position: relative;
      display: inline-block;
      text-decoration: none;
      color: ${props => getNavLinkColor(props)};
      padding: 0.5em;
    }

    a:hover,
    a:focus {
      z-index: 1;
      text-decoration: underline;
    }
  }
`;
