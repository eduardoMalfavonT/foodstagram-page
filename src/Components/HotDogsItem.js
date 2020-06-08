/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import hotDog from "../images/hot-dog.jpg";
import sprite from "../images/sprite.svg";

export default () => {
  return (
    <div className="hotdogs__item">
      <svg className="hotdogs__image-icon">
        <use xlinkHref={`${sprite}#icon-forward`} />
      </svg>
      <span className="hotdogs__span">Ver detalles</span>
      <div className="hotdogs__containerImage">
        <img className="hotdogs__image" src={hotDog} />
      </div>
      <div className="hotdogs__containerName">
        <span className="hotdogs__name">Nombre</span>
      </div>
      <div className="hotdogs__containerPrice">
        <span className="hotdogs__price">20$</span>
      </div>
    </div>
  );
};
