import React from "react";
import "./itemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import { useState, useEffect } from "react";
import { data } from "../ItemListContainer/mock-data";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const {idJuego}=useParams()
  const [datos, setDatos] = useState([]);
  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getData.then((res) => {
      let detalle=res.filter((detail)=>detail.id==idJuego)
      setDatos(detalle);
    });
  }, []);

  return (
    <section>
      {datos.length > 0 ? (
        datos.map((dato) => {
          return <ItemDetail key={dato.id} item={dato} />;
        })
      ) : (
        <Loader text="detalles" />
      )}
    </section>
  );
};
