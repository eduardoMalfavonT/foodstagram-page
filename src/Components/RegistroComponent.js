import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import clienteAxios from "../Redux/Api/peticionesApi";

const RegistroComponent = ({ history }) => {
  const [usuario, setUsuario] = useState({
    nombres: "",
    apellidos: "",
    direccion: "",
    email: "",
    password: "",
  });
  const handleChangeUsuario = (event) => {
    setUsuario({ ...usuario, [event.target.name]: event.target.value });
  };
  const registerUsuario = async (event) => {
    event.preventDefault();
    await clienteAxios.post("/cliente/nuevoCliente", usuario).then((res) => {
      //Validar si hay errores de mongo
      if (res.data.code === 11000) {
        console.log("Error de duplicado de mongo");
        Swal.fire({
          icon: "error",
          title: "Hubo un error",
          text: "Ese usuario ya esta registrado",
          showConfirmButton: true,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: res.data.mensaje,
          showConfirmButton: true,
        });
      }
      history.push("/");
    });
  };
  return (
    <div className="registro__item">
      <div className="registro__titleContainer">
        <span className="registro__title">Registrate en Foodstagram</span>
      </div>
      <form className="registro__form" onSubmit={registerUsuario}>
        <div className="registro__formComponent">
          <label htmlFor="nombres" className="registro__form-label">
            Nombres:
          </label>
          <input
            type="text"
            id="nombres"
            name="nombres"
            className="registro__form-input"
            onChange={handleChangeUsuario}
            required
          />
        </div>
        <div className="registro__formComponent">
          <label htmlFor="apellidos" className="registro__form-label">
            Apellidos:
          </label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            className="registro__form-input"
            onChange={handleChangeUsuario}
            required
          />
        </div>
        <div className="registro__formComponent">
          <label htmlFor="direccion" className="registro__form-label">
            Direccion:
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            className="registro__form-input"
            onChange={handleChangeUsuario}
            required
          />
        </div>
        <div className="registro__formComponent">
          <label htmlFor="email" className="registro__form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="registro__form-input"
            onChange={handleChangeUsuario}
            required
          />
        </div>
        <div className="registro__formComponent">
          <label htmlFor="password" className="registro__form-label">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="registro__form-input"
            onChange={handleChangeUsuario}
            required
          />
        </div>
        <div className="registro__formComponent">
          <button className="registro__button">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(RegistroComponent);
