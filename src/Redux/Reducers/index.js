import { combineReducers } from "redux";

import productos from "./productos";
//!Crear reducers para ventas y usuarios
const rootReducer = combineReducers({
  productos,
});
export default rootReducer;
