import React from 'react';
import Image from './Image';

const Grid = ({ images }) => (
  <div className="grid">
    {images.map(({ src, alt }) => {
      return <Image key={`grid-image-${src}`} src={src} alt={alt} />;
    })}
  </div>
);

export default Grid;
