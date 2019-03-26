import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

export const Fade = styled.div`
  animation: 250ms ${keyframes`${fadeIn}`};
`;

export default Fade;
