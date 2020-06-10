/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import sprite from "../images/sprite.svg";

export default ({ producto }) => {
  const { _id, nombre, precio, imagen } = producto;
  return (
    <Link className="drinks__link" to={`/food/details/${_id}`}>
      <div className="drinks__item">
        <svg className="drinks__image-icon">
          <use xlinkHref={`${sprite}#icon-forward`} />
        </svg>
        <span className="drinks__span">Ver detalles</span>
        <div className="drinks__containerImage">
          <img
            className="drinks__image"
            src={`http://192.168.0.6:5000/${imagen}`}
          />
        </div>
        <div className="drinks__containerName">
          <span className="drinks__name">{nombre}</span>
        </div>
        <div className="drinks__containerPrice">
          <span className="drinks__price">{`${precio}$`}</span>
        </div>
      </div>
    </Link>
  );
};
