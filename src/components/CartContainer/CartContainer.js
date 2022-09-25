import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./carrito.css";
import { Link } from "react-router-dom";
import { IndividualCartItem } from "../IndividualCartItem/IndividualCartItem";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";

export const CartContainer = () => {
  const value = useContext(CartContext);
  const [idOrder, setIdOrder] = useState("");
  let sendOrder = (e) => {
    e.preventDefault();
    const orden = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
        date: new Date().toLocaleString(),
      },
      items: value.productCartList,
      total: value.precioTotal(),
    };
    const queryRef = collection(db, "orders");
    addDoc(queryRef, orden).then((response) => setIdOrder(response.id));
  };
  const updateOrder = () => {
    const queryRef = doc(db, "orders", idOrder);
    updateDoc(queryRef, {
      buyer: {
        name: document.querySelector(`.nombreComprador`).value,
        phone: document.querySelector(`.telefonoComprador`).value,
        email: document.querySelector(`.emailComprador`).value,
        date: new Date().toLocaleString(),
      },
      items: value.productCartList,
      total: value.precioTotal(),
    }).then((res) => console.log(res));
  };
  let carritoOcupado = (
    <div className="fondoCarritoLLeno">
      <div className="fondoProductos">
        <form id="formularioCompra" onSubmit={sendOrder}>
          <label>
            Nombre: <input type="text" className="nombreComprador" required />
          </label>
          <label>
            Teléfono:{" "}
            <input type="text" className="telefonoComprador" required />
          </label>
          <label>
            Email: <input type="email" className="emailComprador" required />
          </label>
        </form>
        {idOrder && (
          <>
            <button onClick={updateOrder}>Actualizar orden</button>
            <p>Su orden fue creada, id:{idOrder}</p>
          </>
        )}
        <h5>Carrito:</h5>
        {value.productCartList.map((item, i) => (
          <IndividualCartItem key={i} item={item} i={i} value={value} />
        ))}
      </div>
      <div className="footerCarritoLleno">
        <button type="submit" form="formularioCompra">
          Comprar todo
        </button>
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
