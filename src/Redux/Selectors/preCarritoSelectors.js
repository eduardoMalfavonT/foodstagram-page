import { get } from "lodash";

export const getPreCarrito = (state) => get(state, "preCarrito.preCarrito");
