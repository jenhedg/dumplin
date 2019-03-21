import React from 'react';
import styled from 'styled-components';

const UnstyledImage = ({ className, src, alt }) => (
  <img className={className} src={src} alt={alt} />
);

const Image = styled(UnstyledImage)``;

export default Image;
