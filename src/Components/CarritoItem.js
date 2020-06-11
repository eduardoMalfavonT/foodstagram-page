/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default ({ producto }) => {
  const { nombre, precio, imagen, cantidad } = producto;
  return (
    <div className="cart__item">
      <div className="cart__imageContainer">
        <img
          className="cart__image"
          src={`http://192.168.0.6:5000/${imagen}`}
        />
      </div>
      <div className="cart__nameContainer">
        <span className="cart__name">{nombre}</span>
      </div>
      <div className="cart__priceContainer">
        <span className="cart__price">{`${precio}$`}</span>
      </div>
      <div className="cart__contContainer">
        <div className="cart__contMediumContainer">
          <span className="cart__cont">{`Cantidad: ${cantidad}`}</span>
        </div>
      </div>
    </div>
  );
};
