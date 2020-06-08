/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import burger from "../images/burger.jpg";
import sprite from "../images/sprite.svg";

export default () => {
  return (
    <div className="foods__item">
      <svg className="foods__image-icon">
        <use xlinkHref={`${sprite}#icon-forward`} />
      </svg>
      <span className="foods__span">Ver detalles de todo</span>
      <div className="foods__containerImage">
        <img className="foods__image" src={burger} />
      </div>
      <div className="foods__containerName">
        <span className="foods__name">Nombre</span>
      </div>
      <div className="foods__containerPrice">
        <span className="foods__price">20$</span>
      </div>
    </div>
  );
};
