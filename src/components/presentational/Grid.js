import React from 'react';
import Image from './Image';

const Grid = (props) => (
  <div className="grid">
    {props.images.map((image, index) => {
      return <Image key={`grid-image-${index}`} src={image.src} alt={image.alt}/>
    })}
  </div>
)

export default Grid