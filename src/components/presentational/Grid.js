import React from 'react';
import Image from './Image';
import styled from 'styled-components';


const UnstyledGrid = (props) => (
  <div className={props.className}>
    {props.images.map((image, index) => {
      return <Image key={`grid-image-${index}`} src={image.src} alt={image.alt}/>
    })}
  </div>
)

const Grid = styled(UnstyledGrid)`
  width: 100%;
  display: grid;
  grid: repeat(auto-fit,  minmax(200px, 1fr))/ repeat(auto-fit,  minmax(200px, 1fr));
  gap: 10px;

  ${Image} {
    width: 100%;
  }
`

export default Grid