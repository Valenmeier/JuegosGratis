import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./estilos.css";

export const IndividualCartItem = ({ item, i }) => {
  const contexto = useContext(CartContext)
  let [cantidad, setCantidad] = useState(item.quantity);
  let [precio, setPrecio] = useState(cantidad * Number(item.price.slice(1)));
  useEffect(() => {
    setPrecio(cantidad * Number(item.price.slice(1)));
  }, [cantidad]);
  useEffect(() => {
    contexto.price[0]
      ? (contexto.price[i] = precio)
      : contexto.price.push(precio);
      let precioTotal=(contexto.price).reduce((acc,item)=>acc+item,0)
      contexto.getTotalPrice(precioTotal)
  }, [precio]);
  let aumentarCantidad = () => {
    if (cantidad >= item.stock) {
      alert(`No hay suficiente stock`);
    } else {
      setCantidad(cantidad + 1);
    }
  };
  let disminuirCantidad = () => {
    if (cantidad <= 1) {
      setCantidad(1);
    } else {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div className="productosEnCarrito" key={i}>
      <img src={item.image} alt={item.name} />
      <div className="title">
        <h3>{item.name}</h3>
      </div>
      <button
        onClick={() => {
          let nuevaListaDePrecios=contexto.price.splice(i,1)
          contexto.price=nuevaListaDePrecios
          contexto.removeItem(item.id);
        }}
        title="Eliminar del carrito"
      >
        <BsFillTrashFill />
      </button>
      <div className="cantidadYPrecio">
        <div className="cantidadAumento">
          <h4>
            Cantidad solicitada={" "}
            <GoTriangleDown className="disminuir" onClick={disminuirCantidad} />
            {cantidad}
            <GoTriangleUp onClick={aumentarCantidad} />{" "}
          </h4>
        </div>
        <h4>Precio unitario={item.price}</h4>
      </div>
      <div className="stockTotal">
        <h4>Stock disponible = {item.stock}</h4>
      </div>
      <div className="precioTotalItem">
        <h4>$ {precio}</h4>
      </div>
    </div>
  );
};
