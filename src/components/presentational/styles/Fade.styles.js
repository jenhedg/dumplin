import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInKeyframes = keyframes`${fadeIn}`;

const Fade = styled.div`
  animation: 150ms ${fadeInKeyframes};
`;

export default () => Fade;
