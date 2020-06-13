import { combineReducers } from "redux";

import productos from "./productos";
import preCarrito from "./pre_carrito";
import pedido from "./pedidos";
import usuario from "./usuario";
const rootReducer = combineReducers({
  productos,
  preCarrito,
  pedido,
  usuario,
});
export default rootReducer;
