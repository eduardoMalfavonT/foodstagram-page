/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { CRMContext } from "../Context/index";
import { saveIdUsuario } from "../Redux/Actions/actionUsuarios";
import clienteAxios from "../Redux/Api/peticionesApi";

const LoginComponent = ({ history }) => {
  const dispatch = useDispatch();
  const [auth, setAuth] = useContext(CRMContext);
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };
  const login = async (e) => {
    e.preventDefault();
    // Autenticar el usuario
    try {
      const respuesta = await clienteAxios.post("/login", usuario);
      //extraer el token y colocarlo en localStorage
      const { token, id } = respuesta.data;
      localStorage.setItem("token", token);
      dispatch(saveIdUsuario(id));
      //Colocarlo en el state
      setAuth({ token, auth: true });
      //Lanzamos la alerta
      Swal.fire("Login correcto", "Has iniciado Sesion", "success");
      //redireccionar
      history.push("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        type: "error",
        icon: "error",
        title: "Hubi un error",
        text: error.response.data.mensaje,
      });
    }
  };
  return (
    <div className="login__item">
      <div className="login__titleContainer">
        <span className="login__title">Iniciar sesion en Foodstagram</span>
      </div>
      <form className="login__form" onSubmit={login}>
        <div className="login__formComponent">
          <label htmlFor="email" className="login__form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="login__form-input"
            onChange={handleChange}
            required
          />
        </div>
        <div className="login__formComponent">
          <label htmlFor="password" className="login__form-label">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="login__form-input"
            onChange={handleChange}
            required
          />
        </div>
        <div className="login__formComponent">
          <button className="login__button">Iniciar Sesion</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(LoginComponent);
