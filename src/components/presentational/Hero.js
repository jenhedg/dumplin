import React from 'react';
import style from './styles/Hero.styles';

const Hero = ({ className, title, image }) => {
  return (
    <div className={className}>
      <img src={image} alt="" />
      <div className="hero__title">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default style(Hero);
