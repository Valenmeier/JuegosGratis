import React from "react";
import "./estilosMain.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { data } from "./mock-data";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";



export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  });

  useEffect(() => {
    getData.then((res)=>{
      setItems(res)
    })
  }, []);

  return (
    <main className="contenedorMain">
      <ItemList datos={items}/>
    </main>
  );
};
