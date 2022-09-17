import React from "react";
import "./navbar.css";
import { AiFillHome } from "react-icons/ai";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";

export const NavBar = () => {
  return (
    <header className="header">
      <Link to={"/"}>
        <Logo />
      </Link>
      <nav className="barraDeNavegacion">
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "clase1" : "clase2")}
              to="/"
            >
              Inicio <AiFillHome />{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "clase1" : "clase2")}
              to="/catalogo"
            >
              {" "}
              Catálogo{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "clase1" : "clase2")}
              to="/juegos/gratis"
            >
              {" "}
              Juegos Gratis{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "clase1" : "clase2")}
              to="/juegos/pagos"
            >
              {" "}
              Juegos Pagos{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "clase1" : "clase2")}
              to="/atencion-al-cliente"
            >
              {" "}
              Atención al cliente{" "}
            </NavLink>
          </li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
};
