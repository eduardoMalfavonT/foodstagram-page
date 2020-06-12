/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { withRouter } from "react-router-dom";
import clienteAxios from "../Redux/Api/peticionesApi";
import sprite from "../images/sprite.svg";

const PedidosItem = ({ pedido, history }) => {
  const eliminarPedido = async (idVenta) => {
    await clienteAxios.delete(`/venta/${idVenta}`);
    history.push("/pedidos");
  };
  return (
    <div className="pedidos__item">
      <div className="pedidos__productosContainer">
        {pedido.carrito.map((producto, index) => (
          <div key={index} className="pedidos__producto">
            <div className="pedidos__imageContainer">
              <img
                className="pedidos__image"
                src={`http://192.168.0.6:5000/${producto.producto.imagen}`}
              />
            </div>
            <div className="pedidos__nombreContainer">
              <span className="pedidos__nombre">
                {producto.producto.nombre}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="pedidos__buttonContainer">
        <span className="pedidos__total">
          Total a pagar por pedido:{` ${pedido.total}$`}
        </span>
        <button
          className="pedidos__button"
          onClick={() => eliminarPedido(pedido._id)}
        >
          <svg className="pedidos__buttonEliminar-icon">
            <use xlinkHref={`${sprite}#icon-trash3`} />
          </svg>
          Eliminar pedido
        </button>
      </div>
    </div>
  );
};
export default withRouter(PedidosItem);
