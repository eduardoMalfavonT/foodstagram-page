import axios from "axios";

const clienteAxios = axios.create({
  baseURL: "http://192.168.0.6:5000/",
});
export default clienteAxios;
