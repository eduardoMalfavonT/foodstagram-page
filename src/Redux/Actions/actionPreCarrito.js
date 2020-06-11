import { INLCUDE_PRE_CART, DELETE_PRE_CART } from "../Consts/constsPreCarrito";

export const includePreCart = (value) => ({
  type: INLCUDE_PRE_CART,
  value,
});

export const deletePreCart = () => ({
  type: DELETE_PRE_CART,
});
