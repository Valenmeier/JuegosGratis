import React from "react";
import "./itemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import { useState, useEffect } from "react";
import { data } from "../ItemListContainer/mock-data";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { idJuego } = useParams();
  const [datos, setDatos] = useState(undefined);
  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getData.then((res) => {
      let detalle = res.find((detalle) => detalle.id == idJuego);
      setDatos(detalle);
    });
  }, []);

  return (
    <section>
      {datos ? (
        <ItemDetail key={datos.id} item={datos} />
      ) : (
        <Loader text="detalles" />
      )}
    </section>
  );
};
