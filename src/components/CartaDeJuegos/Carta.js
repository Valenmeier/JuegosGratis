import React from "react";
import "./carta.css";

export const CartaDeJuegos = () => {
  return (
    <div className="carta">
      <img src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/04/15701769662337.jpg" alt="" />
      <div className="contenedorCarta">
        <div className="cuadrado">
          <div className="porcentaje">
            <h4>80%</h4>
          </div>
        </div>
      </div>
      <div className="contenedorInformacion">
        <h4>CALL OF DUTY</h4>
        <div className="contenedorBotones">
          <button>Más información</button>
          <button>Jugar</button>
        </div>
      </div>
    </div>
  );
};
