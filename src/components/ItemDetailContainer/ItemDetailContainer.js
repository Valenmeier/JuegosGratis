import React from "react";
import "./itemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { idJuego } = useParams();
  const [datos, setDatos] = useState(undefined);

  useEffect(() => {
    const getData = async () => {
      const queryRef = doc(db, "items", idJuego);
      let response = await getDoc(queryRef);
      const nuevoItem = {
        id: response.id,
        ...response.data(),
      };
      setDatos(nuevoItem);
    };
    getData();
  }, [idJuego]);

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
