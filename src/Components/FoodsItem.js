/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import sprite from "../images/sprite.svg";

export default ({ producto }) => {
  const { _id, nombre, precio, imagen } = producto;
  return (
    <Link className="foods__link" to={`/food/details/${_id}`}>
      <div className="foods__item">
        <svg className="foods__image-icon">
          <use xlinkHref={`${sprite}#icon-forward`} />
        </svg>
        <span className="foods__span">Ver detalles de todo</span>
        <div className="foods__containerImage">
          <img
            className="foods__image"
            src={`http://192.168.0.6:5000/${imagen}`}
          />
        </div>
        <div className="foods__containerName">
          <span className="foods__name">{nombre}</span>
        </div>
        <div className="foods__containerPrice">
          <span className="foods__price">{`${precio}$`}</span>
        </div>
      </div>
    </Link>
  );
};
