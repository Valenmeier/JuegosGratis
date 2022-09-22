import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./estilos.css";

export const IndividualCartItem = ({ item, i }) => {
  const contexto = useContext(CartContext);
  let [cantidad, setCantidad] = useState(item.quantity);
  useEffect(() => {
   contexto.addItem(item,cantidad)
  }, [cantidad]);

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
        <h4>$ {cantidad * Number(item.price.slice(1))}</h4>
      </div>
    </div>
  );
};
