import React from 'react';
import Image from '../presentational/Image';
import { LOGOIMAGE } from '../../consts';

/// TODO: Add Styles

const MainLogo = () => {
  return (
    <Image src={LOGOIMAGE.src} alt={LOGOIMAGE.alt} />
  );
};

export default MainLogo;
