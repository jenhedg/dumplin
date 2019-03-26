import styled from 'styled-components';
import { BEZIER_CURVES } from '../../../consts';

export default NavLink => styled(NavLink)`
  a {
    padding: 0.5em;
    text-decoration: none;
    display: block;
    color: white;
    transition: color 50ms ${BEZIER_CURVES.snappy},
      background 50ms ${BEZIER_CURVES.snappy};

    &:focus,
    &:active {
      background: black;
      color: white;
    }

    &.is-active,
    &:focus,
    &:active {
      background: white;
      color: black;
    }
  }
`;
