import React from "react";
import "./itemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import { useState, useEffect } from "react";
import { data } from "../ItemListContainer/mock-data";

// ----------

export const ItemDetailContainer = () => {
  const [datos, setDatos] = useState([]);
  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getData.then((res) => {
      setDatos(res);
    });
  }, []);

  return (
    <section>
      {datos.length >0? datos.map((dato) => {
        return <ItemDetail key={dato.id} item={dato} />;
      }):<Loader text="detalles"/>}
    </section>
  );
};
