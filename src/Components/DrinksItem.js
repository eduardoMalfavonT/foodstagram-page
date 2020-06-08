/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import drink from "../images/drink.jpg";
import sprite from "../images/sprite.svg";

export default () => {
  return (
    <div className="drinks__item">
      <svg className="drinks__image-icon">
        <use xlinkHref={`${sprite}#icon-forward`} />
      </svg>
      <span className="drinks__span">Ver detalles</span>
      <div className="drinks__containerImage">
        <img className="drinks__image" src={drink} />
      </div>
      <div className="drinks__containerName">
        <span className="drinks__name">Nombre</span>
      </div>
      <div className="drinks__containerPrice">
        <span className="drinks__price">20$</span>
      </div>
    </div>
  );
};
