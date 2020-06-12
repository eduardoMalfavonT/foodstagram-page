import {
  SEARCH_PEDIDOS_START,
  SEARCH_PEDIDOS_COMPLETE,
  SEARCH_PEDIDOS_ERROR,
} from "../Consts/constsPedido";

const initialState = {
  Pedidos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_PEDIDOS_START:
      return { ...state, isLoading: true };
    case SEARCH_PEDIDOS_ERROR:
      return { ...state, isLoading: false, Pedidos: null };
    case SEARCH_PEDIDOS_COMPLETE:
      return {
        ...state,
        isLoading: false,
        Pedidos: action.resultado,
      };
    default:
      return state;
  }
}
