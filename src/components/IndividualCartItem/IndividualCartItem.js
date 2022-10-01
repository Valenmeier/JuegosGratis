import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Swal from "sweetalert2";
import "./estilos.css";

export const IndividualCartItem = ({ item }) => {
  const contexto = useContext(CartContext);
  let [cantidad, setCantidad] = useState(item.quantity);
  useEffect(() => {
    contexto.cambiarCantidad(item, cantidad);
  }, [cantidad]);
  let aumentarCantidad = () => {
    if (cantidad >= item.stock) {
      Swal.fire({
        title: `No hay suficiente stock del producto seleccionado.`,
        customClass: {
          popup: "ModalCompra",
          title: "textoModal",
          confirmButton: "botonConfirmacion",
        },
      });
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
  let eliminarItem = () => {
    contexto.removeItem(item.id);
  };
  return (
    <div className="productosEnCarrito" key={item.id}>
      <img src={item.image} alt={item.name} />
      <div className="title">
        <h3>{item.name}</h3>
      </div>
      <button
        onClick={eliminarItem}
        title="Eliminar del carrito"
        className="eliminar"
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
