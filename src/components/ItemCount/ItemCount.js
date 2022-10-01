import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./counter.css";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const ItemCount = ({
  stock,
  initial,
  product,
  vincular,
  añadirAlCarrito,
  img,
}) => {
  const [añadio, setAñadio] = useState(false);
  const [contador, setContador] = useState(initial);
  const [stockTotal, onAdd] = useState(stock);
  useEffect(() => vincular(contador), [contador]);
  let suma = () => {
    if (contador >= stockTotal) {
      Swal.fire({
        title: `No hay suficiente stock`,
        customClass: {
          popup: "ModalCompra",
          title: "textoModal",
          confirmButton: "botonConfirmacion",
        },
      });
      return setContador(stockTotal);
    } else {
      setContador(contador + 1);
    }
  };
  let resta = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      setContador(contador);
    }
  };
  let manejoDeCarrito = () => {
    if ((stockTotal >= contador) & (stockTotal !== 0)) {
      let mensaje = `${product} x${contador} agregado al carrito`;
      let cantidadDisponible = Number(stockTotal) - contador;
      if (contador > cantidadDisponible) {
        onAdd(cantidadDisponible);
        setContador(cantidadDisponible);
        setAñadio(true);
      } else {
        onAdd(cantidadDisponible);
        setContador(contador);
        setAñadio(true);
      }
      añadirAlCarrito(contador);
      Swal.fire({
        title: `${mensaje}`,
        imageUrl: `${img}`,
        imageAlt: `${product}`,
        customClass: {
          popup: "ModalCompra",
          title: "textoModal",
          image: "imagenModal",
          confirmButton: "botonConfirmacion",
        },
      });
      setAñadio(true);
    } else {
      Swal.fire({
        title: `No hay suficiente stock`,
        customClass: {
          popup: "ModalCompra",
          title: "textoModal",
          confirmButton: "botonConfirmacion",
        },
      });
    }
  };

  return (
    <>
      <h5>Stock disponible:{stockTotal}</h5>
      <div className="counterContainer">
        <div className="aumentarYdisminuir">
          <button onClick={resta}>-</button>
          <div className="cantidad">
            <h3>{contador}</h3>
          </div>
          <button onClick={suma}>+</button>
        </div>
      </div>
      {añadio ? (
        <Link to="/cart" className=" agregarAlCarrito confirmarCompra">
          Finalizar Compra
        </Link>
      ) : (
        <>
          <button onClick={manejoDeCarrito} className="agregarAlCarrito">
            <BsFillCartFill />
            Agregar al carrito
          </button>
        </>
      )}
    </>
  );
};
