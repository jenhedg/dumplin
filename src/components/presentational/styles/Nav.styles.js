import styled from 'styled-components';
import { getBackgroundColor, getNavLinkColor } from './_Global.styles';
import NavLink from '../NavLink';

export default Nav => styled(Nav)`
  .list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0.5em;
    background: ${props => getBackgroundColor(props)};
    justify-content: flex-end;
    height: 50px;
  }

  .list ${NavLink} a {
    color: ${props => getNavLinkColor(props)};

    &.is-active {
      color: ${props => getBackgroundColor(props)};
      background: ${props => getNavLinkColor(props)};
    }
  }
`;
