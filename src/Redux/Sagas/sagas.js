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
import {
  SEARCH_PEDIDOS_START,
  SEARCH_PEDIDOS_COMPLETE,
  SEARCH_PEDIDOS_ERROR,
} from "../Consts/constsPedido";

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
function* searchBurgers() {
  try {
    const buscando = async () => {
      const productos = await clienteAxios.get("/productos/burger");
      return productos.data;
    };
    const resultado = yield buscando();
    yield put({ type: SEARCH_BURGER_PRODUCTS_COMPLETE, resultado });
  } catch (error) {
    yield put({ type: SEARCH_BURGER_PRODUCTS_ERROR, error });
  }
}
function* searchPizzas() {
  try {
    const buscando = async () => {
      const productos = await clienteAxios.get("/productos/pizza");
      return productos.data;
    };
    const resultado = yield buscando();
    yield put({ type: SEARCH_PIZZA_PRODUCTS_COMPLETE, resultado });
  } catch (error) {
    yield put({ type: SEARCH_PIZZA_PRODUCTS_ERROR, error });
  }
}
function* searchHotDogs() {
  try {
    const buscando = async () => {
      const productos = await clienteAxios.get("/productos/hotdog");
      return productos.data;
    };
    const resultado = yield buscando();
    yield put({ type: SEARCH_HOTDOG_PRODUCTS_COMPLETE, resultado });
  } catch (error) {
    yield put({ type: SEARCH_HOTDOG_PRODUCTS_ERROR, error });
  }
}
function* searchDrinks() {
  try {
    const buscando = async () => {
      const productos = await clienteAxios.get("/productos/drink");
      return productos.data;
    };
    const resultado = yield buscando();
    yield put({ type: SEARCH_DRINKS_PRODUCTS_COMPLETE, resultado });
  } catch (error) {
    yield put({ type: SEARCH_DRINKS_PRODUCTS_ERROR, error });
  }
}
function* searchProductById({ value }) {
  try {
    const buscando = async () => {
      const productos = await clienteAxios.get(`/producto/${value.idProducto}`);
      return productos.data;
    };
    const resultado = yield buscando();
    yield put({ type: SEARCH_PRODUCT_BY_ID_COMPLETE, resultado });
  } catch (error) {
    yield put({ type: SEARCH_PRODUCT_BY_ID_ERROR, error });
  }
}

function* searchPedidosCliente({ value }) {
  try {
    const buscando = async () => {
      const pedidos = await clienteAxios.get(`/ventas/${value}`);
      return pedidos.data;
    };
    const resultado = yield buscando();
    yield put({ type: SEARCH_PEDIDOS_COMPLETE, resultado });
  } catch (error) {
    yield put({ type: SEARCH_PEDIDOS_ERROR, error });
  }
}
export default function* rootSaga() {
  yield takeLatest(SEARCH_ALL_PRODUCTS_START, searchProductos);
  yield takeLatest(SEARCH_BURGER_PRODUCTS_START, searchBurgers);
  yield takeLatest(SEARCH_PIZZA_PRODUCTS_START, searchPizzas);
  yield takeLatest(SEARCH_HOTDOG_PRODUCTS_START, searchHotDogs);
  yield takeLatest(SEARCH_DRINKS_PRODUCTS_START, searchDrinks);
  yield takeLatest(SEARCH_PRODUCT_BY_ID_START, searchProductById);
  yield takeLatest(SEARCH_PEDIDOS_START, searchPedidosCliente);
}
