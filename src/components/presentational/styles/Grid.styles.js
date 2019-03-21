import styled from 'styled-components';
import Image from '../Image';

export default Grid => styled(Grid)`
  width: 100%;
  display: grid;
  grid: repeat(auto-fit, minmax(200px, 1fr)) / repeat(
      auto-fit,
      minmax(200px, 1fr)
    );
  /* gap: 10px; */
  /* padding: 10px; */

  ${Image} {
    width: 100%
    position: relative;
    transform: scale(.95);
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,.3);
    transition: transform 150ms cubic-bezier(.28,0,.39,1), box-shadow 150ms cubic-bezier(.28,0,.39,1);
  }

  ${Image}:hover {
    transform: scale(1);
    z-index: 1;
    box-shadow: 2px 2px 10px 0px rgba(0,0,0,.5);
  }
`;
