import React, { useState } from "react";
import { Link } from "react-router-dom";
import Routers from "../../helper/Routers";

import useAlert from "../../hooks/useAlert";
import useUser from "../../hooks/useUser";
import Alert from "../Layout/Alert";

const SignUp = () => {
  const { msg, setmsg } = useState('');
  const { alert, setAlert } = useAlert();
  const { hasLoginError } = useUser();
  const [datos, setDatos] = useState({
    name: "",
    mail: "",
    password: "",
    confirmacion: "",
  });

  const { name, mail, password, confirmacion } = datos;

  const onchange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (mail.trim() === "" || name.trim() === "" || password.trim() === "") {
      setAlert(true);
      setmsg("Todos los campos son obligatorios");
    }
    if (password.trim() !== confirmacion.trim()) {
      setAlert(true);
      setmsg("Las contraseñas ingresadas no coinciden");
    }
  };
  return (
    <>
      <div className="content-login">
        <div className="content-form">
          <form onSubmit={onsubmit}>
            <p className="logo">
              tu<b>manga</b>
              <i>online</i>
            </p>
            <p className="acceder">Crear tu cuenta de Manga</p>
            <Link to={Routers.home}>Ir a Lector Manga</Link>
            <div className="input">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Nombre completo"
                value={name}
                onChange={onchange}
              />
            </div>

            <div className="input">
              <label htmlFor="mail">Email</label>
              <input
                type="mail"
                name="mail"
                id="mail"
                placeholder="Correo electronico"
                value={mail}
                onChange={onchange}
              />
            </div>

            <div class="contra">
              <div className="input">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={onchange}
                />
              </div>
              <div className="input">
                <label htmlFor="confirmacion">Confirmación</label>
                <input
                  type="password"
                  name="confirmacion"
                  id="confirmacion"
                  placeholder="Confirmar contraseña"
                  value={confirmacion}
                  onChange={onchange}
                />
              </div>
            </div>
            <p>
              Usa 8 o más caracteres con una combinación de letras, números y
              símbolos
            </p>
            <div className="link-footer">
              <Link to={Routers.login} className="logup">
                Acceder a tu cuenta
              </Link>
              <input type="submit" value="Crear" />
            </div>
            {alert && <Alert msg={msg} />}
            {hasLoginError && <Alert msg={msg} />}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
