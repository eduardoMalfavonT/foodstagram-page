import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
//TODO se llaman las acciones
import { deletePreCart } from "../Redux/Actions/actionPreCarrito";
//TODO uso de selectores para recuperar los productos
import { getPreCarrito } from "../Redux/Selectors/preCarritoSelectors";
//TODO Implementacion del componente
import CarritoItem from "../Components/CarritoItem";
//TODO implementamos cliente axios para realizar la peticion tipo post para una nueva venta
import clienteAxios from "../Redux/Api/peticionesApi";
import Swal from "sweetalert2";
import sprite from "../images/sprite.svg";

const Carrito = ({ history }) => {
  const idCliente = "5ed7ea6ca8f13e3ad4586f4f";
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
  const realizarPedido = async (idCliente) => {
    const ids = [];
    const cantidades = [];
    products.map((product, index) => (ids[index] = product._id));
    products.map((product, index) => (cantidades[index] = product.cantidad));
    let registroVenta = {
      cliente: `${idCliente}`,
      carrito: ids.map((ido, index) => ({
        producto: ido,
        cantidad: cantidades[index],
      })),
      total: total,
    };
    const res = await clienteAxios.post("/venta/nuevaVenta", registroVenta);
    if (res.status === 200) {
      //alerta ok
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: res.data.mensaje,
      });
    } else {
      //alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Vuelva a intentarlo",
      });
    }
    //Redireccionar
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
              <button
                className="cart__button"
                onClick={() => realizarPedido(idCliente)}
              >
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
