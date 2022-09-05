import React from "react";
import "./estilosMain.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { data } from "./mock-data";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { Loader } from "../Loader/Loader";

//* Esto es transitorio, ItemDetailContainer solamente se llamara/utilizara al enviarle datos confirmando el botón
import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer'



export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getData.then((res) => {
      setItems(res);
    });
  }, []);

  return (
    <main className="contenedorMain">
      {items.length > 0 ?    
      //<ItemList datos={items} />
      <ItemDetailContainer/>  : <Loader text="inicio"/>}
    </main>
  );
};
