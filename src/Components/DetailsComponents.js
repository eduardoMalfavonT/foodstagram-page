/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import sprite from "../images/sprite.svg";

export default ({ producto }) => {
  console.log(producto);
  const { nombre, precio, ingredientes, imagen, direccion } = producto;
  console.log(ingredientes);
  return (
    <div className="details__item">
      <div className="details__imageContainer">
        <img
          className="details__image"
          src={`http://192.168.0.6:5000/${imagen}`}
        />
      </div>
      <div className="details__nameContainer">
        <span className="details__name">{nombre}</span>
      </div>
      <div className="details__ingredientsContainer">
        {ingredientes !== undefined &&
          ingredientes.map((ingrediente) => (
            <span className="details__ingredient">{ingrediente}</span>
          ))}
      </div>
      <div className="details__directionContainer">
        <span className="details__direction">{direccion}</span>
      </div>
      <div className="details__priceContainer">
        <span className="details__price">{`${precio}$`}</span>
      </div>
      <div className="details__buttonContainer">
        <button className="details__button">
          <svg className="details__icon">
            <use xlinkHref={`${sprite}#icon-shopping-cart1`} />
          </svg>
          Incluir al carrito
        </button>
      </div>
    </div>
  );
};
