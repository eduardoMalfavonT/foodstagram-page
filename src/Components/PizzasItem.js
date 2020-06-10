/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import sprite from "../images/sprite.svg";

export default ({ producto }) => {
  const { _id, nombre, precio, imagen } = producto;
  return (
    <Link className="pizzas__link" to={`/food/details/${_id}`}>
      <div className="pizzas__item">
        <svg className="pizzas__image-icon">
          <use xlinkHref={`${sprite}#icon-forward`} />
        </svg>
        <span className="pizzas__span">Ver detalles</span>
        <div className="pizzas__containerImage">
          <img
            className="pizzas__image"
            src={`http://192.168.0.6:5000/${imagen}`}
          />
        </div>
        <div className="pizzas__containerName">
          <span className="pizzas__name">{nombre}</span>
        </div>
        <div className="pizzas__containerPrice">
          <span className="pizzas__price">{`${precio}$`}</span>
        </div>
      </div>
    </Link>
  );
};
