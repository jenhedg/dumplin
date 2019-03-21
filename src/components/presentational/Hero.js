import React from 'react';
import style from './styles/Hero.styles';

const Hero = ({ className, title, image }) => {
  return (
    <div className={className}>
      <img src={image} />
      <div className="hero__title">{title}</div>
    </div>
  );
};

export default style(Hero);
