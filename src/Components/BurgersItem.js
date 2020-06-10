/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import sprite from "../images/sprite.svg";

export default ({ producto }) => {
  const { _id, nombre, precio, imagen } = producto;
  return (
    <Link className="burgers__link" to={`/food/details/${_id}`}>
      <div className="burgers__item">
        <svg className="burgers__image-icon">
          <use xlinkHref={`${sprite}#icon-forward`} />
        </svg>
        <span className="burgers__span">Ver detalles</span>
        <div className="burgers__containerImage">
          <img
            className="burgers__image"
            src={`http://192.168.0.6:5000/${imagen}`}
          />
        </div>
        <div className="burgers__containerName">
          <span className="burgers__name">{nombre}</span>
        </div>
        <div className="burgers__containerPrice">
          <span className="burgers__price">{`${precio}$`}</span>
        </div>
      </div>
    </Link>
  );
};
