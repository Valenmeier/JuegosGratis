import React from "react";
import "./itemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";

//* Esto es transitorio, hasta que los datos los envien los botones
import { data } from "../ItemListContainer/mock-data";

// ----------

export const ItemDetailContainer = () => {
  let datos = data[0]; //?--> Esto también se cambiará, ya que los datos van a venir de prop
  let fondo = {
    backgroundImage:`url(${datos.image})`
  }
  
  return (
    <section className="ContenedorDeSeccion" style={fondo}>
      {datos.id >= 0 ? <ItemDetail item={datos} /> : <Loader text="Juego"/>}
    </section>
  );
};
