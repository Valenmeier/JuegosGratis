import React, { useState } from "react";
import "./item.css";


export const Item = ({ dato }) => {
  const { id, name, description, price, image, stock, rate } = dato;
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
    color = "#0f0";
  }


  const nuevoEstilo = {
    background: `conic-gradient(${color} ${newrate * 3.6}deg,#000 1deg)`,
  };

  return (
    <div className="carta">
      <img src={image} alt={name} />
      <div className="contenedorCarta">
        <div className="cuadrado" style={nuevoEstilo}>
          <div className="porcentaje">
            <h4>{newrate}%</h4>
          </div>
        </div>
      </div>
      <div className="contenedorInformacion">
        <h4>{name}</h4>
        <div className="contenedorBotones">
          <button>Más información</button>
          <button>Jugar</button>
        </div>
      </div>
    </div>
  );
};
