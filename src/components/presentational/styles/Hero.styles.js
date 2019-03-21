import styled from 'styled-components';

export default Hero => styled(Hero)`
  width: auto;
  height: calc(100vh - 50px);
  overflow: hidden;

  .hero__title {
    position: absolute;
    top: 50%;
    left: 25%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 32px;
  }
`;
