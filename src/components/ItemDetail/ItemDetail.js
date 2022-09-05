import React, { useState } from "react";
import "./item.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ item }) => {
  let { name, description, price, image, stock } = item;

  let [newPrice, setPrice] = useState(price);
  return (
    <section className="detalleDelItem">
      <div className="imagenDetalle">
        <img src={image} alt="tower" />
        <div className="precioDetalle">
          <h5>Precio:</h5>
          <h5>{newPrice}</h5>
        </div>
      </div>
      <div className="detallesDeProducto">
        <div className="detalleTituloDescripcion">
          <div className="tituloDetalle">
            <h5>{name}</h5>
          </div>
          <div className="descripcionDetalle">
            <p>{description}</p>
          </div>
        </div>
        <div className="contadorDetalle">
          <ItemCount stock={stock} initial={1} price={price} />
        </div>
      </div>
    </section>
  );
};
