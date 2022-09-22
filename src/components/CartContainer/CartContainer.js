import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import "./carrito.css";
import { Link } from "react-router-dom";
import { IndividualCartItem } from "../IndividualCartItem/IndividualCartItem";


export const CartContainer = () => {
  const value = useContext(CartContext);
  let carritoOcupado = (
    <div className="fondoCarritoLLeno">
      <div className="fondoProductos">
        <h5>Carrito:</h5>
        {value.productCartList.map((item, i) => (
          <IndividualCartItem key={i} item={item} i={i} value={value}/>
        ))}
      </div>
      <div className="footerCarritoLleno">
        <button>Comprar todo</button>
        <button onClick={value.clearAllItems}>Vaciar carrito</button>
        <div>
         <h5>Precio total= ${value.precioTotal()}</h5>
        </div>
      </div>
    </div>
  );

  let carritoVacio = (
    <div className="carritoVacio">
      <div className="capa">
        <h4>El carrito está vacio</h4>
        <Link to="/catalogo">
          <button>Ir al catálogo</button>
        </Link>
      </div>
    </div>
  );
  return <>{value.productCartList[0] ? carritoOcupado : carritoVacio}</>;
};
