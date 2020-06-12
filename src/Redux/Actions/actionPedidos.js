import { SEARCH_PEDIDOS_START } from "../Consts/constsPedido";

export const searchPedidos = (value) => ({
  type: SEARCH_PEDIDOS_START,
  value,
});
