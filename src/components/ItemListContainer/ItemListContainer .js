import React from "react";
import "./estilosMain.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { db } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { valor } = useParams();

  useEffect(() => {
    setItems([]);
    const queryRef = !valor
      ? collection(db, "items")
      : query(collection(db, "items"), where("category", "==", valor));
    getDocs(queryRef).then((response) => {
      const juegos = response.docs.map((doc) => {
        let nuevoItem = {
          id: doc.id,
          ...doc.data(),
        };
        return nuevoItem;
      });
      setItems(juegos);
    });
  }, [valor]);

  return (
    <main className="contenedorMain">
      {items.length > 0 ? <ItemList datos={items} /> : <Loader text="juegos" />}
    </main>
  );
};
