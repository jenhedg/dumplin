import styled from 'styled-components';

export default Hero => styled(Hero)`
  width: auto;
  height: calc(100vh - 50px);
  overflow: hidden;
  position: relative;

  .hero__title {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 32px;
    z-index: 1;
  }

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
