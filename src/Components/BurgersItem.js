/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import burger from "../images/burger.jpg";
import sprite from "../images/sprite.svg";

export default () => {
  return (
    <div className="burgers__item">
      <svg className="burgers__image-icon">
        <use xlinkHref={`${sprite}#icon-forward`} />
      </svg>
      <span className="burgers__span">Ver detalles</span>
      <div className="burgers__containerImage">
        <img className="burgers__image" src={burger} />
      </div>
      <div className="burgers__containerName">
        <span className="burgers__name">Nombre</span>
      </div>
      <div className="burgers__containerPrice">
        <span className="burgers__price">20$</span>
      </div>
    </div>
  );
};
