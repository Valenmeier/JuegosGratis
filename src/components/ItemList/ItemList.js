import React from "react";
import { Item } from "../Item/Item";
import "./itemlist.css"

export const ItemList = ( {datos} ) => {
  return (
    <section className="contenedorCartasInicio">
      {
        datos.map((dato)=>{   
           return <Item key={dato.id} name={dato.name} image={dato.image} rate={dato.rate}/>
        })
      }
    </section>
  );
};
