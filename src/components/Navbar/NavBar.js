import React from 'react'
import "./navbar.css"
import logo from "./JuegosGratisLogo.png"
import {Carrito} from '../Carrito/Carrito'

export const NavBar = () => {
  return (
    <header className="header">
      <div className='logo'>
        <img src={logo} alt="JuegosGratisLogo" />
        <h4>JuegosGratis</h4>
      </div>
      <nav className="barraDeNavegacion">
        <ul>
          <li><a href="#"> Inicio </a></li>
          <li><a href="#"> Catálogo </a></li>
          <li><a href="#"> Atención al cliente </a></li>
          <li><Carrito/></li>
        </ul>
      </nav>
    </header>
  )
}

