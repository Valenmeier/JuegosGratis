import React, { useState } from "react";
import "./item.css";
import { Link } from "react-router-dom";

export const Item = ({ dato, i }) => {
  const { id, name, image, rate } = dato;
  let valorFinal = rate,
    velocidad = 50;

  let [newrate, setRate] = useState(0);
  let color = `#f00`;

  if (newrate < valorFinal) {
    setTimeout(() => {
      setRate(newrate + 1);
    }, velocidad);
  }
  if (newrate > 40 && newrate < 90) {
    color = "#f4ed25";
  } else if (newrate >= 90) {
    color = "#80b918";
  }

  const nuevoEstilo = {
    background: `conic-gradient(${color} ${newrate * 3.6}deg,#000 1deg)`,
  };
  const nuevoColor = {
    color: `${color}`,
  };
  let activarInformacion = () => {
    let informacion = document.querySelectorAll(".contenedorInformacion");
    informacion[i].classList.toggle("activarInformacion");
  };
  let desactivarInformacion = () => {
    let informacion = document.querySelectorAll(".contenedorInformacion");
    informacion[i].classList.remove("activarInformacion");
  };

  return (
    <div
      className="carta"
      onMouseOver={activarInformacion}
      onMouseOut={desactivarInformacion}
    >
      <img src={image} alt={name} />
      <div className="contenedorCarta">
        <div className="cuadrado" style={nuevoEstilo}>
          <div className="porcentaje">
            <h4 style={nuevoColor}>{newrate}%</h4>
          </div>
        </div>
      </div>
      <div className="contenedorInformacion">
        <h4>{name}</h4>
        <div className="contenedorBotones">
          <Link to={`/detalles/${id}`}>
            <button className="botonInformacion">Más información</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
