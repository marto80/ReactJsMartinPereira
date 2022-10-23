import React from "react";
import { CarWidget } from "../CarWidget";
import './estilos.css';

const NavBar = () => {
  return (
    <ul>
      <li>
        <a href="#inicio">Inicio</a>
      </li>
      <li>
        <a href="#noticias">Cursos</a>
      </li>
      <li>
        <a href="#contacto">Contacto</a>
      </li>
      <li>
        <a href="#nosotros">Nosotros</a>
      </li>
      <CarWidget/>
    </ul>
  );
};

export default NavBar;
