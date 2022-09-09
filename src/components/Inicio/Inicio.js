import React from "react";
import "./inicio.css";
import { Logo } from "../Logo/Logo";
import { Link } from "react-router-dom";

export const Inicio = () => {
  let cambiarColor = () => {
    let nuevoColor = document.querySelector(`.textoPresentacion`);
    nuevoColor.classList.toggle(`nuevoEstilo`);
  };
  return (
    <main className="presentacion">
      <img
        className="fondoInicio"
        src="https://i.pinimg.com/originals/5f/08/58/5f085809f2b711643e4eb4974cc03c0e.gif"
        alt="FondoInicio"
      />
      <div className="textoPresentacion">
        <Logo />

        <Link className="botonCatalogo" to={"./catalogo"}>
          <button onMouseEnter={cambiarColor} onMouseOut={cambiarColor}>
            Ir al catálogo
          </button>
        </Link>
      </div>
    </main>
  );
};
