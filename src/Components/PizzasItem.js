/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import pizza from "../images/pizza.jpg";
import sprite from "../images/sprite.svg";

export default () => {
  return (
    <div className="pizzas__item">
      <svg className="pizzas__image-icon">
        <use xlinkHref={`${sprite}#icon-forward`} />
      </svg>
      <span className="pizzas__span">Ver detalles</span>
      <div className="pizzas__containerImage">
        <img className="pizzas__image" src={pizza} />
      </div>
      <div className="pizzas__containerName">
        <span className="pizzas__name">Nombre</span>
      </div>
      <div className="pizzas__containerPrice">
        <span className="pizzas__price">20$</span>
      </div>
    </div>
  );
};
