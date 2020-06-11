/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import { includePreCart } from "../Redux/Actions/actionPreCarrito";
import sprite from "../images/sprite.svg";

const DetailsComponent = ({ producto, history }) => {
  const dispatch = useDispatch();
  const [cantidad, setCantidad] = useState(0);
  const { nombre, precio, ingredientes, imagen, direccion } = producto;
  const productoCantidad = {
    nombre,
    precio,
    ingredientes,
    imagen,
    direccion,
    cantidad,
  };
  const handleCantidad = (event) => {
    setCantidad(event.target.value);
  };
  const pasarACarrito = () => {
    if (cantidad > 0 && cantidad < 21) {
      dispatch(includePreCart(productoCantidad));
      history.push("/cart");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>",
      });
    }
  };
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
          ingredientes.map((ingrediente, index) => (
            <span key={index} className="details__ingredient">
              {ingrediente}
            </span>
          ))}
      </div>
      <div className="details__directionContainer">
        <span className="details__direction">{direccion}</span>
      </div>
      <div className="details__priceContainer">
        <span className="details__price">{`${precio}$`}</span>
      </div>
      <form className="details__buttonContainer" onSubmit={pasarACarrito}>
        <div className="details__cantidadContainer">
          <label htmlFor="cantidad" className="details__label">
            Cantidad:
          </label>
          <input
            className="details__input"
            onChange={handleCantidad}
            type="number"
            name="cantidad"
            id="cantidad"
            required={true}
            min={1}
          />
        </div>
        <button className="details__button" type="submit">
          <svg className="details__icon">
            <use xlinkHref={`${sprite}#icon-shopping-cart1`} />
          </svg>
          Incluir al carrito
        </button>
      </form>
    </div>
  );
};

export default withRouter(DetailsComponent);
