import styled from 'styled-components';
import Image from '../Image';
import { BEZIER_CURVES } from '../../../consts';

export default Grid => styled(Grid)`
  width: 100%;
  padding: 10px;
  display: grid;
  grid: repeat(auto-fit, minmax(200px, 250px)) / repeat(
      auto-fit,
      minmax(200px, 250px)
    );
  gap: 15px;

  &:hover {
    ${Image} {
      filter: grayscale(.9) blur(1px);
    }
  }

  ${Image} {
    width: 100%
    cursor: pointer;
    position: relative;
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,.3);
    transition: 
      filter 150ms ${BEZIER_CURVES.snappy},
      box-shadow 150ms ${BEZIER_CURVES.snappy};
  }

  ${Image}:hover,
  ${Image}:focus {
    z-index: 1;
    filter: grayscale(0) blur(0);
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,.5);
  }
`;
