import { SAVE_ID_USUARIO } from "../Consts/constsUsuario";

const initialState = {
  id: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SAVE_ID_USUARIO:
      return { ...state, id: action.value };
    default:
      return state;
  }
}
