import React from "react";
import Image from "./Image";
import style from "./styles/Grid.styles";

const Grid = props => (
  <div className={props.className}>
    {props.images.map((image, index) => {
      return (
        <Image key={`grid-image-${index}`} src={image.src} alt={image.alt} />
      );
    })}
  </div>
);

export default style(Grid);
