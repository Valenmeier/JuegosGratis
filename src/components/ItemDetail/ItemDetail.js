import React, { useEffect, useState,useContext } from "react";
import "./item.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";


export const ItemDetail = ({ item }) => {

  const {addItem}=useContext(CartContext);

  let { name, description, price, image, stock } = item;
  const [contador, setContador] = useState(1);

  useEffect(() => {
    setPrecio(Number(price.slice(1)) * contador);
  }, [contador]);

  const [precio, setPrecio] = useState(Number(price.slice(1)));

  let fondo = {
    backgroundImage: `url(${image})`,
  };
  let vincular = (dato) => {
    setContador(dato);
  };
  let añadirAlCarrito=(dato)=>{
    addItem(item,dato)
  }

  return (
    <section className="ContenedorDeSeccion" style={fondo}>
      <section className="detalleDelItem">
        <div className="imagenDetalle">
          <img src={image} alt="tower" />
          <div className="precioDetalle">
            <h5>Precio:</h5>
            <h5>${precio}</h5>
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
            <ItemCount
              stock={stock}
              initial={1}
              price={price}
              product={name}
              vincular={vincular}
              añadirAlCarrito={añadirAlCarrito}
            />
          </div>
        </div>
      </section>
    </section>
  );
};
