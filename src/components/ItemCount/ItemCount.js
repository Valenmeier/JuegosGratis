import React from "react";
import { useState } from "react";
import "./counter.css";
import { BsFillCartFill } from "react-icons/bs";

export const ItemCount = ({ stock, initial, product }) => {
  const [contador, setContador] = useState(initial);
  const [stockTotal, onAdd] = useState(stock);

  let suma = () => {
    if (contador >= stockTotal) {
      alert(`Limite de stock alcanzado`);
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
      let mensaje = `Se han agregado ${contador} ${product} al carrito`;
      let cantidadDisponible = Number(stockTotal) - contador;
      if (contador > cantidadDisponible) {
        onAdd(cantidadDisponible);
        setContador(cantidadDisponible);
      } else {
        onAdd(cantidadDisponible);
        setContador(contador);
      }
      alert(mensaje);
    } else {
      alert(`No hay suficiente stock`);
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
      <button onClick={manejoDeCarrito} className="agregarAlCarrito">
        <BsFillCartFill />
        Agregar al carrito
      </button>
    </>
  );
};
