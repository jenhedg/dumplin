import React from 'react';
import Image from './Image';
import style from './styles/Grid.styles';

const Grid = ({ className, images }) => (
  <div className={className}>
    {images.map(({ src, alt }) => {
      return (
        <Image
          tabIndex="0"
          key={`grid-image-${className}-${src}`}
          src={src}
          alt={alt}
        />
      );
    })}
  </div>
);

export default style(Grid);
