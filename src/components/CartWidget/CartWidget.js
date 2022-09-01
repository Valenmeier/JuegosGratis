import React from "react";
import "./carrito.css";
import { BsFillCartFill } from "react-icons/bs";

export const CartWidget = () => {
  return (
    <div className="carrito">
      <BsFillCartFill />
        <h5>5</h5>
    </div>
  );
};
