import { combineReducers } from "redux";

import productos from "./productos";
import preCarrito from "./pre_carrito";
import pedido from "./pedidos";
const rootReducer = combineReducers({
  productos,
  preCarrito,
  pedido,
});
export default rootReducer;
