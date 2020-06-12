/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//TODO uso de acciones para buscar los productos
import { searchPedidos } from "../Redux/Actions/actionPedidos";
//TODO uso de selectores para recuperar los productos
import { getPedidos } from "../Redux/Selectors/pedidoSelector";
//TODO Implementacion del componente
import PedidosItem from "../Components/PedidosItem";

export default () => {
  const idCliente = "5ed7ea6ca8f13e3ad4586f4f";
  const dispatch = useDispatch();
  const pedidos = useSelector((state) => getPedidos(state));
  useEffect(() => {
    dispatch(searchPedidos(idCliente));
  }, [dispatch, pedidos]);
  return (
    <div className="mainContainer">
      <div className="main">
        <div className="pedidos">
          {pedidos.length > 0 &&
            pedidos.map((pedido, index) => (
              <PedidosItem key={index} pedido={pedido} />
            ))}
        </div>
      </div>
    </div>
  );
};
