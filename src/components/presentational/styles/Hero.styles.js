import styled from 'styled-components';

export default Hero => styled(Hero)`
  width: auto;
  height: calc(100vh - 50px);
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  background-image: url(${props => props.image});
  background-size: cover;

  .hero__title {
    color: white;
    font-size: 32px;
    z-index: 1;
    text-align: left;
    margin-left: 20px;
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
