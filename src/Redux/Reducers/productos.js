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

const initialState = {
  foodResults: {},
  burgerResults: {},
  pizzaResults: {},
  hotdogResults: {},
  drinkResults: {},
  productoResult: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    //? Reducer para la busqueda de todos los productos
    case SEARCH_ALL_PRODUCTS_START:
      return { ...state, isLoading: true };
    case SEARCH_ALL_PRODUCTS_ERROR:
      return { ...state, isLoading: false, productoResult: null };
    case SEARCH_ALL_PRODUCTS_COMPLETE:
      return {
        ...state,
        isLoading: false,
        productoResult: action.resultado,
      };
    //? Reducer para la busqueda de hamburgesas
    //?Reducer para la busqueda de pizzas
    //?Reducer para la busqueda de hot dogs
    //?Reducer para la busqueda de vevidas
    default:
      return state;
  }
}
