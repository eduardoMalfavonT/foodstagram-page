import { combineReducers } from "redux";

import productos from "./productos";
import preCarrito from "./pre_carrito";
import carrito from "./carrito";
//!Crear reducers para ventas y usuarios
const rootReducer = combineReducers({
  productos,
  preCarrito,
  carrito,
});
export default rootReducer;
