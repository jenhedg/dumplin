import React from 'react';
import Image from '../presentational/Image';
import { LOGOIMAGE } from '../../consts';

// // / TODO: Add Styles

class MainLogo extends React.Component {
  render() {
    return (<Image src={LOGOIMAGE.src} alt={LOGOIMAGE.alt}  />);
  }
}

export default MainLogo;
