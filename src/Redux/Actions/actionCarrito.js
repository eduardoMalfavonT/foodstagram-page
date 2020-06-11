import { AGREGAR_AL_CARRITO } from "../Consts/constsCarrito";

export const agregarAlCarrito = (value) => ({
  type: AGREGAR_AL_CARRITO,
  value,
});
