import { put, takeLatest } from "redux-saga/effects";
import {
  SEARCH_ALL_PRODUCTS_START,
  SEARCH_ALL_PRODUCTS_ERROR,
  SEARCH_ALL_PRODUCTS_COMPLETE,
  SEARCH_BURGER_PRODUCTS_START,
  SEARCH_BURGER_PRODUCTS_ERROR,
  SEARCH_BURGER_PRODUCTS_COMPLETE,
  SEARCH_PIZZA_PRODUCTS_START,
  SEARCH_PIZZA_PRODUCTS_ERROR,
  SEARCH_PIZZA_PRODUCTS_COMPLETE,
  SEARCH_HOTDOG_PRODUCTS_START,
  SEARCH_HOTDOG_PRODUCTS_ERROR,
  SEARCH_HOTDOG_PRODUCTS_COMPLETE,
  SEARCH_DRINKS_PRODUCTS_START,
  SEARCH_DRINKS_PRODUCTS_ERROR,
  SEARCH_DRINKS_PRODUCTS_COMPLETE,
  SEARCH_PRODUCT_BY_ID_START,
  SEARCH_PRODUCT_BY_ID_ERROR,
  SEARCH_PRODUCT_BY_ID_COMPLETE,
} from "../Consts/constsProductos";

import clienteAxios from "../Api/peticionesApi";

function* searchProductos() {
  try {
    const buscando = async () => {
      const productos = await clienteAxios.get("/productos");
      return productos.data;
    };
    const resultado = yield buscando();
    yield put({ type: SEARCH_ALL_PRODUCTS_COMPLETE, resultado });
  } catch (error) {
    yield put({ type: SEARCH_ALL_PRODUCTS_ERROR, error });
  }
}
//!Crear saga para hamburgesas
//!Crear saga para pizzas
//!Crear saga para hot dogs
//!Crear saga para vevidas
//!Crear saga para busqueda por id
export default function* rootSaga() {
  yield takeLatest(SEARCH_ALL_PRODUCTS_START, searchProductos);
}
