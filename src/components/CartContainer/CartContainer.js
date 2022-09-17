import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartContainer = () => {
  const value = useContext(CartContext);

  let carritoOcupado = (
    <div>
      <div>
        {value.productCartList.map((item, i) => (
          <div className="productosEnCarrito" key={i}>
            <p>
              {item.name}-{item.quantity}
            </p>
            <button
              onClick={() => {
                value.removeItem(item.id);
              }}
            >
              Eliminar del carrito
            </button>
          </div>
        ))}
        <button onClick={value.clearAllItems}>Vaciar carrito</button>
      </div>
    </div>
  );

  let carritoVacio = <h4>El carrito esta vacio</h4>;
  return <>{value.productCartList[0] ? carritoOcupado : carritoVacio}</>;
};
