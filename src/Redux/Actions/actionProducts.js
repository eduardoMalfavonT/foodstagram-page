import {
  SEARCH_ALL_PRODUCTS_START,
  SEARCH_BURGER_PRODUCTS_START,
  SEARCH_PIZZA_PRODUCTS_START,
  SEARCH_HOTDOG_PRODUCTS_START,
  SEARCH_DRINKS_PRODUCTS_START,
  SEARCH_PRODUCT_BY_ID_START,
} from "../Consts/constsProductos";

export const searchAllProducts = (value) => ({
  type: SEARCH_ALL_PRODUCTS_START,
  value,
});

export const searchBurgers = (value) => ({
  type: SEARCH_BURGER_PRODUCTS_START,
  value,
});

export const searchPizzas = (value) => ({
  type: SEARCH_PIZZA_PRODUCTS_START,
  value,
});

export const searchHotDogs = (value) => ({
  type: SEARCH_HOTDOG_PRODUCTS_START,
  value,
});

export const searchDrinks = (value) => ({
  type: SEARCH_DRINKS_PRODUCTS_START,
  value,
});

export const searchProductById = (value) => ({
  type: SEARCH_PRODUCT_BY_ID_START,
  value,
});
