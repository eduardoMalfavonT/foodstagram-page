import { get } from "lodash";
export const getIdUsuario = (state) => get(state, "usuario.id");
