import React from 'react';
import style from './styles/Image.styles';

const Image = ({
  className, src, alt, ...rest
}) => (
  <img {...rest} className={className} src={src} alt={alt} />
);

export default style(Image);
