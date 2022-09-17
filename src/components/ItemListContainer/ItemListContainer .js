import React from "react";
import "./estilosMain.css";
import { data } from "./mock-data";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { valor } = useParams();
  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    setItems([]);
    getData.then((res) => {
      if (valor == `gratis`) {
        let juegosGratis = res.filter((juego) => juego.price.slice(1) == 0);
        setItems(juegosGratis);
      } else if (valor == `pagos`) {
        let juegosPagos = res.filter((juego) => juego.price.slice(1) > 0);
        setItems(juegosPagos);
      } else {
        setItems(res);
      }
    });
  }, [valor]);

  return (
    <main className="contenedorMain">
      {items.length > 0 ? <ItemList datos={items} /> : <Loader text="juegos" />}
    </main>
  );
};
