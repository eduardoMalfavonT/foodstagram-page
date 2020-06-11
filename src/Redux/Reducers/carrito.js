import { AGREGAR_AL_CARRITO } from "../Consts/constsCarrito";

const initialState = {
  Carrito: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_AL_CARRITO:
      return {
        ...state,
        Carrito: [
          ...state.Carrito,
          {
            id: action.value._id,
            cantidad: action.value.cantidad,
            precio: action.value.precio,
          },
        ],
      };
    default:
      return state;
  }
}
