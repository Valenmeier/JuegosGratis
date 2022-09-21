import React, { useEffect } from "react";
import "./carrito.css";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export const CartWidget = () => {
  const listaContexto = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    let obtenerCantidades = listaContexto.productCartList.map(
      (item) => item.quantity
    );

    let nuevaCantidad = obtenerCantidades.reduce(
      (cantidadAnterior, cantidadAgregar) => {
        return cantidadAnterior + cantidadAgregar;
      },
      0
    );
    setCantidad(nuevaCantidad);
  }, [listaContexto]);
  return (
    <div className="carrito">
      <Link to="/cart">
        {listaContexto.productCartList.length > 0 ? (
          <>
            <BsFillCartFill />
            <h5>{cantidad}</h5>
          </>
        ) : (
          <BsFillCartFill />
        )}
      </Link>
    </div>
  );
};
