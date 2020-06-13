/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
//TODO uso de acciones para buscar los productos
import { searchPedidos } from "../Redux/Actions/actionPedidos";
import { getIdUsuario } from "../Redux/Selectors/usuarioSelector";
//TODO uso de selectores para recuperar los productos
import { getPedidos } from "../Redux/Selectors/pedidoSelector";
//TODO Implementacion del componente
import PedidosItem from "../Components/PedidosItem";
import { CRMContext } from "../Context/index";

const Pedidos = ({ history }) => {
  const dispatch = useDispatch();
  const [auth] = useContext(CRMContext);
  const idCliente = useSelector((state) => getIdUsuario(state));
  const pedidos = useSelector((state) => getPedidos(state));
  useEffect(() => {
    dispatch(searchPedidos(idCliente));
    if (auth.token === "") {
      history.push("/login");
    }
  }, [dispatch, pedidos]);
  if (!auth.auth) {
    history.push("/login");
  }
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

export default withRouter(Pedidos);
