/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import sprite from "../images/sprite.svg";

export default ({ producto }) => {
  const { _id, nombre, precio, imagen } = producto;
  return (
    <Link className="hotdogs__link" to={`/food/details/${_id}`}>
      <div className="hotdogs__item">
        <svg className="hotdogs__image-icon">
          <use xlinkHref={`${sprite}#icon-forward`} />
        </svg>
        <span className="hotdogs__span">Ver detalles</span>
        <div className="hotdogs__containerImage">
          <img
            className="hotdogs__image"
            src={`http://192.168.0.6:5000/${imagen}`}
          />
        </div>
        <div className="hotdogs__containerName">
          <span className="hotdogs__name">{nombre}</span>
        </div>
        <div className="hotdogs__containerPrice">
          <span className="hotdogs__price">{`${precio}$`}</span>
        </div>
      </div>
    </Link>
  );
};
