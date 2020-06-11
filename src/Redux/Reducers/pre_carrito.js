import { INLCUDE_PRE_CART, DELETE_PRE_CART } from "../Consts/constsPreCarrito";

const initialState = {
  preCarrito: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INLCUDE_PRE_CART:
      return { ...state, preCarrito: [...state.preCarrito, action.value] };
    case DELETE_PRE_CART:
      return { ...state, preCarrito: [] };
    default:
      return state;
  }
}
