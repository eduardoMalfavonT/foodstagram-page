import { get } from "lodash";

export const foodSelector = (state) => get(state, "productos.productoResult");
export const burgersSelector = (state) => get(state, "productos.burgerResults");
export const pizzasSelector = (state) => get(state, "productos.pizzaResults");
export const hotdogsSelector = (state) => get(state, "productos.hotdogResults");
export const drinksSelector = (state) => get(state, "productos.drinkResults");
export const productSelector = (state) =>
  get(state, "productos.productoResult");
