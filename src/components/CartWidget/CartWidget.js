import React from "react";
import "./carrito.css";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export const CartWidget = () => {
  return (
    <div className="carrito">
      <Link to="/cart">
        <BsFillCartFill />
        <h5>5</h5>
      </Link>
    </div>
  );
};
