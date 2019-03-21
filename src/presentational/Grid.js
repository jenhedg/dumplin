import React from 'react';
import Image from './Image';

const Grid = (props) => {
  const { images } = props;

  return (
    <div className="grid">
      {images.map((image, index) => {
        return <Image key={`grid-image-${index}`} src={image.src} alt={image.alt}/>
      })}
    </div>
  )
}

export default Grid