import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
//TODO se llaman las acciones
import { deletePreCart } from "../Redux/Actions/actionPreCarrito";
//TODO uso de selectores para recuperar los productos
import { getPreCarrito } from "../Redux/Selectors/preCarritoSelectors";
//TODO Implementacion del componente
import CarritoItem from "../Components/CarritoItem";
import sprite from "../images/sprite.svg";

const Carrito = ({ history }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => getPreCarrito(state));
  let total = 0;
  products.map((product) => {
    return (total += product.precio * product.cantidad);
  });
  const eliminarCarrito = () => {
    dispatch(deletePreCart());
    history.push("/");
  };
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="cart">
          {products.length > 0 &&
            products.map((product, index) => (
              <CarritoItem key={index} producto={product} />
            ))}
          {products.length > 0 && (
            <div className="cart__totalContainer">
              <span className="cart__total">Total a pagar {`${total}`}$</span>
              <button
                className="cart__buttonEliminar"
                onClick={eliminarCarrito}
              >
                <svg className="cart__buttonEliminar-icon">
                  <use xlinkHref={`${sprite}#icon-trash3`} />
                </svg>
                Eliminar carrito
              </button>
              <button className="cart__button">
                <svg className="cart__button-icon">
                  <use xlinkHref={`${sprite}#icon-banknote`} />
                </svg>
                Realizar pedido
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Carrito);
