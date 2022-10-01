import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "./carrito.css";
import { Link } from "react-router-dom";
import { IndividualCartItem } from "../IndividualCartItem/IndividualCartItem";
import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2";

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
  let actualizarStock = (id, nuevoStock) => {
    const queryRef = doc(db, "items", `${id}`);
    updateDoc(queryRef, { stock: nuevoStock });
  };
  let mostrarIds = () => {
    value.productCartList.forEach((res) => {
      console.log(`Stock actual:${res.stock}`);
      let nuevoStock = res.stock - res.quantity;
      actualizarStock(res.id, nuevoStock);
    });
  };
  if (idOrder) {
    Swal.fire({
      title: `Compra realizada con éxito`,
      text: `Ante cualquier problema consultar por la orden ${idOrder}`,
      color: "#fff",
      customClass: {
        popup: "ModalCompra",
        title: "textoModal",
        confirmButton: "botonConfirmacion",
      },
    }).then((res) => {
      setIdOrder("");
      mostrarIds();
      value.clearAllItems();
    });
  }
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

        <h5>Carrito:</h5>
        {value.productCartList.map((item) => (
          <IndividualCartItem key={item.id} item={item} value={value} />
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
