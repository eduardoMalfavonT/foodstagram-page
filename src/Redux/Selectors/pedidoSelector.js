import { get } from "lodash";

export const getPedidos = (state) => get(state, "pedido.Pedidos");
