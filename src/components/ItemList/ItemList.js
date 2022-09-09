import React from "react";
import { Item } from "../Item/Item";
import "./itemlist.css";

export const ItemList = ({ datos }) => {
  return (
    <>
      <section className="contenedorCartasInicio">
        <h4 className="Titulo">Nuestros juegos:</h4>
        {datos.map((dato) => {
          return (
            <Item
              key={dato.id}
              dato={dato}
            />
          );
        })}
      </section>
    </>
  );
};
